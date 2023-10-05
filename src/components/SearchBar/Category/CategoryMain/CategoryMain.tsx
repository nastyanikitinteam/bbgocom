import { useState, useEffect, FC } from "react";
import PortalContainer from "components/PortalContainer/PortalContainer";
import { categoriesList } from "components/Category/config";
import useMediaQuery from "src/utils/useMediaQuery";
import CategoryMobile from "./CategoryMobile/CategoryMobile";
import Blocks from "./Blocks/Blocks";
import cn from "classnames";

import styles from "./category-main.module.scss";

import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  isSearchBarTop?: boolean;
  isActiveCategory: number;
  setIsActiveCategory: (bool: number) => void;
  setIsActiveChoice?: () => void;
  handleClick: (key: string, value: string) => void;
  dataCategory: any;
  setDataCategory: (bool: string) => void;
}

const CategoryMain: FC<IProps> = ({
  isSearchBarTop,
  isActiveCategory,
  setIsActiveCategory,
  handleClick,
  setIsActiveChoice,
  dataCategory,
  setDataCategory,
}) => {
  const [isCurrentList, setIsCurrentList] = useState([]);

  const isMobile = useMediaQuery(768);

  const chooseCategory = (id, title) => {
    handleClick("nameOfCategory", title);
    setIsActiveCategory(id);
  };

  useEffect(() => {
    const currentItem = categoriesList.filter(
      ({ id }) => id === isActiveCategory
    );
    // @ts-ignore
    setIsCurrentList(currentItem[0] || categoriesList[0]);
  }, [isActiveCategory]);

  return isMobile ? (
    <PortalContainer>
      <CategoryMobile
        categoriesList={categoriesList}
        handleClick={handleClick}
        setIsActiveChoice={setIsActiveChoice}
        dataCategory={dataCategory}
        setDataCategory={setDataCategory}
      />
    </PortalContainer>
  ) : (
    <div className={cn(styles.container, { [styles.top]: isSearchBarTop })}>
      <div className={styles.list}>
        {categoriesList.map(({ id, title, image }) => {
          return (
            <div
              className={cn(styles.item, {
                [styles.active]: isActiveCategory == id,
              })}
              key={id}
              onMouseEnter={() => chooseCategory(id, title)}
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
          // @ts-ignore
          currentSubcategories={isCurrentList.subcategories}
          isSearchBarTop={isSearchBarTop}
          handleClick={handleClick}
          setIsActiveChoice={setIsActiveChoice}
        />
      </div>
    </div>
  );
};

export default CategoryMain;
