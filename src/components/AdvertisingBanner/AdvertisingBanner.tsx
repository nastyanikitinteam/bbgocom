import styles from "./advertising-banner.module.scss";
import bannerImg from "images/main-page/banner.png";

const AdvertisingBanner = () => {
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
