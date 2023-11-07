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
}) => {
  const [selectedTitle, setSelectedTitle] = useState("");

  const filterTitle = useCallback(() => {
    const category = categoriesList.find(
      (category) => category.id === dataCategory.category
    );
    if (category) {
      const subcategory = category.subcategories.find(
        (subcategory) => subcategory.id === dataCategory.subcategorie
      );
      if (subcategory) {
        const item = subcategory.items.find(
          (item) => item.id === dataCategory.subcategorieItem
        );
        if (item) {
          setSelectedTitle(item.title);
        } else {
          setSelectedTitle(subcategory.title);
        }
      } else {
        setSelectedTitle(category.title);
      }
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
