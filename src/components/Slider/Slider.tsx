import { useMemo, FC, ReactNode } from "react";
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

interface IProps {
  slides?: any;
  isHeroSection?: boolean;
}

const Swiper: FC<IProps> = ({ slides, isHeroSection }) => {
  const params = useMemo(
    () => ({
      slidesPerView: 1,
      spaceBetween: 30,
      className: "serve-swiper",
      modules: [Pagination],
      pagination: {
        el: ".default-pagination",
        clickable: true,
      },
    }),
    []
  );
  return (
    <div className={styles.container}>
      <SwiperComponent {...(params as SwiperProps)}>
        {slides.map((props) => {
          return (
            <SwiperSlide key={props.id}>
              <SliderHeroSection param={props} />
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
      <div className={"default-pagination"} />
    </div>
  );
};

export default Swiper;
