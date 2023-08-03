import { useMemo, FC, useRef, useEffect } from "react";
import {
  Swiper as SwiperComponent,
  SwiperSlide,
  SwiperProps,
} from "swiper/react";
import { Pagination } from "swiper/modules";
import SliderHeroSection from "./components/SliderHeroSection/SliderHeroSection";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

import styles from "./slider.module.scss";
import cn from "classnames";
interface IProps {
  slides?: any;
  isHeroSection?: boolean;
  isCardProduct?: boolean;
}

const Swiper: FC<IProps> = ({ slides, isHeroSection, isCardProduct }) => {
  const params = useMemo(
    () => ({
      slidesPerView: 1,
      spaceBetween: 30,
      className: "serve-swiper",
      modules: [Pagination],
      pagination: {
        modifierClass: "default-",
        clickable: true,
      },
    }),
    []
  );

  return (
    <div
      className={cn(styles.container, { "pagination-center": isCardProduct })}
    >
      <SwiperComponent {...(params as SwiperProps)}>
        {slides.map((props) => {
          return (
            <SwiperSlide key={props.id}>
              {isHeroSection && <SliderHeroSection param={props} />}
              {isCardProduct && <img src={props.image} alt="" />}
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </div>
  );
};

export default Swiper;
