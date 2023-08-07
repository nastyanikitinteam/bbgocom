import { useState, FC } from "react";
import { categoriesList } from "components/Category/config";
import Blocks from "./Blocks/Blocks";
import cn from "classnames";

import styles from "./category-main.module.scss";

import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  isSearchBarTop: boolean;
}

const CategoryMain: FC<IProps> = ({ isSearchBarTop }) => {
  const [isActiveCategrory, setIsActiveCategory] = useState(0);

  return (
    <div className={cn(styles.container, { [styles.top]: isSearchBarTop })}>
      <div className={styles.list}>
        {categoriesList.map(({ id, title, image }) => {
          return (
            <div
              className={cn(styles.item, {
                [styles.active]: isActiveCategrory == id,
              })}
              key={id}
              onClick={() => setIsActiveCategory(id)}
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
          isActiveCategrory={isActiveCategrory}
          isSearchBarTop={isSearchBarTop}
        />
      </div>
    </div>
  );
};

export default CategoryMain;
