import { useState, useCallback } from "react";
import { GoogleMapProvider } from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import SuperClusterAlgorithm from "../../utils/superClusterAlgorithm";
import trees from "./trees";

const mapOptions = {
  zoom: 12,
  center: {
    lat: 43.68,
    lng: -79.43,
  },
};

// const Map = () => {
//   return (

//   )
// }

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
      <div ref={(node) => setMapContainer(node)} style={{ height: "100vh" }} />
    </GoogleMapProvider>
  );
}

function addMarkers(map) {
  // @ts-ignore
  const infoWindow = new google.maps.InfoWindow();

  const markers = trees.map(([name, lat, lng]) => {
    // @ts-ignore
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

    return marker;
  });

  new MarkerClusterer({
    markers,
    map,
    algorithm: new SuperClusterAlgorithm({ radius: 200 }),
    renderer: {
      // @ts-ignore
      render: ({ markers, _position: position }) => {
        // @ts-ignore
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
            url: "https://koshka.top/uploads/posts/2021-12/thumbs/1639509672_41-koshka-top-p-kota-rizhika-44.jpg",
            // @ts-ignore
            scaledSize: new google.maps.Size(45, 45),
          },
        });
      },
    },
  });
}
