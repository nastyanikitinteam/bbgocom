import { useMemo } from "react";
import Slider from "../../Slider/Slider";
import styles from "./hero.module.scss";

import slideBg1 from "images/main-page/slide-img-1.png";

const Hero = () => {
  const sliderList = useMemo(
    () => [
      {
        id: 0,
        background: slideBg1.src,
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
    <div className={styles.container}>
      <div className="wrapper">
        {/* <Slider slides={sliderList} isHeroSection /> */}
        <Slider slides={sliderList} isHeroSection />
      </div>
    </div>
  );
};

export default Hero;
