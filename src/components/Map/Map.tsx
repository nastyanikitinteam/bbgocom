// @ts-nocheck
import { useState, useCallback } from "react";
import * as ReactDOM from "react-dom";
import { GoogleMapProvider } from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import SuperClusterAlgorithm from "../../utils/superClusterAlgorithm";
import WhiteBg from "images/main/white-round-bg.png";
import WhiteBgSm from "images/main/white-round.png";
import MarkersBig from "images/main/markers-big.png";
import MarkersSm from "images/main/markers-sm.png";
import CardProduct from "components/CardProduct/CardProduct";
import { productLst } from "components/MainPage/Recommend/config";

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

export default function Index() {
  const [mapContainer, setMapContainer] = useState(null);
  const onLoad = useCallback((map) => addMarkers(map), []);

  return (
    <GoogleMapProvider
      googleMapsAPIKey="AIzaSyD63zJ4TU1D6YJxCz6JMggh7M_Q2KMtucI"
      options={mapOptions}
      mapContainer={mapContainer}
      onLoad={onLoad}
    >
      <div ref={(node) => setMapContainer(node)} style={{ height: "100%" }} />
    </GoogleMapProvider>
  );
}

function addMarkers(map) {
  const infoWindow = new google.maps.InfoWindow();

  const markers = productLst.map((item) => {
    const lat = item.location.lat;
    const lng = item.location.lng;

    const iconWidth = item.price.length * 10;
    const markersUrl = item.price.length > 7 ? MarkersBig.src : WhiteBg.src;

    const marker = new google.maps.Marker({ position: { lat, lng } });

    marker.addListener("click", (e) => {
      infoWindow.setPosition({ lat, lng });
      const content = document.createElement("div");
      ReactDOM.render(
        <CardProduct
          title={item.name}
          images={item.images}
          price={item.price}
          oldPrice={item.oldPrice}
          location={item.location.name}
          isWish={item.isWish}
          isGreenCard
          isMap
        />,
        content
      );
      infoWindow.setContent(content);
      infoWindow.open({ map });
    });

    const customIcon = {
      url: markersUrl,
      scaledSize: new google.maps.Size(
        typeof price === "undefined" ? iconWidth : iconWidth,
        typeof price === "undefined" ? 30 : 30
      ),
    };

    marker.setIcon(customIcon);
    marker.setLabel({
      text: `${item.price}`,
      color: "black",
    });

    return marker;
  });

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
            url: markers.length < 10 ? MarkersSm.src : WhiteBgSm.src,
            scaledSize: new google.maps.Size(
              markers.length.toString().length * 10 + 20,
              30
            ),
          },
        });
      },
    },
  });
}
