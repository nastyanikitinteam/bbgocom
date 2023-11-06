import { useState, FC, useCallback, useEffect } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios"; // Якщо ви використовуєте Axios
import SelectContainer from "components/Select/Select";
import Map from "../Map/Map";
import styles from "./location.module.scss";
import cn from "classnames";

import { regionList, adressList } from "../DetailedInformation/config";

interface IProps {
  dataArray: any;
  disabled?: boolean;
  handleDataArray: (event: any, title: any) => void;
  setDataArray: (arr: any) => void;
}

const Location: FC<IProps> = ({
  dataArray,
  disabled,
  handleDataArray,
  setDataArray,
}) => {
  const [locationArray, setLocationArray] = useState(
    dataArray.location ? dataArray.location : {}
  );

  const [isAdress, setIsAdress] = useState(
    locationArray?.name ? locationArray.name : ""
  );

  const [isCoordinates, setIsCoordinates] = useState({
    lat: locationArray?.lat ? locationArray.lat : 15,
    lng: locationArray?.lng ? locationArray.lng : 101,
  });

  const [isMapZoom, setIsMapZoom] = useState(locationArray?.name ? 10 : 7);

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
          // setError("Coordinate not to lie in Thailand");
        }
      } else {
        console.log("adress no found");
        // setError("Address not found");
      }
    } catch (error) {
      console.error("Troubleshooting when rectifying coordinates:", error);
      // setError("Troubleshooting when rectifying coordinates");
    }
  };

  const handleRegion = (value: any) => {
    if (value != null) {
      handleInformationArray(value, "region");
      setIsMapZoom(8);
      setIsAdress("");
    }
    //@ts-ignore
    const isCurrentRegion = regionList.filter(
      (region) => region.value === value
    )[0];
    //@ts-ignore
    setIsCoordinates(isCurrentRegion?.location);
  };

  const handleAdressInput = (value: any) => {
    const newAddress = value.target.value;
    setIsAdress(newAddress);
    newAddress.length !== 0 && getCoordinatesFromAddress(newAddress);
  };

  const handleInformationArray = useCallback((event, title) => {
    if (event?.length) {
      setLocationArray((prev) => ({ ...prev, [title]: event }));
    } else {
      if (locationArray[title]) {
        let obj = locationArray;
        delete obj[title];
        setLocationArray(obj);
      }
    }
  }, []);

  useEffect(() => {
    handleInformationArray(isAdress, "name");
  }, [isAdress]);

  useEffect(() => {
    setDataArray({
      ...dataArray,
      location: locationArray,
    });
  }, [locationArray]);

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
