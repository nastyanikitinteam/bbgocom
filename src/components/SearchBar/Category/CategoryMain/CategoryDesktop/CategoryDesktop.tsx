import { useState, useEffect, FC, useCallback } from "react";
import PortalContainer from "components/PortalContainer/PortalContainer";
import useMediaQuery from "src/utils/useMediaQuery";
import Blocks from "../Blocks/Blocks";
import cn from "classnames";

import { categoriesList } from "config/categoriesList";

import styles from "./category-desktop.module.scss";

import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  selectedCategoryId: number;
  selectedCategory: any;
  isSearchBarTop?: boolean;
  isCreatePage?: boolean;
  dataCategory: any;
  chooseCategory: (value: any) => void;
  setIsActiveChoice: () => void;
  chooseCategoryItem?: (value: any) => void;
  chooseSubcategory?: (value: any) => void;
}

const CategoryDesktop: FC<IProps> = ({
  selectedCategoryId,
  selectedCategory,
  isSearchBarTop,
  isCreatePage,
  dataCategory,
  chooseCategory,
  setIsActiveChoice,
  chooseCategoryItem,
  chooseSubcategory,
}) => {
  return (
    <div className={cn(styles.container, { [styles.top]: isSearchBarTop })}>
      <div className={styles.list}>
        {categoriesList.map((item) => {
          return (
            <div
              className={cn(styles.item, {
                [styles.active]: selectedCategoryId == item.id,
              })}
              key={item.id}
              onMouseEnter={() => chooseCategory(item)}
              onClick={() => !isCreatePage && setIsActiveChoice()}
            >
              <div className={styles.image}>
                <img src={item.image} alt="" />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <span className={styles.arrow}>
                <ArrowIcon />
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.main}>
        <Blocks
          // @ts-ignore
          currentSubcategories={selectedCategory?.subcategories}
          isSearchBarTop={isSearchBarTop}
          dataCategory={dataCategory}
          chooseCategoryItem={chooseCategoryItem}
          selectedCategoryId={selectedCategoryId}
          isCreatePage={isCreatePage}
          chooseSubcategory={chooseSubcategory}
          setIsActiveChoice={setIsActiveChoice}
        />
      </div>
    </div>
  );
};

export default CategoryDesktop;
