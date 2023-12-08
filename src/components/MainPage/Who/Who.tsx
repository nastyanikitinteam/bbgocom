import { useMemo } from "react";
import { blocksList } from "config/mainPage";
import { useTranslation } from "react-i18next";

import {
  Swiper as SwiperComponent,
  SwiperSlide,
  SwiperProps,
} from "swiper/react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import styles from "./who.module.scss";

const Who = () => {
  const isTablet = useMediaQuery(998);
  const { t } = useTranslation();

  const params = useMemo(
    () => ({
      slidesPerView: 1,
      spaceBetween: 10,
      className: cn("who-swiper", styles.swiper),
      initialSlide: 1,
    }),
    []
  );

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2
          className={cn("title", styles.title)}
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {t(`home.whoWeAre`)}
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
                    <h3 className={styles.name}>{t(`${title}`)}</h3>
                    <p className={styles.text}>{t(`${text}`)}</p>
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
                  data-aos-anchor-placement="top-bottom"
                  data-aos="fade"
                  data-aos-delay={200 + 200 * id}
                >
                  <div className={styles.image}>
                    <img src={image} alt="" />
                  </div>
                  <h3 className={styles.name}>{t(`${title}`)}</h3>
                  <p className={styles.text}>{t(`${text}`)}</p>
                </div>
              );
            })
          )}
        </div>

        <div
          className={styles.info}
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className={styles.description}> {t(`home.doYouHaveQuestuin`)}</p>
          <div className={cn("default-button sm", styles.button)}>
            {t(`home.helpSection`)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
