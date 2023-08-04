import { useState, useEffect } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";

import styles from "./price.module.scss";

const Price = () => {
  const [inputValue, setInputValue] = useState(1);
  const [inputValue1, setInputValue1] = useState(100);
  const [inputValue2, setInputValue2] = useState(20000);

  const onChangeInput1 = (newValue: number) => {
    setInputValue1(newValue);
  };
  const onChangeInput2 = (newValue: number) => {
    setInputValue2(newValue);
  };
  const onChangeSlider = (newValue) => {
    setInputValue1(newValue[0]);
    setInputValue2(newValue[1]);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Price, $:</h3>

      <Slider
        range
        defaultValue={[10000, 100000]}
        min={0}
        max={500000}
        onChange={onChangeSlider}
        value={[inputValue1, inputValue2]}
      />
      <InputNumber
        min={0}
        max={500000}
        style={{ margin: "0 16px" }}
        value={inputValue1}
        onChange={onChangeInput1}
      />
      <InputNumber
        min={0}
        max={500000}
        style={{ margin: "0 16px" }}
        value={inputValue2}
        onChange={onChangeInput2}
      />
    </div>
  );
};

export default Price;
