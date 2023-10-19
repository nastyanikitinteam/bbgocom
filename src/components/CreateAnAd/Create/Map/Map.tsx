// @ts-nocheck
import React, { useEffect, useRef, ReactElement, useState, FC } from "react";
import ReactDOM from "react-dom";
import { Wrapper, Status } from "./index";

import pointIcon from "images/icons/point.png";

interface IProps {
  setIsMarkerAdress: (bool: any) => void;
  handleDataArray: (event: any, title: any) => void;
  addressInputRef: any;
  isCoordinates: any;
  isMapZoom: number;
}

const Map: FC<IProps> = ({
  setIsMarkerAdress,
  addressInputRef,
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
  }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
    zoomControl: true;
    streetViewControl: false;
    mapTypeControl: false;
    fullscreenControl: false;
  }) => {
    const mapRef = useRef();
    const markerRef = useRef();
    // const addressInputRef = useRef();

    const [isMarkerAdress, seMarkerAdress] = useState({});

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
        disableDefaultUI,
      });

      const marker = new window.google.maps.Marker({
        position: center,
        map,
        draggable: false,
        icon: customMarkerIcon,
      });

      map.addListener("click", (event) => {
        const newPosition = event.latLng.toJSON();
        setMarkerPosition(newPosition);
        marker.setPosition(event.latLng);

        getAddressFromCoordinates(newPosition);
      });

      getAddressFromCoordinates(center);
    }, []);

    const getAddressFromCoordinates = (coordinates) => {
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ location: coordinates }, (results, status) => {
        if (status === "OK" && results[0]) {
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

          // setIsMarkerAdress(results[0]);
          addressInputRef.current.value = formattedAddress;
          // handleDataArray(formattedAddress, "region");
        }
      });
    };

    return (
      <div>
        <div ref={mapRef} id="map" style={{ height: "300px" }} />
      </div>
    );
  };

  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} render={render}>
      <MyMapComponent
        center={isCoordinates}
        zoom={isMapZoom}
        disableDefaultUI={disableDefaultUI}
      />
    </Wrapper>
  );
};

export default Map;
