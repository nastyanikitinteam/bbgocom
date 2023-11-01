import { useState, FC, useEffect, useCallback } from "react";
import { Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Radios from "./Radios/Radios";
import styles from "./detailed-information.module.scss";
import cn from "classnames";

import { createList } from "./config";

interface IProps {
  dataArray: any;
  setDataArray: (arr: any) => void;
  disabled: boolean;
  handleDataArray: (event: any, title: any) => void;
}

const DetailedInformation: FC<IProps> = ({
  dataArray,
  setDataArray,
  disabled,
  handleDataArray,
}) => {
  const [informationArray, setInformationArray] = useState(
    dataArray.information ? dataArray.information : {}
  );

  const handleInformationArray = useCallback((event, title) => {
    if (event?.length) {
      setInformationArray((prev) => ({ ...prev, [title]: event }));
    } else {
      if (informationArray[title]) {
        let obj = informationArray;
        delete obj[title];
        setInformationArray(obj);
      }
    }
  }, []);

  useEffect(() => {
    setDataArray({
      ...dataArray,
      information: informationArray,
    });
  }, [informationArray]);

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>5</span>Detailed information
      </h3>
      {!disabled && (
        <div className={styles.items}>
          {createList.map((item) => {
            if (item.type === "radio") {
              return (
                <Radios
                  key={item.key}
                  title={item.name}
                  keyName={item.key}
                  list={item.variants}
                  isColumn
                  handleDataArray={handleInformationArray}
                  informationArray={informationArray}
                />
              );
            } else if (item.type === "input") {
              return (
                <div key={item.key} className={styles.item}>
                  <p className={styles.label}>{item.name}</p>
                  <div className={styles.input}>
                    <Field
                      name={item.name}
                      placeholder={item.placeholder}
                      type="number"
                      component={FormInput}
                      keyName={item.key}
                      extClassName={item.key}
                      onChange={handleInformationArray}
                      text={informationArray[item.key]}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
export default DetailedInformation;
