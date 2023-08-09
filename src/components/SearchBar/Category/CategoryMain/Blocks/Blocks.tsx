import { FC, useEffect } from "react";
import styles from "./blocks.module.scss";
import cn from "classnames";

import { categoriesList } from "components/Category/config";

interface IProps {
  isActiveCategory: number;
  isSearchBarTop: boolean;
  handleClick: (key: string, value: string) => void;
  setIsActiveChoice: (bool: string) => void;
}
const Blocks: FC<IProps> = ({
  isActiveCategory,
  isSearchBarTop,
  handleClick,
  setIsActiveChoice,
}) => {
  const chooseCategoryItem = (id, title) => {
    handleClick("nameOfCategoryItem", title);
    setIsActiveChoice("");
  };

  return (
    <div className={cn(styles.container, { [styles.top]: isSearchBarTop })}>
      {categoriesList.map(({ id, subcategories }) => {
        if (id === isActiveCategory && subcategories) {
          return subcategories.map(({ id, title, items }) => {
            return (
              <div
                key={id}
                className={styles.block}
                onClick={() => handleClick("nameOfSubCategory", title)}
              >
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.list}>
                  {items.map(({ id, title }) => {
                    return (
                      <li
                        className={styles.item}
                        key={id}
                        onClick={() => chooseCategoryItem(id, title)}
                      >
                        {title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          });
        }
      })}
    </div>
  );
};

export default Blocks;
