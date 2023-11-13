import Link from "next/link";
import styles from "./banner.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import BannerBg from "images/main/banner-profile.png";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${BannerBg.src})` }}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{t(`general.yourAdvertisement`)}</h3>

        <p className={styles.description}>{t(`general.addYourBanners`)}</p>
      </div>
      <Link href="/banner" className={cn("default-button sm", styles.button)}>
        {t(`general.add`)}
      </Link>
    </div>
  );
};

export default Banner;
