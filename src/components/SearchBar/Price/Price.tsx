import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./price.module.scss";

import ArrowIcon from "images/icons/drop.svg";
import PriceIcon from "images/icons/price-icon.svg";

interface IProps {
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
  dataPrice: any;
  isPriceBlockDefault: boolean;
}

const Price: FC<IProps> = ({
  setIsActiveChoice,
  isActiveChoice,
  dataPrice,
  isPriceBlockDefault,
}) => {
  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]: isActiveChoice === "Price",
          [styles.fill]: !isPriceBlockDefault,
        })}
        onClick={() =>
          setIsActiveChoice(isActiveChoice === "Price" ? "" : "Price")
        }
      >
        <span className={styles.icon}>
          <PriceIcon />
        </span>
        <p>
          {dataPrice.currency} {dataPrice.minPrice.toLocaleString("ru-RU")} -{" "}
          {dataPrice.maxPrice.toLocaleString("ru-RU")}
        </p>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </>
  );
};

export default Price;
