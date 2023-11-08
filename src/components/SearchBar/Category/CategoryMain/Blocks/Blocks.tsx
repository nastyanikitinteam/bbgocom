import { FC, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./blocks.module.scss";
import cn from "classnames";

import SignUpBlock from "components/CategoryPage/SubCategory/SignUpBlock/SignUpBlock";

import Plus from "images/icons/plus.svg";

interface IProps {
  isSearchBarTop?: boolean;
  isCategoryPage?: boolean;
  currentSubcategories?: any;
  category?: string;
  dataCategory?: any;
  isCreatePage?: boolean;
  selectedCategoryId?: number;
  chooseCategoryItem?: (value: any) => void;
  chooseSubcategory?: (value: any) => void;
  setIsActiveChoice: () => void;
}

const Blocks: FC<IProps> = ({
  isSearchBarTop,
  isCategoryPage,
  currentSubcategories,
  category,
  dataCategory,
  isCreatePage,
  selectedCategoryId,
  chooseCategoryItem,
  chooseSubcategory,
  setIsActiveChoice,
}) => {
  const [isbaseUrl, setIsBaseUrl] = useState("");

  const close = () => {
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
          : currentSubcategories.map((parentItem) => {
              return (
                <div
                  key={parentItem.id}
                  className={cn(styles.block, {
                    [styles.createPage]: isCreatePage,
                  })}
                >
                  <h3
                    className={styles.title}
                    onClick={() => {
                      if (!isCreatePage) {
                        chooseSubcategory(parentItem);
                        close();
                      }
                    }}
                  >
                    {parentItem.title}
                  </h3>
                  <ul className={styles.list}>
                    {parentItem.items.map((childrenItem) => {
                      return (
                        <li
                          className={cn(styles.item, {
                            [styles.active]:
                              childrenItem.id ===
                                dataCategory.subcategoryItem &&
                              parentItem.id === dataCategory.subcategory &&
                              selectedCategoryId === dataCategory.category,
                          })}
                          key={childrenItem.id}
                          onClick={() => {
                            chooseCategoryItem(childrenItem);
                            chooseSubcategory(parentItem);
                            close();
                          }}
                        >
                          {childrenItem.title}
                        </li>
                      );
                    })}
                  </ul>
                  {!isCreatePage && (
                    <Link href="/create-an-ad" className={styles.add}>
                      <span className={styles.icon}>
                        <Plus />
                      </span>
                      Add new one
                    </Link>
                  )}
                </div>
              );
            })}

        {isCategoryPage && <SignUpBlock />}
      </div>
    )
  );
};

export default Blocks;
