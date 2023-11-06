import { FC } from "react";
import { Field } from "react-final-form";
import PriceInput from "components/FormElements/FormInput/PriceInput";
import { currencyList } from "config/currency";
import styles from "./price.module.scss";
import cn from "classnames";

interface IProps {
  disabled?: boolean;
  isActiveCurrency: string;
  setIsActiveCurrency: (str: string) => void;
}

const Price: FC<IProps> = ({
  disabled,
  isActiveCurrency,
  setIsActiveCurrency,
}) => {
  const handleLanguage = (value) => {
    setIsActiveCurrency(value);
  };

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title)}>
        <span className={styles.num}>4</span>Price
      </h3>
      <>
        <div className={styles.items}>
          <div className={cn(styles.item, styles.currency)}>
            <p className={styles.label}>Currency</p>
            <div className={styles.input}>
              <div className={styles.tabs}>
                {currencyList.map(({ value }) => {
                  return (
                    <div
                      className={cn(styles.tab, {
                        [styles.active]: value === isActiveCurrency,
                      })}
                      key={value}
                      onClick={() => handleLanguage(value)}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.label}>Price</p>
            <div className={styles.input}>
              <Field
                name="price"
                placeholder="0"
                type="text"
                component={PriceInput}
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Price;
