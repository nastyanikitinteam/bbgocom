import { FC, useState } from "react";
import styles from "./category-mobile.module.scss";
import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close-sm.svg";

interface IProps {
  categoriesList?: any;
  handleClick?: (key: string, value: string) => void;
  setIsActiveChoice?: (bool: string) => void;
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
  isPopularCategory,
  setIsShowCategoryMenu,
}) => {
  const [isCategoryChoose, setIsCategoryChoose] = useState(null);
  const [isSubCategoryChoose, setIsSubCategoryChoose] = useState(null);

  const chooseCategory = (id, title) => {
    handleClick("nameOfCategory", title);
    setIsCategoryChoose(id);
  };

  const chooseSubCategory = (id, title) => {
    handleClick("nameOfSubCategory", title);
    setIsSubCategoryChoose(id);
  };

  const chooseCategoryItem = (id, title) => {
    handleClick("nameOfCategoryItem", title);
    isPopularCategory
      ? setIsShowCategoryMenu(false)
      : setIsActiveChoice("Filter");
  };

  const deletSubCategoryResult = () => {
    if (dataCategory.nameOfSubCategory) {
      let obj = dataCategory;
      delete obj.nameOfSubCategory;
      setDataCategory(obj);
    }
    setIsSubCategoryChoose(null);
  };

  const deletCategoryResult = () => {
    if (dataCategory.nameOfCategory) {
      let obj = dataCategory;
      delete obj.nameOfCategory;
      setDataCategory(obj);
    }
    setIsCategoryChoose(null);
    // handleClick("nameOfRegion", "All Thailand");
  };

  const back = () => {
    isSubCategoryChoose !== null
      ? deletSubCategoryResult()
      : isCategoryChoose !== null
      ? deletCategoryResult()
      : isPopularCategory
      ? setIsShowCategoryMenu(false)
      : setIsActiveChoice("Filter");
  };

  const close = () => {
    isPopularCategory
      ? setIsShowCategoryMenu(false)
      : setIsActiveChoice("Filter");
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
          {isCategoryChoose === null &&
            categoriesList.map(({ id, title, image }) => {
              return (
                <div
                  className={styles.item}
                  key={id}
                  onClick={() => chooseCategory(id, title)}
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
            })}
          {isCategoryChoose !== null && (
            <>
              {categoriesList
                .filter(({ id }) => id === isCategoryChoose)
                .map(({ id, title, image, subcategories }) => (
                  <div className={styles.mainItem} key={id}>
                    <div className={styles.image}>
                      <img src={image} alt="" />
                    </div>
                    <div className={styles.info}>
                      <h3 className={styles.subtitle}>{title}</h3>
                      {isSubCategoryChoose !== null &&
                        subcategories
                          .filter(({ id }) => id === isSubCategoryChoose)
                          .map(({ id, title }) => (
                            <div className={styles.subcategory} key={id}>
                              {title}
                            </div>
                          ))}
                    </div>
                  </div>
                ))}

              {categoriesList
                .filter(({ id }) => id === isCategoryChoose)
                .map(({ subcategories }) =>
                  subcategories?.map(({ id, title, items }) => {
                    return isSubCategoryChoose === null ? (
                      <div
                        className={styles.item}
                        key={id}
                        onClick={() => chooseSubCategory(id, title)}
                      >
                        <h3 className={styles.subtitle}>{title}</h3>
                        <span className={styles.arrow}>
                          <ArrowSvg />
                        </span>
                      </div>
                    ) : (
                      isSubCategoryChoose === id &&
                        items.map(({ id, title }) => {
                          return (
                            <div
                              className={styles.item}
                              key={id}
                              onClick={() => chooseCategoryItem(id, title)}
                            >
                              <h3 className={styles.subtitle}>{title}</h3>
                              <span className={styles.arrow}>
                                <ArrowSvg />
                              </span>
                            </div>
                          );
                        })
                    );
                  })
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryMobile;
