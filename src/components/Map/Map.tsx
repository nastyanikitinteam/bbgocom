// @ts-nocheck
import { useState, useCallback, FC } from "react";
import * as ReactDOM from "react-dom";
import { GoogleMapProvider } from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import SuperClusterAlgorithm from "../../utils/superClusterAlgorithm";
import WhiteBg from "images/main/white-round-bg.png";
import WhiteBgSm from "images/main/white-round.png";
import MarkersBig from "images/main/markers-big.png";
import MarkersSm from "images/main/markers-sm.png";
import MarkersStarBlack from "images/main/marjers-star-black.png";
import MarkersStarGreen from "images/main/marjers-star-green.png";
import CardProduct from "components/CardProduct/CardProduct";
// import { productLst } from "components/MainPage/Recommend/config";
import cn from "classnames";

interface IProps {
  isWishlist?: boolean;
  productList: any;
}

const Index: FC<IProps> = ({ isWishlist, productList }) => {
  let isCurrentMarker;

  const addMarkers = (map) => {
    const infoWindow = new google.maps.InfoWindow();

    const markers = productList.map((item) => {
      const lat = item.location.lat;
      const lng = item.location.lng;

      const iconWidth = isWishlist ? 40 : item.price.length * 10;
      const iconHeight = isWishlist ? 40 : 30;
      const markersUrl = isWishlist
        ? MarkersStarBlack.src
        : item.price.length > 7
        ? MarkersBig.src
        : WhiteBg.src;

      const marker = new google.maps.Marker({ position: { lat, lng } });

      const customIcon = {
        url: markersUrl,
        scaledSize: new google.maps.Size(iconWidth, iconHeight),
      };

      marker.addListener("click", (e) => {
        if (isCurrentMarker) {
          isCurrentMarker.setIcon(customIcon);
          isCurrentMarker = marker;
        } else {
          isCurrentMarker = marker;
        }
        infoWindow.setPosition({ lat, lng });
        const content = document.createElement("div");

        ReactDOM.render(
          <CardProduct
            title={item.name}
            images={item.images}
            price={item.price}
            oldPrice={item.oldPrice}
            location={item.location}
            isWish={item.isWish}
            isGreenCard
            isMap
          />,
          content
        );
        infoWindow.setContent(content);
        infoWindow.open({ map });

        if (isWishlist) {
          const hoverIcon = {
            url: MarkersStarGreen.src,
            scaledSize: new google.maps.Size(iconWidth, iconHeight),
          };
          marker.setIcon(hoverIcon);
        }
      });

      marker.setIcon(customIcon);
      marker.setLabel({
        text: !isWishlist && `${item.price}`,
        color: "black",
      });

      return marker;
    });

    infoWindow.addListener("closeclick", () => {
      if (isWishlist) {
        const customIcon = {
          url: MarkersStarBlack.src,
          scaledSize: new google.maps.Size(40, 40),
        };
        isCurrentMarker && isCurrentMarker.setIcon(customIcon);
        isCurrentMarker = null;
      }
    });

    const markersClustererUrl =
      markers.length < 10 ? MarkersSm.src : WhiteBgSm.src;
    const markersClustererUrlSize = new google.maps.Size(
      markers.length.toString().length * 10 + 20,
      30
    );

    new MarkerClusterer({
      markers,
      map,
      algorithm: new SuperClusterAlgorithm({ radius: 200 }),
      renderer: {
        render: ({ markers, _position: position }) => {
          return new google.maps.Marker({
            position: {
              lat: position.lat(),
              lng: position.lng(),
            },
            label: {
              text: String(markers.length),
              color: "black",
            },
            icon: {
              url: markersClustererUrl,
              scaledSize: markersClustererUrlSize,
            },
          });
        },
      },
    });
  };

  const [mapContainer, setMapContainer] = useState(null);
  const onLoad = useCallback((map) => addMarkers(map), [productList]);

  const mapOptions = {
    zoom: 7,
    center: {
      lat: 15,
      lng: 101,
    },
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };

  return (
    productList.length && (
      <GoogleMapProvider
        googleMapsAPIKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        options={mapOptions}
        mapContainer={mapContainer}
        onLoad={onLoad}
      >
        <div
          className={cn({ wishlist: isWishlist })}
          ref={(node) => setMapContainer(node)}
          style={{ height: "100%" }}
        />
      </GoogleMapProvider>
    )
  );
};

export default Index;
