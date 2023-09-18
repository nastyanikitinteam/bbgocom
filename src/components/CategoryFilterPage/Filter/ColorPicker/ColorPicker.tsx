import React, { useState, FC } from "react";
import styles from "./color-picker.module.scss";
import cn from "classnames";
import DelIcon from "images/icons/del.svg";

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

  const colorsList = {
    red: `#B7313F`,
    white: `#ffffff`,
    grey: `#9C9C9C`,
    black: `#292929`,
    brown: `#7B5D3F`,
    beige: `#CCC4AF`,
    lightRed: `#E2504B`,
    pink: `#B425A5`,
    lightPink: `#F2A5E6`,
    gold: `linear-gradient(146deg, #CFB378 4.19%, #FFF 45.55%, #C29F54 106.37%)`,
    blue: `#5ABCF9`,
    orange: `#F3B347`,
    green: `#438A42`,
    yellow: `#FBE55A`,
    purple: `#6339DA`,
    darkBlue: `#3E63F1`,
    silver: `linear-gradient(156deg, #BEBEBE 3.18%, #FFF 48.11%, #D9D9D9 114.18%)`,
  };

  const camelCaseToWords = (camelCaseString) => {
    return camelCaseString.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  };

  const handleCleanButtonClick = () => {
    setSelectedColors([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
        {selectedColors.length > 0 && (
          <div className={styles.clean} onClick={handleCleanButtonClick}>
            <span className={styles.icon}>
              <DelIcon />
            </span>
            Clean All
          </div>
        )}
      </div>

      <div className={styles.list}>
        {colors.map((color, index) => {
          if (colorsList.hasOwnProperty(color)) {
            const rgbaColor = colorsList[color];
            return (
              <div
                key={index}
                className={cn(
                  styles.item,
                  {
                    [styles.active]: selectedColors.includes(color),
                  },
                  { [styles.white]: color === "white" }
                )}
                onClick={() => toggleColor(color)}
              >
                <div
                  className={styles.block}
                  style={{ background: rgbaColor }}
                ></div>
                <span className={styles.tool}>{camelCaseToWords(color)}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
