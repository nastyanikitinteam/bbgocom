import { useState, useEffect, FC } from "react";
import { Slider } from "antd";
import cn from "classnames";

import styles from "./price.module.scss";

import PriceMin from "images/icons/price-min.svg";

interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: number) => void;
}

const Price: FC<IProps> = ({ dataPrice, handleClickPrice }) => {
  const [inputValue1, setInputValue1] = useState(+dataPrice.minPrice);
  const [inputValue2, setInputValue2] = useState(+dataPrice.maxPrice);

  const onChangeInput1 = (event) => {
    if (event.target.value > 500000) {
      setInputValue1(500000);
      handleClickPrice("minPrice", 500000);
    } else {
      setInputValue1(+event.target.value);
      handleClickPrice("minPrice", +event.target.value);
    }
  };
  const onChangeInput2 = (event) => {
    if (event.target.value > 500000) {
      setInputValue1(500000);
      handleClickPrice("maxPrice", 500000);
    } else {
      setInputValue1(+event.target.value);
      handleClickPrice("maxPrice", +event.target.value);
    }
  };
  const onChangeSlider = (newValue) => {
    setInputValue1(newValue[0]);
    setInputValue2(newValue[1]);
    handleClickPrice("minPrice", newValue[0]);
    handleClickPrice("maxPrice", newValue[1]);
  };

  useEffect(() => {
    setInputValue1(+dataPrice.minPrice);
    setInputValue2(+dataPrice.maxPrice);
  }, [dataPrice]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Price, $:</h3>
      <div className={styles.description}>
        <span>Min 0$</span>
        <span>Max $500 000+</span>
      </div>
      <Slider
        range
        defaultValue={[+dataPrice.minPrice, +dataPrice.maxPrice]}
        min={0}
        max={500000}
        onChange={onChangeSlider}
        value={[inputValue1, inputValue2]}
        className={cn("customSelect", styles.slider)}
        tooltip={{ open: false }}
      />

      <div className={styles.bottom}>
        <div className={styles.item}>
          <input
            type="text"
            value={inputValue1}
            className={cn("default-input sm", styles.priceMin)}
            onChange={onChangeInput1}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>
        <span className={styles.separator}>-</span>
        <div className={styles.item}>
          <input
            type="text"
            className={cn("default-input sm", styles.priceMax)}
            value={inputValue2}
            onChange={onChangeInput2}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
