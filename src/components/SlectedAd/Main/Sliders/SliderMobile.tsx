import { FC, useRef, useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import styles from "./sliders.module.scss";

import "swiper/css";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

interface IProps {
  isCurrentProductImages: any;
}

const SliderMobile: FC<IProps> = ({ isCurrentProductImages }) => {
  const firstParams = {
    slidesPerView: 1,
    spaceBetween: 10,
    initialSlide: 0,
    modules: [FreeMode, Navigation, Thumbs, Pagination],
    navigation: false,
    loop: true,
    pagination: {
      modifierClass: "default-",
      clickable: true,
    },
    className: "selected-slider",
  };

  return (
    <div className={styles.container}>
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
      </div>
    </div>
  );
};

export default SliderMobile;
