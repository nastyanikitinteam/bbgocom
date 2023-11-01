import { useState, FC } from "react";
import { Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import { currencyList } from "config/currency";
import styles from "./price.module.scss";
import cn from "classnames";

interface IProps {
  dataArray: any;
  setDataArray: (bool: any) => void;
  disabled: boolean;
  handleDataArray: (event: any, title: any) => void;
}

const Price: FC<IProps> = ({
  dataArray,
  setDataArray,
  disabled,
  handleDataArray,
}) => {
  const [isActiveCurrency, setIsActiveCurrency] = useState(
    dataArray?.currency ? dataArray?.currency : "USD"
  );

  const handleLanguage = (value) => {
    setIsActiveCurrency(value);
    handleDataArray(value, "currency");
  };

  // useEffect(() => {
  //   dataArray?.title && handleDataArray(isActiveCurrency, "currency");
  // }, [dataArray?.files]);

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>4</span>Price
      </h3>
      {!disabled && (
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
              <div
                className={cn(styles.input, {
                  // @ts-ignore
                  [styles.disabled]: !dataArray?.currency,
                })}
              >
                <Field
                  name="price"
                  placeholder={"0"}
                  type="text"
                  text={dataArray?.price && dataArray.price}
                  component={FormInput}
                  extClassName="price"
                  keyName="price"
                  onChange={handleDataArray}
                  isPrice
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Price;
