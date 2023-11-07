import { useState, useEffect, FC, useCallback } from "react";
import PortalContainer from "components/PortalContainer/PortalContainer";
import useMediaQuery from "src/utils/useMediaQuery";
import CategoryMobileFilter from "./CategoryMobile/CategoryMobileFilter";
import Blocks from "./Blocks/Blocks";
import cn from "classnames";

import { categoriesList } from "config/categoriesList";

import styles from "./category-main.module.scss";

import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  isSearchBarTop?: boolean;
  isActiveCategory: number;
  setIsActiveCategory: (num: number) => void;
  setIsActiveChoice?: () => void;
  handleClick: (key: string, value: string) => void;
  dataCategory: any;
  setDataCategory: (str: string) => void;
  isCreatePage?: boolean;
}

const CategoryMain: FC<IProps> = ({
  isSearchBarTop,
  handleClick,
  setIsActiveChoice,
  dataCategory,
  setDataCategory,
  isCreatePage,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    dataCategory?.category !== null ? dataCategory.category : null
  );
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(
    dataCategory?.subcategorie !== null ? dataCategory.subcategorie : null
  );
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const isMobile = useMediaQuery(768);

  const delNameOfSubCategory = useCallback(() => {
    let obj = dataCategory;
    delete obj.subcategorie;
    setDataCategory(obj);
  }, []);

  const delNameOfCategoryItem = useCallback(() => {
    let obj = dataCategory;
    delete obj.subcategorieItem;
    setDataCategory(obj);
  }, []);

  const chooseCategory = useCallback(
    (item) => {
      if (!isCreatePage) {
        handleClick("category", item.id);
        if (dataCategory.subcategorie) {
          delNameOfSubCategory();
        }
        if (dataCategory.subcategorieItem) {
          delNameOfCategoryItem();
        }
      }
      setSelectedCategoryId(item.id);
    },
    [categoriesList]
  );

  const chooseCategoryItem = useCallback((categId, subId, itemId) => {
    handleClick("category", categId);
    handleClick("subcategorie", subId);
    handleClick("subcategorieItem", itemId);
    setIsActiveChoice();
  }, []);

  const filterCategoryList = (activeId) => {
    const currentItem = categoriesList.filter(({ id }) => id === activeId);
    setSelectedCategory(currentItem[0]);
  };

  const filterSubcategoryList = useCallback(
    (activeId) => {
      // @ts-ignore
      const currentItem = selectedCategory?.subcategories.filter(
        ({ id }) => id === activeId
      );
      setSelectedSubcategory(currentItem[0]);
    },
    [selectedCategory]
  );

  useEffect(() => {
    selectedCategoryId !== null && filterCategoryList(selectedCategoryId);
  }, [selectedCategoryId]);

  useEffect(() => {
    selectedSubcategoryId !== null &&
      //@ts-ignore
      selectedCategory?.subcategories &&
      filterSubcategoryList(selectedSubcategoryId);
  }, [selectedCategory]);

  return isMobile ? (
    <PortalContainer>
      <CategoryMobileFilter
        setIsActiveChoice={setIsActiveChoice}
        dataCategory={dataCategory}
        onChangeItem={chooseCategoryItem}
        selectedCategoryId={selectedCategoryId}
        chooseCategory={chooseCategory}
        selectedCategory={selectedCategory}
        setSelectedSubcategory={setSelectedSubcategory}
        selectedSubcategory={selectedSubcategory}
        setSelectedCategory={setSelectedCategory}
      />
    </PortalContainer>
  ) : (
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
          handleClick={handleClick}
          setIsActiveChoice={setIsActiveChoice}
          dataCategory={dataCategory}
          delNameOfCategoryItem={delNameOfCategoryItem}
          isCreatePage={isCreatePage}
          onChangeItem={chooseCategoryItem}
          selectedCategoryId={selectedCategoryId}
        />
      </div>
    </div>
  );
};

export default CategoryMain;
