import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./category.module.scss";
import { categoriesList } from "components/Category/config";

import ArrowIcon from "images/icons/drop.svg";
import CatalogIcon from "images/icons/catalog-icon.svg";
import { AbstractKeyword } from "typescript";

interface IProps {
  handleActive?: () => void;
  isActiveChoice?: boolean;
  dataCategory: any;
  setIsOpenCategoryMenu?: (bool: boolean) => void;
  isOpenCategoryMenu?: boolean;
  isBig?: boolean;
  placeholder: string;
}

const Category: FC<IProps> = ({
  handleActive,
  isActiveChoice,
  dataCategory,
  setIsOpenCategoryMenu,
  isOpenCategoryMenu,
  isBig,
  placeholder,
}) => {
  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]: isActiveChoice || isOpenCategoryMenu,
          [styles.fill]: dataCategory.nameOfCategory,
          [styles.big]: isBig,
        })}
        onClick={() => handleActive()}
      >
        <span className={styles.icon}>
          <CatalogIcon />
        </span>
        <p>
          {dataCategory.nameOfCategoryItem
            ? dataCategory.nameOfCategoryItem
            : dataCategory.nameOfSubCategory
            ? dataCategory.nameOfSubCategory
            : dataCategory.nameOfCategory
            ? dataCategory.nameOfCategory
            : placeholder}
        </p>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </>
  );
};

export default Category;
