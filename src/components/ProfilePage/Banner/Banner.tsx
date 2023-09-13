import UploadBanner from "./UploadBanner/UploadBanner";
import BannerList from "./BannerList/BannerList";
import BannerListMobile from "./BannerList/BannerListMobile";
import Rules from "./Rules/Rules";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./banner.module.scss";

const Banner = () => {
  const isSmallDisplay = useMediaQuery(1300);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <UploadBanner />
        {isSmallDisplay ? <BannerListMobile /> : <BannerList />}
      </div>
      <div className={styles.info}>
        <Rules />
      </div>
    </div>
  );
};

export default Banner;
