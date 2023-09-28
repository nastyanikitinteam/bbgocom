import { useMemo, useState, FC, useEffect } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import SelectContainer from "components/Select/Select";
import styles from "./location.module.scss";
import cn from "classnames";

import { regionList, adressList } from "../DetailedInformation/config";

interface IProps {
  dataArray: any;
  disabled: boolean;
  handleDataArray: (event: any, title: any) => void;
}

const Location: FC<IProps> = ({ dataArray, disabled, handleDataArray }) => {
  const handleRegion = (value: any) => {
    if (value != null) {
      handleDataArray(value, "region");
    }
  };

  const handleAdress = (value: any) => {
    if (value != null) {
      handleDataArray(value, "adress");
    }
  };

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
                <SelectContainer
                  options={adressList}
                  classname="search big withIcon"
                  onChange={handleAdress}
                  placeholder="Enter address"
                  title="Enter address"
                  isSearch
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Location;
