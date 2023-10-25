import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import styles from "./sliders.module.scss";
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

const Sliders: FC<IProps> = ({ isCurrentProductImages }) => {
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [isThumbStart, setIsThumbStart] = useState(false);

  const handleFirstSwiperClick = (index) => {
    mainSwiper.slideTo(index);
  };

  const secondParams = {
    onSwiper: setSecondSwiper,
    slidesPerView: 6,
    spaceBetween: 10,
    // initialSlide: 1,
    watchSlidesProgress: true,
    freeMode: true,
    direction: "vertical",
    modules: [FreeMode, Thumbs],
    className: "selected-slider-second",
    onClick: (swiper) => handleFirstSwiperClick(swiper.clickedIndex),
  };

  const firstParams = {
    onSwiper: setMainSwiper,
    slidesPerView: 1,
    spaceBetween: 10,
    initialSlide: 0,
    modules: [FreeMode, Navigation, Thumbs],
    navigation: {
      nextEl: ".product-next-btn",
      prevEl: ".product-prev-btn",
    },
    className: "selected-slider",
    onSlideChange: () => !isThumbStart && setIsThumbStart(true),
  };

  useEffect(() => {
    if (secondSwiper !== null) {
      mainSwiper.thumbs = {
        swiper: secondSwiper,
      };
    }
  }, [secondSwiper]);

  return (
    <div className={styles.container}>
      <div className={cn(styles.second, { nostart: !isThumbStart })}>
        <Swiper {...(secondParams as SwiperProps)}>
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
        <Swiper {...(firstParams as SwiperProps)}>
          {isCurrentProductImages.map(({ id, image }) => {
            return (
              <SwiperSlide key={id}>
                <img src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={cn(styles.navigation, "default-navigation__buttons")}>
          <div className="default-navigation__button prev product-prev-btn">
            <ArrowSvg />
          </div>
          <div className="default-navigation__button next product-next-btn">
            <ArrowSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
