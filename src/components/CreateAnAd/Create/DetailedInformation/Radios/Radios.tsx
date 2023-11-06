import { useState, FC, useEffect, memo } from "react";
import styles from "./radios.module.scss";
import Radio from "components/FormElements/Radio/Radio";
import cn from "classnames";
import { useFormState, Field } from "react-final-form";

interface IProps {
  title: string;
  list: any;
  isColumn?: boolean;
  keyName: string;
}

const Radios: FC<IProps> = ({ title, list, isColumn, keyName }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={cn(styles.list, { [styles.column]: isColumn })}>
        {list.length > 0 ? (
          list.map((item, id) => {
            return (
              <div className={styles.item} key={id}>
                <Field
                  name={keyName}
                  type="radio"
                  value={item}
                  extClassName="filter"
                  //@ts-ignore
                  component={Radio}
                />
              </div>
            );
          })
        ) : (
          <p className={styles.noresult}>No result</p>
        )}
      </div>
    </div>
  );
};

export default memo(Radios);
