import { useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "../../Slider/Slider";
import styles from "./hero.module.scss";
import cn from "classnames";
import SearchBar from "components/SearchBar/SearchBar";

import slideBg1 from "images/main-page/slide-img-1.png";
import slideBg1Mobile from "images/main-page/slide-img-1-mobile.png";

const Hero = () => {
  const { t } = useTranslation();

  const sliderList = useMemo(
    () => [
      {
        id: 0,
        background: t(`heroImg`),
        backgroundMobile: slideBg1Mobile.src,
        button: {
          name: t(`createButton`),
          link: "/create-an-ad",
        },
      },
      {
        id: 1,
        background: t(`heroImg`),
      },
      {
        id: 2,
        background: t(`heroImg`),
      },
      {
        id: 3,
        background: t(`heroImg`),
      },
    ],
    [t]
  );

  return (
    <section className={styles.container}>
      <div
        className="wrapper"
        data-aos-anchor-placement="center-bottom"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Slider slides={sliderList} isHeroSection />
        {/* <div className={styles.searchBar}>
          <SearchBar />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
