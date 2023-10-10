import { useState, useEffect, FC } from "react";
import { Slider } from "antd";
import styles from "./range.module.scss";
import cn from "classnames";

interface IProps {
  setIsShowPartOfHistogramm: (bool: any) => void;
  minPrice: number;
  maxPrice: number;
  inputValue1: number;
  inputValue2: number;
  setInputValue1: (bool: number) => void;
  setInputValue2: (bool: number) => void;
}

const Range: FC<IProps> = ({
  setIsShowPartOfHistogramm,
  setInputValue1,
  setInputValue2,
  minPrice,
  maxPrice,
  inputValue1,
  inputValue2,
}) => {
  // todo
  const onChangeInput1 = (event) => {
    if (event.target.value > maxPrice) {
      setInputValue1(maxPrice);
    } else {
      setInputValue1(+event.target.value);
    }
  };
  const onChangeInput2 = (event) => {
    if (event.target.value > maxPrice) {
      setInputValue2(maxPrice);
    } else {
      setInputValue2(+event.target.value);
    }
  };

  const onChangeSlider = (newValue) => {
    setInputValue1(newValue[0]);
    setInputValue2(newValue[1]);
  };

  return (
    <>
      <Slider
        range
        defaultValue={[minPrice, maxPrice]}
        min={minPrice}
        max={maxPrice}
        onChange={onChangeSlider}
        value={[inputValue1, inputValue2]}
        className={cn("customSelect priceRange", styles.slider)}
        tooltip={{ open: false }}
      />
      {/* TODO FORM ELEMENTS */}
      <div className={styles.bottom}>
        <div className={styles.item}>
          <input
            type="text"
            value={inputValue1}
            className={cn("default-input sm", styles.priceMin)}
            onChange={onChangeInput1}
            onKeyPress={(event) => {
              // TODO TO FUNCTION
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
    </>
  );
};

export default Range;
