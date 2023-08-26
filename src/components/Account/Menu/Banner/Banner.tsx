import styles from "./banner.module.scss";
import cn from "classnames";

import BannerBg from "images/main/banner-profile.png";

const Banner = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${BannerBg.src})` }}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>Your advertisement</h3>
        <p className={styles.description}>Add your banners</p>
      </div>
      <div className={cn("default-button sm", styles.button)}>Add</div>
    </div>
  );
};

export default Banner;
