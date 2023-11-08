// @ts-nocheck
import { FC, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./category-mobile.module.scss";
import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close-sm.svg";

interface IProps {
  categoriesList?: any;
  setIsShowCategoryMenu?: (bool: boolean) => void;
}

const CategoryMobile: FC<IProps> = ({
  categoriesList,
  setIsShowCategoryMenu,
}) => {
  const [isCategoryList, setIsCategoryList] = useState({});
  const [isSubcategoryList, setIsSubcategoryList] = useState({});
  const [isSubcategoryItem, setIsSubcategoryItem] = useState({});

  const [isbaseUrl, setIsBaseUrl] = useState("");

  useEffect(() => {
    //TODO: SERVER DOESNT HAVE WINDOW
    setIsBaseUrl(window.location.origin);
  }, []);

  const deletSubCategoryItemResult = () => {
    setIsSubcategoryItem({});
  };

  const deletSubCategoryResult = () => {
    setIsSubcategoryList({});
  };

  const deletCategoryResult = () => {
    setIsCategoryList({});
  };

  const back = () => {
    Object.entries(isSubcategoryList).length != 0
      ? deletSubCategoryResult()
      : Object.entries(isCategoryList).length != 0
      ? deletCategoryResult()
      : setIsShowCategoryMenu(false);
  };

  const close = () => {
    setIsShowCategoryMenu(false);
  };

  const handleCategoryList = useCallback((listId) => {
    deletSubCategoryResult();
    deletCategoryResult();
    deletSubCategoryItemResult();
    const filteredCategoryList = categoriesList.filter(
      ({ id }) => id === listId
    );
    setIsCategoryList(filteredCategoryList[0]);
  }, []);

  const handleSubcategoryList = useCallback(
    (listId) => {
      //@ts-ignore
      const filteredSubcategories = isCategoryList.subcategories.filter(
        (subcategory) => subcategory.id === listId
      );
      setIsSubcategoryList(filteredSubcategories[0]);
    },
    [isCategoryList]
  );

  useEffect(() => {
    console.log(
      isCategoryList?.title,
      isSubcategoryList?.title,
      isSubcategoryItem?.title
    );
  }, [isCategoryList, isSubcategoryList, isSubcategoryItem]);

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
              <Link
                href={
                  Object.entries(isSubcategoryList).length === 0
                    ? `category/${isCategoryList.slug}`
                    : `${isbaseUrl}/categories/${isCategoryList.slug}/${isSubcategoryList.slug}`
                }
                className={styles.mainItem}
                key={isCategoryList.id}
                // onClick={close}
              >
                <div className={styles.image}>
                  <img src={isCategoryList.image} alt="" />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.subtitle}>{isCategoryList.title}</h3>
                  {Object.entries(isSubcategoryList).length != 0 && (
                    <div className={styles.subcategory}>
                      {isSubcategoryList.title}
                    </div>
                  )}
                </div>
              </Link>
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
                        // onClick={() => handleSubcategoryItem(id)}
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
