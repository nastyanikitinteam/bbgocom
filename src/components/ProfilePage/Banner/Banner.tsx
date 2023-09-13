import UploadBanner from "./UploadBanner/UploadBanner";
import Rules from "./Rules/Rules";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <UploadBanner />
      </div>
      <div className={styles.info}>
        <Rules />
      </div>
    </div>
  );
};

export default Banner;
