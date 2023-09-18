import { FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  const markers = [
    {
      lat: 40.7128,
      lng: -74.006,
      address: "New York, NY",
    },
    {
      lat: 34.0522,
      lng: -118.2437,
      address: "Los Angeles, CA",
    },
    {
      lat: 41.8781,
      lng: -87.6298,
      address: "Chicago, IL",
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      address: "London, UK",
    },
    {
      lat: 48.8566,
      lng: 2.3522,
      address: "Paris, France",
    },
    {
      lat: -33.8651,
      lng: 151.2099,
      address: "Sydney, Australia",
    },
    {
      lat: 35.682839,
      lng: 139.759455,
      address: "Tokyo, Japan",
    },
    {
      lat: 40.4168,
      lng: -3.7038,
      address: "Madrid, Spain",
    },
    {
      lat: -23.5505,
      lng: -46.6333,
      address: "Sao Paulo, Brazil",
    },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyD63zJ4TU1D6YJxCz6JMggh7M_Q2KMtucI">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={10}
      >
        {/* {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.address}
          />
        ))} */}
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
