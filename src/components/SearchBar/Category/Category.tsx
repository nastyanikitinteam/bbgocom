import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./category.module.scss";
import { categoriesList } from "components/Category/config";

import ArrowIcon from "images/icons/drop.svg";
import CatalogIcon from "images/icons/catalog-icon.svg";

interface IProps {
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
  isActiveCategory: number;
}

const Category: FC<IProps> = ({
  setIsActiveChoice,
  isActiveChoice,
  isActiveCategory,
}) => {
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
        <p>
          {isActiveCategory !== null
            ? categoriesList.map(({ id, title }) => {
                return id === isActiveCategory && title;
              })
            : "All"}
        </p>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </>
  );
};

export default Category;
