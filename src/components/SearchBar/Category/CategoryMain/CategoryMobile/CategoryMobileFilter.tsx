// @ts-nocheck
import { FC, useCallback, useEffect, useState } from "react";
import styles from "./category-mobile.module.scss";
import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close-sm.svg";
import cn from "classnames";

import { categoriesList } from "config/categoriesList";

interface IProps {
  setIsActiveChoice?: () => void;
  dataCategory?: any;
  isPopularCategory?: boolean;
  setIsShowCategoryMenu?: (bool: boolean) => void;
  onChangeItem?: (
    firstValue: number,
    secondValue: number,
    thirdValue: number
  ) => void;
  selectedCategoryId?: number;
  chooseCategory?: (any: any) => void;
  selectedCategory?: any;
  selectedSubcategory?: any;
  setSelectedSubcategory?: (any: any) => void;
  setSelectedCategory?: (any: any) => void;
}

const CategoryMobile: FC<IProps> = ({
  setIsActiveChoice,
  dataCategory,
  onChangeItem,
  selectedCategoryId,
  chooseCategory,
  selectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
  setSelectedCategory,
}) => {
  const back = () => {
    selectedSubcategory
      ? setSelectedSubcategory(null)
      : selectedCategory
      ? setSelectedCategory(null)
      : setIsActiveChoice();
  };

  const close = () => {
    setIsActiveChoice();
  };

  const handleSubcategoryList = useCallback(
    (item) => {
      setSelectedSubcategory(item);
    },
    [selectedCategory]
  );

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
              <div className={styles.mainItem}>
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
                        onClick={() => handleSubcategoryList(item)}
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
                            item.id === dataCategory.subcategorieItem &&
                            selectedSubcategory.id ===
                              dataCategory.subcategorie &&
                            selectedCategoryId === dataCategory.category,
                        })}
                        key={item.id}
                        onClick={() => {
                          onChangeItem(
                            selectedCategoryId,
                            selectedSubcategory.id,
                            item.id
                          );
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
