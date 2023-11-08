import { FC, useState, useEffect, useCallback } from "react";
import cn from "classnames";
import styles from "./category.module.scss";
import { categoriesList } from "config/categoriesList";

import ArrowIcon from "images/icons/drop.svg";
import CatalogIcon from "images/icons/catalog-icon.svg";

interface IProps {
  handleActive?: () => void;
  isActiveChoice?: boolean;
  dataCategory: any;
  setIsOpenCategoryMenu?: (bool: boolean) => void;
  isOpenCategoryMenu?: boolean;
  isBig?: boolean;
  placeholder: string;
  isCreatePage?: boolean;
  error?: boolean;
  isSearchBar?: boolean;
}

const Category: FC<IProps> = ({
  handleActive,
  isActiveChoice,
  dataCategory,
  setIsOpenCategoryMenu,
  isOpenCategoryMenu,
  isBig,
  placeholder,
  isCreatePage,
  isSearchBar,
  error,
}) => {
  const [selectedTitle, setSelectedTitle] = useState("");

  const filterTitle = useCallback(() => {
    const category = categoriesList.find(
      (category) => category.id === dataCategory.category
    );
    if (category) {
      const subcategory = category.subcategories.find(
        (subcategory) => subcategory.id === dataCategory.subcategory
      );
      if (subcategory) {
        const item = subcategory.items.find(
          (item) => item.id === dataCategory.subcategoryItem
        );
        if (item) {
          setSelectedTitle(item.title);
        } else {
          setSelectedTitle(subcategory.title);
        }
      } else {
        setSelectedTitle(category.title);
      }
    } else {
      setSelectedTitle("");
    }
  }, [dataCategory]);

  useEffect(() => {
    filterTitle();
  }, [dataCategory]);

  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]: isActiveChoice || isOpenCategoryMenu,
          [styles.fill]: selectedTitle.length > 0,
          [styles.big]: isBig,
          [styles.error]: error,
          [styles.searchBar]: isSearchBar,
        })}
        onClick={() => handleActive()}
      >
        <span className={styles.icon}>
          <CatalogIcon />
        </span>
        <p>{selectedTitle.length > 0 ? selectedTitle : placeholder}</p>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </>
  );
};

export default Category;
