import { FC, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./blocks.module.scss";
import cn from "classnames";

import { categoriesList } from "components/Category/config";
import SignUpBlock from "components/CategoryPage/SubCategory/SignUpBlock/SignUpBlock";

import Plus from "images/icons/plus.svg";

interface IProps {
  isSearchBarTop?: boolean;
  handleClick?: (key: string, value: string) => void;
  setIsActiveChoice?: () => void;
  isCategoryPage?: boolean;
  currentSubcategories?: any;
  category?: string;
  dataCategory: any;
  delNameOfCategoryItem?: () => void;
}

const Blocks: FC<IProps> = ({
  isSearchBarTop,
  handleClick,
  setIsActiveChoice,
  isCategoryPage,
  currentSubcategories,
  category,
  dataCategory,
  delNameOfCategoryItem,
}) => {
  const [isbaseUrl, setIsBaseUrl] = useState("");

  const chooseCategoryItem = (id, title) => {
    handleClick("nameOfCategoryItem", title);
    setIsActiveChoice();
  };

  const chooseSubCategory = (id, title) => {
    handleClick("nameOfSubCategory", title);
    if (dataCategory.nameOfCategoryItem) {
      delNameOfCategoryItem();
    }
    setIsActiveChoice();
  };

  useEffect(() => {
    setIsBaseUrl(window.location.origin);
  }, []);

  return (
    currentSubcategories && (
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
        {isCategoryPage
          ? currentSubcategories.map(({ id, title, slug, items }) => {
              return (
                <div
                  key={id}
                  className={cn(styles.block, {
                    [styles.categoryPage]: isCategoryPage,
                  })}
                >
                  <Link
                    href={`${isbaseUrl}/categories/${category}/${slug}`}
                    className={styles.title}
                  >
                    {title}
                  </Link>
                  <ul className={styles.list}>
                    {items.map(({ id, slug: link, title }) => {
                      return (
                        <Link
                          href={`${isbaseUrl}/categories/${category}/${slug}/${link}`}
                          className={styles.item}
                          key={id}
                        >
                          {title}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          : currentSubcategories.map(({ id, title, items }) => {
              return (
                <div
                  key={id}
                  className={cn(styles.block, {
                    [styles.categoryPage]: isCategoryPage,
                  })}
                  onClick={() => chooseSubCategory(id, title)}
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
                  <Link href="/create-an-ad" className={styles.add}>
                    <span className={styles.icon}>
                      <Plus />
                    </span>
                    Add new one
                  </Link>
                </div>
              );
            })}

        {isCategoryPage && <SignUpBlock />}
      </div>
    )
  );
};

export default Blocks;
