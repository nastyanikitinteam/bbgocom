import { useMemo, useState, FC, useEffect } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Radios from "./Radios/Radios";
import styles from "./detailed-information.module.scss";
import cn from "classnames";

import {
  tabsList,
  propertyType,
  condition,
  numberOfRooms,
  numberOfBathrooms,
  colors,
  carBrands,
  repair,
} from "./config";

interface IProps {
  dataArray: any;
  setDataArray: (bool: any) => void;
  disabled: boolean;
  handleDataArray: (event: any, title: any) => void;
}

const DetailedInformation: FC<IProps> = ({
  dataArray,
  setDataArray,
  disabled,
  handleDataArray,
}) => {
  const [isActiveLang, setIsActiveLang] = useState("USD");

  const handleInput = (event, title) => {
    if (event?.length) {
      setDataArray((prev) => ({ ...prev, [title]: event }));
    } else {
      if (dataArray[title]) {
        let obj = dataArray;
        delete obj[title];
        setDataArray(obj);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>5</span>Detailed information
      </h3>
      {!disabled && (
        <>
          <div className={styles.radios}>
            <Radios
              title="Number of rooms"
              keyName="numberOfRooms"
              list={numberOfRooms}
              isColumn
              handleDataArray={handleDataArray}
            />
            <Radios
              title="Number of bathroom"
              keyName="numberOfBathroom"
              list={numberOfBathrooms}
              isColumn
              handleDataArray={handleDataArray}
            />
            <Radios
              title="Condition"
              keyName="condition"
              list={condition}
              isColumn
              handleDataArray={handleDataArray}
            />
            <Radios
              title="Repair"
              keyName="repair"
              list={repair}
              isColumn
              handleDataArray={handleDataArray}
            />
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.label}>Floor</p>
              <div className={styles.input}>
                <Field
                  name="floor"
                  placeholder={"Floor"}
                  type="number"
                  component={FormInput}
                  keyName="foor"
                  extClassName="foor"
                  onChange={handleDataArray}
                />
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.label}>Total area, m²</p>
              <div className={styles.input}>
                <Field
                  name="enter area"
                  placeholder={"Enter area"}
                  type="number"
                  component={FormInput}
                  keyName="enterArea"
                  extClassName="enterArea"
                  onChange={handleDataArray}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default DetailedInformation;
