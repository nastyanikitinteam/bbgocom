// @ts-nocheck
import { FC, useCallback, useEffect, useState } from "react";
import styles from "./category-mobile.module.scss";
import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close-sm.svg";

interface IProps {
  categoriesList?: any;
  handleClick?: (key: string, value: string) => void;
  setIsActiveChoice?: () => void;
  dataCategory?: any;
  setDataCategory?: (bool: string) => void;
  isPopularCategory?: boolean;
  setIsShowCategoryMenu?: (bool: boolean) => void;
}

const CategoryMobile: FC<IProps> = ({
  categoriesList,
  handleClick,
  setIsActiveChoice,
  dataCategory,
  setDataCategory,
}) => {
  const [isCategoryList, setIsCategoryList] = useState({});
  const [isSubcategoryList, setIsSubcategoryList] = useState({});
  const [isSubcategoryItem, setIsSubcategoryItem] = useState({});

  const deletSubCategoryItemResult = () => {
    if (dataCategory.nameOfCategoryItem) {
      let obj = dataCategory;
      delete obj.nameOfCategoryItem;
      setDataCategory(obj);
    }
    setIsSubcategoryItem({});
  };

  const deletSubCategoryResult = () => {
    if (dataCategory.nameOfSubCategory) {
      let obj = dataCategory;
      delete obj.nameOfSubCategory;
      setDataCategory(obj);
    }
    setIsSubcategoryList({});
  };

  const deletCategoryResult = () => {
    if (dataCategory.nameOfCategory) {
      let obj = dataCategory;
      delete obj.nameOfCategory;
      setDataCategory(obj);
    }
    setIsCategoryList({});
  };

  const back = () => {
    Object.entries(isSubcategoryList).length != 0
      ? deletSubCategoryResult()
      : Object.entries(isCategoryList).length != 0
      ? deletCategoryResult()
      : setIsActiveChoice();
  };

  const close = () => {
    setIsActiveChoice();
  };

  const handleCategoryList = useCallback((listId) => {
    deletSubCategoryResult();
    deletCategoryResult();
    deletSubCategoryItemResult();
    const filteredCategoryList = categoriesList.filter(
      ({ id }) => id === listId
    );
    handleClick("nameOfCategory", filteredCategoryList[0].title);
    setIsCategoryList(filteredCategoryList[0]);
  }, []);

  const handleSubcategoryList = useCallback(
    (listId) => {
      const filteredSubcategories = isCategoryList.subcategories.filter(
        (subcategory) => subcategory.id === listId
      );
      handleClick("nameOfSubCategory", filteredSubcategories[0].title);
      setIsSubcategoryList(filteredSubcategories[0]);
    },
    [isCategoryList]
  );

  const handleSubcategoryItem = useCallback(
    (listId) => {
      const filteredSubcategoriesItem = isSubcategoryList.items.filter(
        (item) => item.id === listId
      );
      handleClick("nameOfCategoryItem", filteredSubcategoriesItem[0].title);
      setIsSubcategoryItem(filteredSubcategoriesItem);
      setIsActiveChoice();
    },
    [isSubcategoryList]
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
          {Object.entries(isCategoryList).length === 0 ? (
            categoriesList.map(({ id, image, title }) => {
              return (
                <div
                  className={styles.item}
                  key={id}
                  onClick={() => handleCategoryList(id)}
                >
                  <div className={styles.image}>
                    <img src={image} alt="" />
                  </div>
                  <h3 className={styles.subtitle}>{title}</h3>
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
                key={isCategoryList.id}
                onClick={close}
              >
                <div className={styles.image}>
                  <img src={isCategoryList.image} alt="" />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.subtitle}>{isCategoryList.title}</h3>
                  {Object.entries(isSubcategoryList).length !== 0 && (
                    <div className={styles.subcategory}>
                      {isSubcategoryList.title}
                    </div>
                  )}
                </div>
              </div>
              {Object.entries(isSubcategoryList).length === 0
                ? isCategoryList?.items?.map(({ id, title }) => {
                    return (
                      <div
                        className={styles.item}
                        onClick={() => handleSubcategoryList(id)}
                      >
                        <h3 className={styles.subtitle}>{title}</h3>
                        <span className={styles.arrow}>
                          <ArrowSvg />
                        </span>
                      </div>
                    );
                  })
                : isSubcategoryList?.items?.map(({ id, title }) => {
                    return (
                      <div
                        className={styles.item}
                        key={id}
                        onClick={() => handleSubcategoryItem(id)}
                      >
                        <h3 className={styles.subtitle}>{title}</h3>
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
