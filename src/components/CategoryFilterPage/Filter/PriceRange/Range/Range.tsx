import { useState, useEffect, FC } from "react";
import { Slider } from "antd";
import styles from "./range.module.scss";
import cn from "classnames";

interface IProps {
  setIsShowPartOfHistogramm: (bool: any) => void;
}

const Range: FC<IProps> = ({ setIsShowPartOfHistogramm }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [inputValue1, setInputValue1] = useState(minPrice);
  const [inputValue2, setInputValue2] = useState(maxPrice);

  const onChangeInput1 = (event) => {
    if (event.target.value > 500000) {
      setInputValue1(500000);
    } else {
      setInputValue1(+event.target.value);
    }
  };
  const onChangeInput2 = (event) => {
    if (event.target.value > 500000) {
      setInputValue1(500000);
    } else {
      setInputValue1(+event.target.value);
    }
  };

  const onChangeSlider = (newValue) => {
    setInputValue1(newValue[0]);
    setInputValue2(newValue[1]);
  };

  // useEffect(() => {
  //   let block = document.querySelector(".priceRange .ant-slider-track");
  //   let histogram = document.querySelector(".histogram");
  //   if (block) {
  //     const styles = block.getAttribute("style");
  //     histogram.setAttribute("style", styles);
  //   }
  // }, [inputValue1, inputValue2]);

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
    </>
  );
};

export default Range;
