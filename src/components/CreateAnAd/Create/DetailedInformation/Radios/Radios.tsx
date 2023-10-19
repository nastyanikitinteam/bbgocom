import { useState, FC } from "react";
import styles from "./radios.module.scss";
import Radio from "components/FormElements/Radio/Radio";
import cn from "classnames";

interface IProps {
  title: string;
  list: any;
  isColumn?: boolean;
  handleDataArray: (event: any, title: any) => void;
  keyName: string;
}

const Radios: FC<IProps> = ({
  title,
  list,
  isColumn,
  handleDataArray,
  keyName,
}) => {
  const handleRadioChange = (event) => {
    handleDataArray(event.target.value, keyName);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={cn(styles.list, { [styles.column]: isColumn })}>
        {list.length > 0 ? (
          list.map((item, id) => {
            return (
              <div className={styles.item} key={id}>
                <Radio
                  name={title}
                  value={item}
                  extClassName="filter"
                  onChange={() => handleRadioChange(event)}
                >
                  {item}
                </Radio>
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

export default Radios;
