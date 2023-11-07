import { useState, FC, useEffect, useCallback } from "react";
import { Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import NumberInput from "components/FormElements/FormInput/NumberInput";
import Radios from "./Radios/Radios";
import styles from "./detailed-information.module.scss";
import cn from "classnames";

import { createList } from "./config";

interface IProps {
  disabled?: boolean;
}

const DetailedInformation: FC<IProps> = ({ disabled }) => {
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
                />
              );
            } else if (item.type === "input") {
              return (
                <div key={item.key} className={styles.item}>
                  <p className={styles.label}>{item.name}</p>
                  <div className={styles.input}>
                    <Field
                      name={item.key}
                      placeholder={item.placeholder}
                      component={NumberInput}
                      extClassName={item.key}
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
