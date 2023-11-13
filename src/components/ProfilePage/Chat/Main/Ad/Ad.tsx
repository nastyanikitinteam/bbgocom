import { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./ad.module.scss";

interface IProps {
  cover: string;
  title: string;
}

const Ad: FC<IProps> = ({ cover, title }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={cover} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={cn("default-button sm", styles.button)}>
        {t(`profile.goToAd`)}
      </div>
    </div>
  );
};

export default Ad;
