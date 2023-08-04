import { useMemo, useState, useEffect } from "react";
import Category from "components/Category/Category";

import { categoriesList } from "components/Category/config";

import styles from "./popular-category.module.scss";
import cn from "classnames";

import ArrowSvg from "images/icons/drop.svg";

const PopularCategory = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(7);

  useEffect(() => {
    isViewAll ? setIsShowCategory(categoriesList.length) : setIsShowCategory(7);
  }, [isViewAll]);

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>Popular Categories</h2>
        <div className={styles.blocks}>
          {categoriesList.map(({ id, title, image, link, items }) => {
            return (
              id < isShowCategory && (
                <div className={styles.block} key={id}>
                  <Category
                    title={title}
                    image={image}
                    link={link}
                    items={items}
                  />
                </div>
              )
            );
          })}
        </div>
        <div
          className={cn(styles.all, { [styles.open]: isViewAll })}
          onClick={() => setIsViewAll((prev) => !prev)}
        >
          {isViewAll ? "Hide Category" : "View all Category"}
          <span className={styles.icon}>
            <ArrowSvg />
          </span>
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
