import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./advertising-banner.module.scss";
import bannerImg from "images/main-page/banner.png";
import bannerMobileImg from "images/main-page/banner-mobile.png";

const AdvertisingBanner = () => {
  const isMobile = useMediaQuery(768);

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <div className={styles.banner}>
          <img src={bannerImg.src} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AdvertisingBanner;
