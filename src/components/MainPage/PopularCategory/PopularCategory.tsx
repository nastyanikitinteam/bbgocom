import { useState, useEffect } from "react";
import Category from "components/Category/Category";
import CategoryMobile from "components/SearchBar/Category/CategoryMain/CategoryMobile/CategoryMobile";
import useMediaQuery from "src/utils/useMediaQuery";
import { useTranslation } from "react-i18next";
import { categoriesList } from "config/categoriesList";

import styles from "./popular-category.module.scss";
import cn from "classnames";

import ArrowSvg from "images/icons/drop.svg";

const PopularCategory = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(7);
  const [isShowCategoryMenu, setIsShowCategoryMenu] = useState(false);

  const isSmallLaptop = useMediaQuery(1300);
  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);

  const { t } = useTranslation();

  useEffect(() => {
    isViewAll ? setIsShowCategory(categoriesList.length) : setIsShowCategory(7);
  }, [isViewAll]);

  useEffect(() => {
    if (isMobile) {
      setIsShowCategory(categoriesList.length);
    } else if (isTablet) {
      isViewAll
        ? setIsShowCategory(categoriesList.length)
        : setIsShowCategory(5);
    } else if (isSmallLaptop) {
      isViewAll
        ? setIsShowCategory(categoriesList.length)
        : setIsShowCategory(6);
    } else {
      isViewAll
        ? setIsShowCategory(categoriesList.length)
        : setIsShowCategory(7);
    }
  }, [isSmallLaptop, isTablet, isMobile]);

  return (
    <section className={styles.container}>
      <div className={cn("wrapper", styles.wrapper)}>
        <div
          className={styles.top}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className={cn("title", styles.title)}>{t(`popularCategory`)}</h2>
          {isMobile && (
            <div
              className={styles.all}
              onClick={() => setIsShowCategoryMenu(true)}
            >
              View all
              <span className={styles.icon}>
                <ArrowSvg />
              </span>
            </div>
          )}
        </div>

        <div
          className={styles.blocks}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {categoriesList.map(({ id, title, image, slug, subcategories }) => {
            return (
              id < isShowCategory && (
                <div className={styles.block} key={id}>
                  <Category
                    title={title}
                    image={image}
                    link={slug}
                    subcategories={subcategories}
                  />
                </div>
              )
            );
          })}
        </div>
        {!isMobile && (
          <div
            className={styles.all}
            onClick={() => setIsViewAll((prev) => !prev)}
            data-aos-anchor-placement="center-bottom"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {isViewAll ? "Hide Category" : "View all Category"}
            <span className={cn(styles.icon, { [styles.open]: isViewAll })}>
              <ArrowSvg />
            </span>
          </div>
        )}
      </div>
      {isShowCategoryMenu && (
        <CategoryMobile
          categoriesList={categoriesList}
          setIsShowCategoryMenu={setIsShowCategoryMenu}
        />
      )}
    </section>
  );
};

export default PopularCategory;
