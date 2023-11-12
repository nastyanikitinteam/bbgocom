import { FC } from "react";
import styles from "./detailed-information.module.scss";
import { infoList } from "./config";
import { useTranslation } from "react-i18next";

interface IProps {
  isCurrentProduct?: any;
}

const DetailedInformation: FC<IProps> = ({ isCurrentProduct }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t(`createad.detailedInformation`)}</h3>
      <div className={styles.items}>
        {infoList.map(({ id, icon, title }) => {
          return (
            <div key={id} className={styles.item}>
              <span className={styles.icon}>{icon}</span>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailedInformation;
