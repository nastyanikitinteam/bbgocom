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
  const [isWidthOfHistogramm, setIsWidthOfHistogramm] = useState(null);

  const containerRef = useRef(null);
  const histogramRef = useRef(null);
  const histogramContainerRef = useRef(null);

  useEffect(() => {
    console.log(isShowPartOfHistogramm);
  }, [isShowPartOfHistogramm]);

  useEffect(() => {
    if (containerRef.current) {
      const blockWidth = containerRef.current.offsetWidth;
      setIsWidthOfHistogramm(blockWidth);
      if (histogramRef.current) {
        histogramRef.current.style.width = `${blockWidth}px`;
      }
    }
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <h3 className={styles.title}>{title}</h3>
      <div className={cn(styles.histogram, "histogram")}>
        <div
          ref={histogramRef}
          className={cn(styles.histogramContainer, "histogramContainer")}
        >
          <Histogram />
        </div>
      </div>
      <Range setIsShowPartOfHistogramm={setIsShowPartOfHistogramm} />
    </div>
  );
};

export default PriceRange;
