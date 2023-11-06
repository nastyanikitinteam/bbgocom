import { FC } from "react";
import cn from "classnames";
import styles from "./currency.module.scss";

import { currencyList } from "config/currency";

interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
}

const Currency: FC<IProps> = ({ dataPrice, handleClickPrice }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Currency</h3>
      <div className={styles.blocks}>
        {currencyList.map(({ value, label }) => {
          return (
            <div
              className={cn(styles.block, {
                [styles.active]: dataPrice.currency == value,
              })}
              key={value}
              onClick={() => handleClickPrice("currency", value)}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Currency;
