import { FC, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./blocks.module.scss";
import cn from "classnames";

import SignUpBlock from "components/CategoryPage/SubCategory/SignUpBlock/SignUpBlock";

import Plus from "images/icons/plus.svg";

interface IProps {
  isSearchBarTop?: boolean;
  handleClick?: (key: string, value: string) => void;
  setIsActiveChoice?: () => void;
  isCategoryPage?: boolean;
  currentSubcategories?: any;
  category?: string;
  dataCategory?: any;
  delNameOfCategoryItem?: () => void;
  isCreatePage?: boolean;
  onChangeItem?: (
    firstValue: number,
    secondValue: number,
    thirdValue: number
  ) => void;
  selectedCategoryId?: number;
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
  isCreatePage,
  onChangeItem,
  selectedCategoryId,
}) => {
  const [isbaseUrl, setIsBaseUrl] = useState("");

  const [selectedSubcategorieId, setSelectedSubcategorieId] = useState(
    dataCategory.subcategorieItem ? dataCategory.subcategorieItem : null
  );
  const [selectedSubcategorieItemId, setSelectedSubcategorieItemId] = useState(
    dataCategory.catsubcategorieItemegory ? dataCategory.subcategorieItem : null
  );

  const chooseCategoryItem = (id, title) => {
    handleClick("subcategorieItem", id);
    // setSelectedSubcategorieItemId(id);
    setIsActiveChoice();
  };

  const chooseSubCategory = (id, title) => {
    handleClick("subcategorie", id);
    // if (!isCreatePage && dataCategory.subcategorieItem) {
    //   delNameOfCategoryItem();
    // }
    // setSelectedSubcategorieId(id);
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
                    onClick={() =>
                      !isCreatePage &&
                      chooseSubCategory(parentItem.id, parentItem.title)
                    }
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
                                dataCategory.subcategorieItem &&
                              parentItem.id === dataCategory.subcategorie &&
                              selectedCategoryId === dataCategory.category,
                          })}
                          key={childrenItem.id}
                          onClick={() => {
                            if (!isCreatePage) {
                              chooseCategoryItem(
                                childrenItem.id,
                                childrenItem.title
                              );
                              chooseSubCategory(
                                parentItem.id,
                                parentItem.title
                              );
                            } else {
                              onChangeItem(
                                selectedCategoryId,
                                parentItem.id,
                                childrenItem.id
                              );
                            }
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
