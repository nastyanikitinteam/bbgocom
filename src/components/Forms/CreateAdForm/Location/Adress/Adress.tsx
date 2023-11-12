import { useState, FC, useCallback, useEffect } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios"; // Якщо ви використовуєте Axios
import FormInput from "components/FormElements/FormInput/FormInput";
import { useTranslation } from "react-i18next";
import styles from "../location.module.scss";

interface IProps {
  setIsMapZoom: (num: number) => void;
  setIsCoordinates: (any) => void;
}

const Adress: FC<IProps> = ({ setIsMapZoom, setIsCoordinates }) => {
  const { t } = useTranslation();

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
          alert(`${t(`errors.mapErrorNoThailand`)}`);
        }
      } else {
        alert("Adress no found");
      }
    } catch (error) {
      console.error("Troubleshooting when rectifying coordinates:", error);
    }
  };

  const handleAdressInput = (value: any) => {
    const newAddress = value.target.value;
    newAddress.length !== 0 && getCoordinatesFromAddress(newAddress);
  };

  return (
    <div className={styles.item}>
      <p className={styles.label}>{t(`createad.address`)}</p>
      <div className={styles.input}>
        <Field
          name="adress"
          placeholder={t(`createad.address`)}
          type="text"
          component={FormInput}
          extClassName="search"
          onBlur={(e) => handleAdressInput(e)}
        />
      </div>
    </div>
  );
};
export default Adress;
