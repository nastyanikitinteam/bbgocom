import { useState, useEffect, FC } from "react";
import { categoriesList } from "components/Category/config";
import Blocks from "./Blocks/Blocks";
import cn from "classnames";

import styles from "./category-main.module.scss";

import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  isSearchBarTop: boolean;
  isActiveCategory: number;
  setIsActiveCategory: (bool: number) => void;
  setIsActiveChoice: (bool: string) => void;
  handleClick: (key: string, value: string) => void;
}

const CategoryMain: FC<IProps> = ({
  isSearchBarTop,
  isActiveCategory,
  setIsActiveCategory,
  handleClick,
  setIsActiveChoice,
}) => {
  const chooseCategory = (id, title) => {
    handleClick("nameOfCategory", title);
    setIsActiveCategory(id);
  };

  return (
    <div className={cn(styles.container, { [styles.top]: isSearchBarTop })}>
      <div className={styles.list}>
        {categoriesList.map(({ id, title, image }) => {
          return (
            <div
              className={cn(styles.item, {
                [styles.active]: isActiveCategory == id,
              })}
              key={id}
              onClick={() => chooseCategory(id, title)}
            >
              <div className={styles.image}>
                <img src={image} alt="" />
              </div>
              <h3 className={styles.title}>{title}</h3>
              <span className={styles.arrow}>
                <ArrowIcon />
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.main}>
        <Blocks
          isActiveCategory={isActiveCategory}
          isSearchBarTop={isSearchBarTop}
          handleClick={handleClick}
          setIsActiveChoice={setIsActiveChoice}
        />
      </div>
    </div>
  );
};

export default CategoryMain;
