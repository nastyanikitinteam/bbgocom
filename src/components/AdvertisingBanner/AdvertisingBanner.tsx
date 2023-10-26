import { FC } from "react";
import cn from "classnames";

import styles from "./advertising-banner.module.scss";

interface IProps {
  bannerImg: string;
  noPadding?: boolean;
}

const AdvertisingBanner: FC<IProps> = ({ bannerImg, noPadding }) => (
  <section className={cn(styles.container, { [styles.noPadding]: noPadding })}>
    <div className="wrapper">
      <div className={styles.banner}>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  </section>
);

export default AdvertisingBanner;
