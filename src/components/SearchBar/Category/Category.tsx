import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./category.module.scss";
import { categoriesList } from "components/Category/config";

import ArrowIcon from "images/icons/drop.svg";
import CatalogIcon from "images/icons/catalog-icon.svg";
import { AbstractKeyword } from "typescript";

interface IProps {
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
  dataCategory: any;
}

const Category: FC<IProps> = ({
  setIsActiveChoice,
  isActiveChoice,
  dataCategory,
}) => {
  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]: isActiveChoice === "Category",
          [styles.fill]: dataCategory.nameOfCategory,
        })}
        onClick={() =>
          setIsActiveChoice(isActiveChoice === "Category" ? "" : "Category")
        }
      >
        <span className={styles.icon}>
          <CatalogIcon />
        </span>
        <p>
          {dataCategory.nameOfCategory ? dataCategory.nameOfCategory : "All"}
        </p>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </>
  );
};

export default Category;
