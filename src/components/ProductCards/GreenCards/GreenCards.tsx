import { useState, useEffect, useMemo, FC } from "react";

import CardProduct from "components/CardProduct/CardProduct";
import {
  Swiper as SwiperComponent,
  SwiperSlide,
  SwiperProps,
} from "swiper/react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";

import styles from "./green-cards.module.scss";
import "swiper/css";

import ArrowSvg from "images/icons/drop.svg";

interface IProps {
  title: string;
  productsList: any;
  showButtonWithouTitle?: boolean;
}

const GreenCards: FC<IProps> = ({
  title,
  productsList,
  showButtonWithouTitle,
}) => {
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
      initialSlide: 1,
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
        <h2
          className={cn("title", styles.title)}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {title}
        </h2>
        <div
          className={styles.blocks}
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isMobile ? (
            <SwiperComponent {...(params as SwiperProps)}>
              {productsList.map(
                ({
                  id,
                  title,
                  slug,
                  images,
                  price,
                  oldPrice,
                  location,
                  isWish,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <CardProduct
                        id={id}
                        slug={slug}
                        title={title}
                        images={images}
                        price={price}
                        oldPrice={oldPrice}
                        location={location}
                        isWish={isWish}
                        isGreenCard
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </SwiperComponent>
          ) : (
            productsList
              .slice(0, isShowCategory)
              .map(
                ({
                  id,
                  title,
                  slug,
                  images,
                  price,
                  oldPrice,
                  location,
                  isWish,
                }) => {
                  return (
                    <div
                      className={styles.block}
                      key={id}
                      data-aos-anchor-placement="top-bottom"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <CardProduct
                        id={id}
                        title={title}
                        slug={slug}
                        images={images}
                        price={price}
                        oldPrice={oldPrice}
                        location={location}
                        isWish={isWish}
                        isGreenCard
                      />
                    </div>
                  );
                }
              )
          )}
        </div>
        {!isMobile && (
          <div
            className={styles.all}
            onClick={() => setIsViewAll((prev) => !prev)}
            data-aos-anchor-placement="center-bottom"
            data-aos="fade"
            data-aos-delay="300"
          >
            <div className={styles.text}>
              {isViewAll ? `Hide ` : `View all`}
              {!showButtonWithouTitle && <span>{title}</span>}
            </div>
            <span className={cn(styles.icon, { [styles.open]: isViewAll })}>
              <ArrowSvg />
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default GreenCards;