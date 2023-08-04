import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./category.module.scss";

import ArrowIcon from "images/icons/drop.svg";
import CatalogIcon from "images/icons/catalog-icon.svg";

interface IProps {
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
}

const Category: FC<IProps> = ({ setIsActiveChoice, isActiveChoice }) => {
  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]: isActiveChoice === "Category",
        })}
        onClick={() =>
          setIsActiveChoice(isActiveChoice === "Category" ? "" : "Category")
        }
      >
        <span className={styles.icon}>
          <CatalogIcon />
        </span>
        <p>All</p>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </>
  );
};

export default Category;
