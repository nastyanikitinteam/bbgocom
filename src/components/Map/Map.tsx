// @ts-nocheck
import { useState, useCallback } from "react";
import { GoogleMapProvider } from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import SuperClusterAlgorithm from "../../utils/superClusterAlgorithm";
import WhiteBg from "images/main/white-round-bg.png";
import WhiteBgSm from "images/main/white-round.png";
import trees from "./trees";

const mapOptions = {
  zoom: 12,
  center: {
    lat: 43.68,
    lng: -79.43,
  },
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }, // Скрываем маркеры "poi"
      ],
    },
  ],
  zoomControl: true, // Оставляем кнопки масштабирования
  streetViewControl: false, // Скрываем кнопку Street View
  mapTypeControl: false,
};

export default function Index() {
  const [mapContainer, setMapContainer] = useState(null);
  const onLoad = useCallback((map) => addMarkers(map), []);

  return (
    <GoogleMapProvider
      googleMapsAPIKey="AIzaSyARPU7EpZus5RgzTH2Ri2ein17DFlvftrk"
      options={mapOptions}
      mapContainer={mapContainer}
      onLoad={onLoad}
    >
      <div ref={(node) => setMapContainer(node)} style={{ height: "100vh" }} />
    </GoogleMapProvider>
  );
}

function addMarkers(map) {
  const infoWindow = new google.maps.InfoWindow();

  const markers = trees.map(([name, lat, lng, price]) => {
    const marker = new google.maps.Marker({ position: { lat, lng } });

    marker.addListener("click", () => {
      infoWindow.setPosition({ lat, lng });
      infoWindow.setContent(`
        <div class="info-window">
          <h2>${name}</h2>
        </div>
      `);
      infoWindow.open({ map });
    });

    const customIcon = {
      url: WhiteBg.src, // Путь к изображению кастомной иконки
      scaledSize: new google.maps.Size(
        typeof price === "undefined" ? 60 : 50,
        typeof price === "undefined" ? 40 : 40
      ), // Размер иконки
    };

    // Задайте кастомную иконку и центрирующую метку с ценой
    marker.setIcon(customIcon);
    marker.setLabel({
      text: `$${price || "10 000"}`, // Ваша цена
      color: "black", // Цвет текста
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
            url: WhiteBgSm.src,
            scaledSize: new google.maps.Size(40, 30),
          },
        });
      },
    },
  });
}
