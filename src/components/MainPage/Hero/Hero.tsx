import { useMemo } from "react";
import Slider from "../../Slider/Slider";
import styles from "./hero.module.scss";
import cn from "classnames";
import SearchBar from "components/SearchBar/SearchBar";

import slideBg1 from "images/main-page/slide-img-1.png";
import slideBg1Mobile from "images/main-page/slide-img-1-mobile.png";

const Hero = () => {
  const sliderList = useMemo(
    () => [
      {
        id: 0,
        background: slideBg1.src,
        backgroundMobile: slideBg1Mobile.src,
        button: {
          name: "Create an Ad",
          link: "#",
        },
      },
      {
        id: 1,
        background: slideBg1.src,
      },
      {
        id: 2,
        background: slideBg1.src,
      },
      {
        id: 3,
        background: slideBg1.src,
      },
    ],
    []
  );

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <Slider slides={sliderList} isHeroSection />

        {/* <div className={styles.searchBar}>
          <SearchBar />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
