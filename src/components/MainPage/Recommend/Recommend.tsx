import { useState, useEffect } from "react";
import CardProduct from "components/CardProduct/CardProduct";
import { productLst } from "./config";
import cn from "classnames";

import styles from "./recommend.module.scss";

import ArrowSvg from "images/icons/drop.svg";

const Recommend = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(8);

  useEffect(() => {
    isViewAll ? setIsShowCategory(16) : setIsShowCategory(8);
  }, [isViewAll]);

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>Recommend</h2>

        <div className={styles.blocks}>
          {productLst.map(
            ({ id, title, images, price, oldPrice, location }) => {
              return (
                id < isShowCategory && (
                  <div className={styles.block} key={id}>
                    <CardProduct
                      title={title}
                      images={images}
                      price={price}
                      oldPrice={oldPrice}
                      location={location}
                    />
                  </div>
                )
              );
            }
          )}
        </div>
        <div
          className={cn(styles.all, { [styles.open]: isViewAll })}
          onClick={() => setIsViewAll((prev) => !prev)}
        >
          {isViewAll ? "Hide recommended" : "View all recommended"}
          <span className={styles.icon}>
            <ArrowSvg />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Recommend;
