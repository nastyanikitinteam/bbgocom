import { useMemo, useState } from "react";
import cn from "classnames";
import styles from "./currency.module.scss";

const Currency = () => {
  const [isActiveCurrency, setIsActiveCurrency] = useState("USD");

  const currencyArray = useMemo(
    () => [
      {
        id: 0,
        value: "USD",
      },
      {
        id: 1,
        value: "RUB",
      },
      {
        id: 2,
        value: "THB",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Currency</h3>
      <div className={styles.blocks}>
        {currencyArray.map(({ id, value }) => {
          return (
            <div
              className={cn(styles.block, {
                [styles.active]: isActiveCurrency == value,
              })}
              key={id}
              onClick={() => setIsActiveCurrency(value)}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Currency;
