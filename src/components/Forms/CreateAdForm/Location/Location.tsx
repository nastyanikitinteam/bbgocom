import { useState, FC, useCallback, useEffect } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios"; // Якщо ви використовуєте Axios
import FormInput from "components/FormElements/FormInput/FormInput";
import Adress from "./Adress/Adress";
import Map from "../Map/Map";
import { useTranslation } from "react-i18next";
import styles from "./location.module.scss";
import cn from "classnames";

import Selects from "./Selects/Selects";

interface IProps {
  handleAdress: (val: string) => void;
}

const Location: FC<IProps> = ({ handleAdress }) => {
  const { t } = useTranslation();
  const [isCoordinates, setIsCoordinates] = useState({
    lat: 15,
    lng: 101,
  });

  const [isMapZoom, setIsMapZoom] = useState(7);

  const [error, setError] = useState(null);

  const handleCoordinates = (value: any) => {
    //@ts-ignore
    setIsCoordinates(value?.location);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.num}>6</span>Location
      </h3>
      <div className={styles.items}>
        <Selects
          handleCoordinates={handleCoordinates}
          setIsMapZoom={setIsMapZoom}
          handleAdress={handleAdress}
        />
        <Adress
          setIsMapZoom={setIsMapZoom}
          setIsCoordinates={setIsCoordinates}
        />
      </div>
      <div className={styles.map}>
        <Map
          handleAdress={handleAdress}
          isCoordinates={isCoordinates}
          isMapZoom={isMapZoom}
        />
      </div>
    </div>
  );
};
export default Location;
