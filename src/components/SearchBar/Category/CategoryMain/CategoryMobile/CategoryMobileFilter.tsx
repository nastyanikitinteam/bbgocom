// @ts-nocheck
import { FC, useCallback, useEffect, useState } from "react";
import styles from "./category-mobile.module.scss";
import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close-sm.svg";
import cn from "classnames";

import { categoriesList } from "config/categoriesList";

interface IProps {
  dataCategory?: any;
  selectedCategoryId?: number;
  selectedCategory?: any;
  selectedSubcategory?: any;
  isCreatePage?: boolean;
  back: () => void;
  chooseCategory?: (any: any) => void;
  chooseCategoryItem?: (value: any) => void;
  chooseSubcategory?: (value: any) => void;
  setIsActiveChoice?: () => void;
}

const CategoryMobile: FC<IProps> = ({
  dataCategory,
  selectedCategoryId,
  selectedCategory,
  selectedSubcategory,
  isCreatePage,
  back,
  chooseCategory,
  chooseCategoryItem,
  chooseSubcategory,
  setIsActiveChoice,
}) => {
  const close = () => {
    setIsActiveChoice();
  };

  const handleCategoryInfo = () => {
    if (selectedSubcategory) {
      chooseSubcategory(selectedSubcategory);
      close();
    } else {
      chooseCategory(selectedCategory);
      close();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.back} onClick={back}>
          <span className={styles.arrow}>
            <ArrowSvg />
          </span>
          Back
        </div>
        <h3 className={styles.title}>Category</h3>
        <div className={styles.close} onClick={close}>
          <CloseIcon />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.list}>
          {!selectedCategory?.subcategories ? (
            categoriesList.map((item) => {
              return (
                <div
                  className={styles.item}
                  key={item.id}
                  onClick={() => chooseCategory(item)}
                >
                  <div className={styles.image}>
                    <img src={item.image} alt="" />
                  </div>
                  <h3 className={styles.subtitle}>{item.title}</h3>
                  <span className={styles.arrow}>
                    <ArrowSvg />
                  </span>
                </div>
              );
            })
          ) : (
            <>
              <div
                className={styles.mainItem}
                onClick={() => {
                  !isCreatePage && handleCategoryInfo();
                }}
              >
                <div className={styles.image}>
                  <img src={selectedCategory.image} alt="" />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.subtitle}>{selectedCategory.title}</h3>
                  {selectedSubcategory && (
                    <div className={styles.subcategory}>
                      {selectedSubcategory.title}
                    </div>
                  )}
                </div>
              </div>
              {!selectedSubcategory
                ? selectedCategory.subcategories.map((item) => {
                    return (
                      <div
                        className={styles.item}
                        key={item.id}
                        onClick={() => chooseSubcategory(item)}
                      >
                        <h3 className={styles.subtitle}>{item.title}</h3>
                        <span className={styles.arrow}>
                          <ArrowSvg />
                        </span>
                      </div>
                    );
                  })
                : selectedSubcategory?.items?.map((item) => {
                    return (
                      <div
                        className={cn(styles.item, {
                          [styles.active]:
                            item.id === dataCategory.subcategoryItem &&
                            selectedSubcategory.id ===
                              dataCategory.subcategory &&
                            selectedCategoryId === dataCategory.category,
                        })}
                        key={item.id}
                        onClick={() => {
                          chooseCategoryItem(item);
                        }}
                      >
                        <h3 className={styles.subtitle}>{item.title}</h3>
                        <span className={styles.arrow}>
                          <ArrowSvg />
                        </span>
                      </div>
                    );
                  })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryMobile;
