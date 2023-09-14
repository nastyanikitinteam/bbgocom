import { FC } from "react";

import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./advertising-banner.module.scss";

interface IProps {
  bannerImg: string;
}

const AdvertisingBanner: FC<IProps> = ({ bannerImg }) => {
  return (
    <section className={styles.container}>
      <div
        className="wrapper"
        data-aos-anchor-placement="center-bottom"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className={styles.banner}>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AdvertisingBanner;
