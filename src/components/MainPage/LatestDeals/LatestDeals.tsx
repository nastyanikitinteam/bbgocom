import { useState, useEffect } from "react";
import CardProduct from "components/CardProduct/CardProduct";
import { latestLst } from "./config";
import cn from "classnames";

import styles from "./latest-deals.module.scss";

import ArrowSvg from "images/icons/drop.svg";

const LatestDeals = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(5);

  useEffect(() => {
    isViewAll ? setIsShowCategory(10) : setIsShowCategory(5);
  }, [isViewAll]);
  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>Latest deals</h2>
        <div className={styles.blocks}>
          {latestLst.map(({ id, title, images, price, oldPrice, location }) => {
            return (
              id < isShowCategory && (
                <div className={styles.block} key={id}>
                  <CardProduct
                    title={title}
                    images={images}
                    price={price}
                    oldPrice={oldPrice}
                    location={location}
                    isGreenCard
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
          {isViewAll ? "Hide latest deals" : "View all latest deals"}
          <span className={styles.icon}>
            <ArrowSvg />
          </span>
        </div>
      </div>
    </section>
  );
};

export default LatestDeals;
