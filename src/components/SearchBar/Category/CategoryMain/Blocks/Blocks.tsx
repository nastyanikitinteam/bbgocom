import { FC, useEffect } from "react";
import styles from "./blocks.module.scss";
import cn from "classnames";

import { categoriesList } from "components/Category/config";
import SignUpBlock from "components/CategoryPage/SubCategory/SignUpBlock/SignUpBlock";

import Plus from "images/icons/plus.svg";

interface IProps {
  isActiveCategory: number;
  isSearchBarTop?: boolean;
  handleClick?: (key: string, value: string) => void;
  setIsActiveChoice?: () => void;
  isCategoryPage?: boolean;
}
const Blocks: FC<IProps> = ({
  isActiveCategory,
  isSearchBarTop,
  handleClick,
  setIsActiveChoice,
  isCategoryPage,
}) => {
  const chooseCategoryItem = (id, title) => {
    handleClick("nameOfCategoryItem", title);
    setIsActiveChoice();
  };

  return (
    <div
      className={cn(
        styles.container,
        {
          [styles.top]: isSearchBarTop || isCategoryPage,
        },
        {
          [styles.categoryPage]: isCategoryPage,
        }
      )}
    >
      {categoriesList.map(({ id, subcategories }) => {
        if (id === isActiveCategory && subcategories) {
          return subcategories.map(({ id, title, items }) => {
            return (
              <div
                key={id}
                className={cn(styles.block, {
                  [styles.categoryPage]: isCategoryPage,
                })}
                onClick={() =>
                  !isCategoryPage && handleClick("nameOfSubCategory", title)
                }
              >
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.list}>
                  {items.map(({ id, title }) => {
                    return (
                      <li
                        className={styles.item}
                        key={id}
                        onClick={() =>
                          !isCategoryPage && chooseCategoryItem(id, title)
                        }
                      >
                        {title}
                      </li>
                    );
                  })}
                </ul>
                {!isCategoryPage && (
                  <a href="#" className={styles.add}>
                    <span className={styles.icon}>
                      <Plus />
                    </span>
                    Add new one
                  </a>
                )}
              </div>
            );
          });
        }
      })}
      {isCategoryPage && <SignUpBlock />}
    </div>
  );
};

export default Blocks;
