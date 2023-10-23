import { FC, useMemo, useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import styles from "./images.module.scss";
import cn from "classnames";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ArrowSvg from "images/icons/drop.svg";

interface IProps {
  isCurrentProductImages: any;
}

const Images: FC<IProps> = ({ isCurrentProductImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isSwiperInit, setIsSwiperInit] = useState(false);
  const [isFirstParams, setIsFirstParams] = useState({});
  const [isSecondParams, setIsSecondParams] = useState({});

  useEffect(() => {
    setIsSecondParams({
      onSwiper: setThumbsSwiper,
      slidesPerView: 6,
      spaceBetween: 10,
      initialSlide: 1,
      watchSlidesProgress: true,
      freeMode: true,
      direction: "vertical",
      modules: [FreeMode, Thumbs],
      className: "selected-slider-second",
    });
    setIsFirstParams({
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 1,
      thumbs: { swiper: thumbsSwiper },
      modules: [FreeMode, Navigation, Thumbs],
      navigation: {
        nextEl: ".product-next-btn",
        prevEl: ".product-prev-btn",
      },
      className: "selected-slider",
    });
  }, [isCurrentProductImages]);

  return (
    <div className={styles.container}>
      {isCurrentProductImages && (
        <>
          <div className={styles.second}>
            <Swiper {...(isSecondParams as SwiperProps)}>
              {isCurrentProductImages.map(({ id, image }) => {
                return (
                  <SwiperSlide key={id}>
                    <img src={image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={styles.main}>
            <Swiper {...(isFirstParams as SwiperProps)}>
              {isCurrentProductImages.map(({ id, image }) => {
                return (
                  <SwiperSlide key={id}>
                    <img src={image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div
              className={cn(styles.navigation, "default-navigation__buttons")}
            >
              <div className="default-navigation__button prev product-prev-btn">
                <ArrowSvg />
              </div>
              <div className="default-navigation__button next product-next-btn">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Images;
