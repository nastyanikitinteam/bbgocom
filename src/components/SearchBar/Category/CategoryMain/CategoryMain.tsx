import { useState, useEffect, FC, useCallback } from "react";
import PortalContainer from "components/PortalContainer/PortalContainer";
import useMediaQuery from "src/utils/useMediaQuery";
import CategoryMobileFilter from "./CategoryMobile/CategoryMobileFilter";

import CategoryDesktop from "./CategoryDesktop/CategoryDesktop";
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
  handleClick: (key: string, value: number) => void;
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
    dataCategory?.subcategory !== null ? dataCategory.subcategory : null
  );

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const isMobile = useMediaQuery(768);

  const back = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
      setSelectedSubcategoryId(null);
      dataCategory.subcategory && delNameOfSubCategory();
      dataCategory.subcategoryItem && delNameOfCategoryItem();
    } else if (selectedCategory) {
      setSelectedCategory(null);
      setSelectedCategoryId(null);
      dataCategory.subcategory && delNameOfSubCategory();
    } else {
      setIsActiveChoice();
    }
  };

  const delNameOfSubCategory = useCallback(() => {
    let obj = dataCategory;
    delete obj.subcategory;
    setDataCategory(obj);
  }, []);

  const delNameOfCategoryItem = useCallback(() => {
    let obj = dataCategory;
    delete obj.subcategoryItem;
    setDataCategory(obj);
  }, []);

  const chooseCategory = useCallback(
    (item) => {
      if (!isCreatePage) {
        handleClick("category", item.id);
        dataCategory.subcategory && delNameOfSubCategory();
        dataCategory.subcategoryItem && delNameOfCategoryItem();
      }
      setSelectedCategoryId(item.id);
    },
    [categoriesList]
  );

  const chooseSubcategory = useCallback(
    (item) => {
      if (!isCreatePage) {
        dataCategory.subcategoryItem && delNameOfCategoryItem();
      }
      handleClick("subcategory", item.id);
      setSelectedSubcategoryId(item.id);
      setSelectedSubcategory(item);
    },
    [categoriesList]
  );

  const chooseCategoryItem = (item) => {
    if (isCreatePage) {
      handleClick("category", selectedCategoryId);
    }
    handleClick("subcategoryItem", item.id);
    setIsActiveChoice();
  };

  const filterCategoryList = (activeId) => {
    const currentCategory = categoriesList.filter(({ id }) => id === activeId);
    setSelectedCategory(currentCategory[0]);
  };

  const filterSubcategoryList = (activeId) => {
    const currentSubcategory = selectedCategory.subcategories.filter(
      ({ id }) => id === activeId
    );
    setSelectedSubcategory(currentSubcategory[0]);
  };

  useEffect(() => {
    selectedCategoryId !== null && filterCategoryList(selectedCategoryId);
  }, [selectedCategoryId]);

  useEffect(() => {
    selectedSubcategoryId !== null &&
      selectedCategory &&
      filterSubcategoryList(selectedSubcategoryId);
  }, [selectedSubcategoryId, selectedCategory]);

  return isMobile ? (
    <PortalContainer>
      <CategoryMobileFilter
        dataCategory={dataCategory}
        selectedCategoryId={selectedCategoryId}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        isCreatePage={isCreatePage}
        back={back}
        chooseSubcategory={chooseSubcategory}
        chooseCategoryItem={chooseCategoryItem}
        chooseCategory={chooseCategory}
        setIsActiveChoice={setIsActiveChoice}
      />
    </PortalContainer>
  ) : (
    <CategoryDesktop
      selectedCategoryId={selectedCategoryId}
      selectedCategory={selectedCategory}
      isSearchBarTop={isSearchBarTop}
      isCreatePage={isCreatePage}
      dataCategory={dataCategory}
      chooseCategory={chooseCategory}
      setIsActiveChoice={setIsActiveChoice}
      chooseCategoryItem={chooseCategoryItem}
      chooseSubcategory={chooseSubcategory}
    />
  );
};

export default CategoryMain;
