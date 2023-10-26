import { useMemo, useState, FC, useRef, useCallback, useEffect } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios"; // Якщо ви використовуєте Axios
import SelectContainer from "components/Select/Select";
import Map from "../Map/Map";
import styles from "./location.module.scss";
import cn from "classnames";

import { regionList, adressList } from "../DetailedInformation/config";

interface IProps {
  dataArray: any;
  disabled: boolean;
  handleDataArray: (event: any, title: any) => void;
}

const Location: FC<IProps> = ({ dataArray, disabled, handleDataArray }) => {
  const [isAdress, setIsAdress] = useState("");

  const [isCoordinates, setIsCoordinates] = useState({ lat: 15, lng: 101 });

  const [isMapZoom, setIsMapZoom] = useState(7);

  const [error, setError] = useState(null);

  const getCoordinatesFromAddress = async (address) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address: address,
            key: apiKey,
          },
        }
      );

      if (response.data.status === "OK" && response.data.results.length > 0) {
        const location = response.data.results[0].geometry.location;
        const { lat, lng } = location;

        const isThailand = response.data.results[0].address_components.some(
          (component) =>
            component.types.includes("country") && component.short_name === "TH"
        );
        setError(null);
        if (isThailand) {
          setIsCoordinates({ lat, lng });
          setIsMapZoom(12);
        } else {
          console.log("error");
          setError("Coordinate not to lie in Thailand");
        }
      } else {
        setError("Address not found");
      }
    } catch (error) {
      console.error("Troubleshooting when rectifying coordinates:", error);
      setError("Troubleshooting when rectifying coordinates");
    }
  };

  const handleRegion = (value: any) => {
    if (value != null) {
      handleDataArray(value, "region");
      setIsMapZoom(8);
    }
    //@ts-ignore
    const isCurrentRegion = regionList.filter(
      (region) => region.value === value
    )[0];
    //@ts-ignore
    setIsCoordinates(isCurrentRegion?.location);
  };

  const handleAdressInput = (value: any) => {
    // handleDataArray(value, "adress");
    const newAddress = value.target.value;
    setIsAdress(newAddress);

    getCoordinatesFromAddress(newAddress);
  };

  // const handleBlur = () => {
  //   getCoordinatesFromAddress(isAdress);
  // };

  useEffect(() => {
    // console.log(isAdress);
    handleDataArray(isAdress, "adress");
  }, [isAdress]);

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>6</span>Location
      </h3>

      {!disabled && (
        <>
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.label}>Region</p>
              <div className={styles.input}>
                <SelectContainer
                  options={regionList}
                  classname="region big withIcon"
                  onChange={handleRegion}
                  placeholder="Choose region"
                  title="Choose region"
                />
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.label}>Address</p>
              <div className={styles.input}>
                <input
                  type="text"
                  value={isAdress}
                  className={cn("default-input search")}
                  placeholder="Adress"
                  onChange={handleAdressInput}
                  // onBlur={handleBlur}
                  // readOnly
                />
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <Map
              setIsAdress={setIsAdress}
              isCoordinates={isCoordinates}
              isMapZoom={isMapZoom}
              // handleDataArray={handleDataArray}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Location;
