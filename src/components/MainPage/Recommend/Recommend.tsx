import { useState, useEffect } from "react";

import CardProduct from "components/CardProduct/CardProduct";
import useMediaQuery from "src/utils/useMediaQuery";
import { productLst } from "./config";
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
        <h2
          className={cn("title", styles.title)}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Recommend
        </h2>

        <div className={styles.blocks}>
          {productLst
            .slice(0, isShowCategory)
            .map(({ id, name, images, price, oldPrice, location }) => {
              return (
                <div
                  className={styles.block}
                  key={id}
                  data-aos-anchor-placement="top-bottom"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <CardProduct
                    title={name}
                    images={images}
                    price={price}
                    oldPrice={oldPrice}
                    location={location}
                  />
                </div>
              );
            })}
        </div>
        <div
          className={styles.all}
          onClick={() => setIsViewAll((prev) => !prev)}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade"
          data-aos-delay="300"
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
