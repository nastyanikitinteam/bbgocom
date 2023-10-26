import { useState, useEffect } from "react";

import CardProduct from "components/CardProduct/CardProduct";
import useMediaQuery from "src/utils/useMediaQuery";
import { productList } from "./config";
import cn from "classnames";

import styles from "./recommend.module.scss";

import ArrowSvg from "images/icons/drop.svg";

const Recommend = () => {
  const isTablet = useMediaQuery(998);
  const isMobileFirst = useMediaQuery(768);
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(8);

  // useEffect(() => {
  //   isViewAll ? setIsShowCategory(16) : setIsShowCategory(3);
  // }, [isViewAll]);

  useEffect(() => {
    if (isTablet && !isMobileFirst) {
      isViewAll ? setIsShowCategory(16) : setIsShowCategory(6);
    } else {
      isViewAll ? setIsShowCategory(16) : setIsShowCategory(8);
    }
  }, [isTablet, isMobileFirst, isViewAll]);

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>Recommend</h2>

        <div className={styles.blocks}>
          {productList
            .slice(0, isShowCategory)
            .map(
              ({
                id,
                name,
                slug,
                images,
                price,
                oldPrice,
                location,
                isWish,
              }) => {
                return (
                  <div className={styles.block} key={id}>
                    <CardProduct
                      id={id}
                      title={name}
                      slug={slug}
                      images={images}
                      price={price}
                      oldPrice={oldPrice}
                      location={location}
                      isWish={isWish}
                    />
                  </div>
                );
              }
            )}
        </div>
        <div
          className={styles.all}
          onClick={() => setIsViewAll((prev) => !prev)}
        >
          {isViewAll ? "Hide recommended" : "View all recommended"}
          <span className={cn(styles.icon, { [styles.open]: isViewAll })}>
            <ArrowSvg />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Recommend;
