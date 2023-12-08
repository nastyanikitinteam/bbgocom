import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Slider from "../../Slider/Slider";
import styles from "./hero.module.scss";

const Hero = () => {
  const { t } = useTranslation();

  const sliderList = useMemo(
    () => [
      {
        id: 0,
        background: t(`home.bannerFirst`),
        backgroundMobile: t(`home.bannerFirstMobile`),
        button: {
          name: t(`general.createButton`),
          link: "/create-an-ad",
        },
      },
      {
        id: 1,
        background: t(`home.bannerFirst`),
        backgroundMobile: t(`home.bannerFirstMobile`),
      },
      {
        id: 2,
        background: t(`home.bannerFirst`),
        backgroundMobile: t(`home.bannerFirstMobile`),
      },
      {
        id: 3,
        background: t(`home.bannerFirst`),
        backgroundMobile: t(`home.bannerFirstMobile`),
      },
    ],
    [t]
  );

  return (
    <section className={styles.container}>
      <div
        className="wrapper"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Slider slides={sliderList} isHeroSection />
      </div>
    </section>
  );
};

export default Hero;
