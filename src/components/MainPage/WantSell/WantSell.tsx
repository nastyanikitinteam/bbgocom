import cn from "classnames";
import styles from "./want-sell.module.scss";

import man from "images/main-page/man.png";
import { useTranslation } from "react-i18next";

const WantSell = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className="wrapper">
        <div
          className={styles.block}
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className={styles.info}
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className={styles.title}>
              {t(`home.wantToSell`)} <span>{t(`home.onBBGO`)}</span>
            </h2>
            <p className={styles.text}>{t(`home.checkOutBBGOOffers`)}</p>
            <div className={cn("default-button white", styles.button)}>
              {t(`home.startSelling`)}
            </div>
          </div>
          <div
            className={styles.image}
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={man.src} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WantSell;
