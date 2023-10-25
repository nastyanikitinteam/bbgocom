// @ts-nocheck
import React, {
  useEffect,
  useRef,
  ReactElement,
  useState,
  FC,
  memo,
} from "react";
import ReactDOM from "react-dom";
import { Wrapper, Status } from "./index";

import pointIcon from "images/icons/point.png";

interface IProps {
  handleDataArray?: (event: any, title: any) => void;
  setIsAdress?: (str: string) => void;
  isCoordinates: any;
  isMapZoom: number;
}

const Map: FC<IProps> = ({
  setIsAdress,
  isCoordinates,
  isMapZoom,
  // handleDataArray,
}) => {
  const disableDefaultUI = true;
  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };

  const MyMapComponent = ({
    center,
    zoom,
    zoomControl,
    streetViewControl,
    mapTypeControl,
    fullscreenControl,
  }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
    zoomControl: boolean;
    streetViewControl: boolean;
    mapTypeControl: boolean;
    fullscreenControl: boolean;
  }) => {
    const mapRef = useRef();
    const markerRef = useRef();

    const [markerPosition, setMarkerPosition] = useState(center);

    const customMarkerIcon = {
      url: pointIcon.src,
      size: new window.google.maps.Size(20, 41),
      scaledSize: new window.google.maps.Size(20, 41),
    };

    useEffect(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        // disableDefaultUI,
        zoomControl,
        streetViewControl,
        mapTypeControl,
        fullscreenControl,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5",
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#f5f5f5",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#dadada",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#c9c9c9",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
        ],
      });

      const marker = new window.google.maps.Marker({
        position: center,
        map,
        draggable: false,
        icon: customMarkerIcon,
      });

      map.addListener("click", (event) => {
        if (setIsAdress) {
          const newPosition = event.latLng.toJSON();
          setMarkerPosition(newPosition);
          marker.setPosition(event.latLng);

          getAddressFromCoordinates(newPosition);
        }
      });

      setIsAdress && getAddressFromCoordinates(center);
    }, []);

    const getAddressFromCoordinates = (coordinates) => {
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ location: coordinates }, (results, status) => {
        if (status === "OK" && results[0]) {
          const isThailand = results[0].address_components.some(
            (component) =>
              component.types.includes("country") &&
              component.short_name === "TH"
          );
          if (isThailand) {
            const filteredAddressComponents =
              results[0].address_components.filter((component) => {
                return !(
                  component.types.includes("plus_code") ||
                  component.types.includes("postal_code")
                );
              });
            const formattedAddress = filteredAddressComponents
              .map((component) => component.long_name)
              .join(", ");

            setIsAdress(formattedAddress);
          } else {
            console.log("no Thailand");
          }
        }
      });
    };

    return (
      <div>
        <div
          ref={mapRef}
          id="map"
          style={{ height: "300px", borderRadius: "25px" }}
        />
      </div>
    );
  };

  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} render={render}>
      <MyMapComponent
        center={isCoordinates}
        zoom={isMapZoom}
        // disableDefaultUI={disableDefaultUI}
        zoomControl={false}
        streetViewControl={false}
        mapTypeControl={false}
        fullscreenControl={false}
      />
    </Wrapper>
  );
};

export default memo(Map);