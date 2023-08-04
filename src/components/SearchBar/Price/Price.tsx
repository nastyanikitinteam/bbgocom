import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./price.module.scss";

import ArrowIcon from "images/icons/drop.svg";
import PriceIcon from "images/icons/price-icon.svg";

interface IProps {
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
}

const Price: FC<IProps> = ({ setIsActiveChoice, isActiveChoice }) => {
  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]: isActiveChoice === "Price",
        })}
        onClick={() =>
          setIsActiveChoice(isActiveChoice === "Price" ? "" : "Price")
        }
      >
        <span className={styles.icon}>
          <PriceIcon />
        </span>
        <p>USD 500 - 10500</p>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </>
  );
};

export default Price;
