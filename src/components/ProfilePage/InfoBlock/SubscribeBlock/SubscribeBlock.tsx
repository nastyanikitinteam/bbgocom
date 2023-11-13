import cn from "classnames";
import styles from "./subscribe-block.module.scss";
import { useTranslation } from "react-i18next";
import girl from "images/main/subscribe-girl.png";

const SubscribeBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {/* Subscribe to <br /> notifications */}
        {t(`profile.subscribeToNotifications`)}
      </h3>
      <p className={styles.text}> {t(`profile.receiveMessages`)}</p>
      <a href="" className={cn("default-button sm white", styles.button)}>
        {t(`general.subscribe`)}
      </a>
      <div className={styles.image}>
        <img src={girl.src} alt="" />
      </div>
    </div>
  );
};

export default SubscribeBlock;
