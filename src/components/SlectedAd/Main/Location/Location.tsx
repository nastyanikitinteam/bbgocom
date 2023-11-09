import { FC, useEffect, useState } from "react";
import styles from "./location.module.scss";
import Map from "components/Forms/CreateAdForm/Map/Map";

interface IProps {
  isCurrentLocation: any;
}

const Info: FC<IProps> = ({ isCurrentLocation }) => {
  const [isCoordinates, setIsCoordinates] = useState({ lat: 15, lng: 101 });

  const [isMapZoom, setIsMapZoom] = useState(15);

  useEffect(() => {
    setIsCoordinates({
      lat: isCurrentLocation?.lat,
      lng: isCurrentLocation?.lng,
    });
  }, [isCurrentLocation?.lat]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Location</h3>
      <div className={styles.map}>
        <Map isCoordinates={isCoordinates} isMapZoom={isMapZoom} />
      </div>
      <h3 className={styles.city}>{isCurrentLocation?.name}</h3>
      <p className={styles.adress}>Chiang Mai, Kingkaew Soi 2/7</p>
    </div>
  );
};

export default Info;
