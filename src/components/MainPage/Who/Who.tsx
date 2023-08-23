import { useMemo, useEffect } from "react";

import {
  Swiper as SwiperComponent,
  SwiperSlide,
  SwiperProps,
} from "swiper/react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import styles from "./who.module.scss";

import image1 from "images/main-page/who-img-1.png";
import image2 from "images/main-page/who-img-2.png";
import image3 from "images/main-page/who-img-3.png";

const Who = () => {
  const isTablet = useMediaQuery(998);

  const params = useMemo(
    () => ({
      slidesPerView: 1,
      spaceBetween: 10,
      className: cn("who-swiper", styles.swiper),
      initialSlide: 1,
    }),
    []
  );

  const blocksList = useMemo(
    () => [
      {
        id: 0,
        image: image1.src,
        title: "Private announcements",
        text: "BBGO is a classifieds service where people gather to sell, buy, offer their services or create something unique together. This pushes society towards positive changes in the field of small business and helps it develop much faster.",
      },
      {
        id: 1,
        image: image2.src,
        title: "Flexible Advertising",
        text: "We have made a lot of efforts so that the seller can set up advertising in just two clicks. The more ads you advertise, the lower your bid per ad. Thus, we try to make advertising more accessible and help the development of small businesses.",
      },
      {
        id: 2,
        image: image3.src,
        title: "Convenient mobile application",
        text: "Do you like to sit on your phone? Now our website is also available as a mobile application. For registering in the application, you will receive bonuses equivalent to Thai baht, which you can spend on advertising or pay for shipping. To download, point to the qr code from the phone's camera in the footer of the site.",
      },
    ],
    []
  );

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2
          className={cn("title", styles.title)}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Who we are
        </h2>
        <div className={styles.blocks}>
          {isTablet ? (
            <SwiperComponent {...(params as SwiperProps)}>
              {blocksList.map(({ id, image, title, text }) => {
                return (
                  <SwiperSlide key={id} className={styles.block}>
                    <div className={styles.image}>
                      <img src={image} alt="" />
                    </div>
                    <h3 className={styles.name}>{title}</h3>
                    <p className={styles.text}>{text}</p>
                  </SwiperSlide>
                );
              })}
            </SwiperComponent>
          ) : (
            blocksList.map(({ id, image, title, text }) => {
              return (
                <div
                  key={id}
                  className={styles.block}
                  data-aos-anchor-placement="center-bottom"
                  data-aos="fade"
                  data-aos-delay={200 + 200 * id}
                >
                  <div className={styles.image}>
                    <img src={image} alt="" />
                  </div>
                  <h3 className={styles.name}>{title}</h3>
                  <p className={styles.text}>{text}</p>
                </div>
              );
            })
          )}
        </div>

        <div
          className={styles.info}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className={styles.description}>Do you have any questions?</p>
          <div className={cn("default-button sm", styles.button)}>
            Help section
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
