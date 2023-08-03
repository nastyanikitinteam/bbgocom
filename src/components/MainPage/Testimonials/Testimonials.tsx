import { useMemo } from "react";
import { Navigation, Pagination } from "swiper/modules";
import {
  Swiper as SwiperComponent,
  SwiperSlide,
  SwiperProps,
} from "swiper/react";
import cn from "classnames";
import Review from "./Review/Review";
import { reviewList } from "./config";

import "swiper/css";

import styles from "./testimonials.module.scss";

import ArrowSvg from "images/icons/drop.svg";

const Testimonials = () => {
  const params = useMemo(
    () => ({
      slidesPerView: 1,
      spaceBetween: 40,
      className: "review-swiper",
      modules: [Pagination, Navigation],
      pagination: {
        type: "fraction",
        el: ".reviews-pagination",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " of " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      navigation: {
        nextEl: ".reviews-next-btn",
        prevEl: ".reviews-prev-btn",
      },
    }),
    []
  );

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>Testimonials</h2>
        <div className={styles.slider}>
          <SwiperComponent
            {...(params as SwiperProps)}
            onSlideChange={() => console.log("slide change")}
          >
            {reviewList.map((props) => {
              return (
                <SwiperSlide key={props.id}>
                  <Review info={props} />
                </SwiperSlide>
              );
            })}
          </SwiperComponent>
          <div className={styles.controllers}>
            <div
              className={cn(
                styles.pagination,
                "reviews-pagination pagination-reviews"
              )}
            ></div>
            <div
              className={cn(styles.navigation, "default-navigation__buttons")}
            >
              <div className="default-navigation__button prev reviews-prev-btn">
                <ArrowSvg />
              </div>
              <div className="default-navigation__button next reviews-next-btn">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
