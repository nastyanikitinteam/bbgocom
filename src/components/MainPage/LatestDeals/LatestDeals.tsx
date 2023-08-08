import { useState, useEffect, useMemo } from "react";
import CardProduct from "components/CardProduct/CardProduct";
import {
  Swiper as SwiperComponent,
  SwiperSlide,
  SwiperProps,
} from "swiper/react";
import useMediaQuery from "src/utils/useMediaQuery";
import { latestLst } from "./config";
import cn from "classnames";

import styles from "./latest-deals.module.scss";
import "swiper/css";

import ArrowSvg from "images/icons/drop.svg";

const LatestDeals = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(5);

  const isSmallLaptop = useMediaQuery(1100);
  const isTablet = useMediaQuery(900);
  const isMobile = useMediaQuery(768);

  const params = useMemo(
    () => ({
      slidesPerView: 1,
      spaceBetween: 10,
      className: cn("latest-swiper", styles.swiper),
    }),
    []
  );

  useEffect(() => {
    if (isTablet) {
      isViewAll ? setIsShowCategory(10) : setIsShowCategory(3);
    } else if (isSmallLaptop) {
      isViewAll ? setIsShowCategory(10) : setIsShowCategory(4);
    } else {
      isViewAll ? setIsShowCategory(10) : setIsShowCategory(5);
    }
  }, [isSmallLaptop, isTablet, isViewAll]);

  return (
    <section className={styles.container}>
      <div className={cn("wrapper", styles.wrapper)}>
        <h2 className={cn("title", styles.title)}>Latest deals</h2>
        <div className={styles.blocks}>
          {isMobile ? (
            <SwiperComponent {...(params as SwiperProps)}>
              {latestLst.map(
                ({ id, title, images, price, oldPrice, location }) => {
                  return (
                    <SwiperSlide key={id}>
                      <CardProduct
                        title={title}
                        images={images}
                        price={price}
                        oldPrice={oldPrice}
                        location={location}
                        isGreenCard
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </SwiperComponent>
          ) : (
            latestLst
              .slice(0, isShowCategory)
              .map(({ id, title, images, price, oldPrice, location }) => {
                return (
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
                );
              })
          )}
        </div>
        {!isMobile && (
          <div
            className={cn(styles.all, { [styles.open]: isViewAll })}
            onClick={() => setIsViewAll((prev) => !prev)}
          >
            {isViewAll ? "Hide latest deals" : "View all latest deals"}
            <span className={styles.icon}>
              <ArrowSvg />
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestDeals;
