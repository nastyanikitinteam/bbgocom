import React, { useState, FC } from "react";
import styles from "./body-type.module.scss";
import cn from "classnames";
import DelIcon from "images/icons/del.svg";

import { bodyType } from "./config";

interface IProps {
  title: string;
}

const BodyType: FC<IProps> = ({ title }) => {
  const [selectedType, setSelectedType] = useState([]);

  const toggleType = (type) => {
    console.log(type, selectedType);
    if (selectedType.includes(type)) {
      setSelectedType(selectedType.filter((c) => c !== type));
    } else {
      setSelectedType([...selectedType, type]);
    }
  };

  const camelCaseToWords = (camelCaseString) => {
    return camelCaseString.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  };

  const handleCleanButtonClick = () => {
    setSelectedType([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
        {selectedType.length > 0 && (
          <div className={styles.clean} onClick={handleCleanButtonClick}>
            <span className={styles.icon}>
              <DelIcon />
            </span>
            Clean All
          </div>
        )}
      </div>

      <div className={styles.list}>
        {bodyType.map((item, id) => {
          return (
            <div
              className={cn(styles.item, {
                [styles.active]: selectedType.includes(item.type),
              })}
              onClick={() => toggleType(item.type)}
              key={id}
            >
              <span className={styles.img}>{item.image}</span>
              <p className={styles.name}>{item.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyType;
