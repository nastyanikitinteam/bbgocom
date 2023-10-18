// @ts-nocheck
import React, { useEffect, useRef, ReactElement, useState } from "react";
import ReactDOM from "react-dom";
import { Wrapper, Status } from "./index";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({
  center,
  zoom,
  disableDefaultUI,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  disableDefaultUI: boolean;
}) {
  const mapRef = useRef();
  const markerRef = useRef();
  const addressInputRef = useRef();

  const [isMarkerAdress, seMarkerAdress] = useState({});

  const [markerPosition, setMarkerPosition] = useState(center);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      disableDefaultUI,
    });

    const marker = new window.google.maps.Marker({
      position: center,
      map,
      draggable: true,
    });

    marker.addListener("dragend", () => {
      const newPosition = marker.getPosition().toJSON();
      setMarkerPosition(newPosition);

      // Викликаємо функцію для отримання адреси за координатами
      getAddressFromCoordinates(newPosition);
    });
  }, []);

  const getAddressFromCoordinates = (coordinates) => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ location: coordinates }, (results, status) => {
      if (status === "OK" && results[0]) {
        seMarkerAdress(results[0]);
        const formattedAddress = results[0].formatted_address;
        console.log(
          `${results[0].address_components[1].long_name}, ${results[0].address_components[3].long_name}, ${results[0].address_components[4].long_name}`
        );
        console.log(results[0]);
        addressInputRef.current.value = formattedAddress;
      }
    });
  };

  return (
    <div>
      <div ref={mapRef} id="map" style={{ height: "300px" }} />
      <input
        ref={addressInputRef}
        type="text"
        placeholder="Адреса маркера"
        readOnly
      />
    </div>
  );
}

const Map = () => {
  const center = {
    lat: 15,
    lng: 101,
  };
  const zoom = 7;
  const disableDefaultUI = true;

  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} render={render}>
      <MyMapComponent
        center={center}
        zoom={zoom}
        disableDefaultUI={disableDefaultUI}
      />
    </Wrapper>
  );
};

export default Map;
