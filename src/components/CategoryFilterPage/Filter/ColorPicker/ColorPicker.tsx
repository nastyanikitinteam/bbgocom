import React, { useState, FC } from "react";
import styles from "./color-picker.module.scss";
import cn from "classnames";

interface IProps {
  title: string;
  colors: any;
}

const ColorPicker: FC<IProps> = ({ title, colors }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.list}>
        {colors.map((color) => (
          <div
            key={color}
            className={cn(styles.item, {
              [styles.active]: selectedColors.includes(color),
            })}
            onClick={() => toggleColor(color)}
          >
            <div
              className={styles.block}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
// `color-box ${selectedColors.includes(color) ? "selected" : ""}`;

export default ColorPicker;
