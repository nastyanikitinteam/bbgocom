import { useState, useEffect, FC, useRef } from "react";
import { Slider } from "antd";
import styles from "./price-range.module.scss";
import cn from "classnames";
import Histogram from "./Histogram/Histogram";
import Range from "./Range/Range";

interface IProps {
  title: string;
  list?: any;
}

const PriceRange: FC<IProps> = ({ title, list }) => {
  const [isShowPartOfHistogramm, setIsShowPartOfHistogramm] = useState();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const containerRef = useRef(null);
  const histogramRef = useRef(null);

  const [inputValue1, setInputValue1] = useState(minPrice);
  const [inputValue2, setInputValue2] = useState(maxPrice);

  useEffect(() => {
    if (containerRef.current) {
      const blockWidth = containerRef.current.offsetWidth;
      if (histogramRef.current) {
        histogramRef.current.style.width = `${blockWidth}px`;
      }
    }
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.histogram}>
        <div ref={histogramRef} className={styles.histogramContainer}>
          <Histogram
            minPrice={minPrice}
            maxPrice={maxPrice}
            inputValue1={inputValue1}
            inputValue2={inputValue2}
          />
        </div>
      </div>
      <Range
        setIsShowPartOfHistogramm={setIsShowPartOfHistogramm}
        minPrice={minPrice}
        maxPrice={maxPrice}
        inputValue1={inputValue1}
        inputValue2={inputValue2}
        setInputValue1={setInputValue1}
        setInputValue2={setInputValue2}
      />
    </div>
  );
};

export default PriceRange;
