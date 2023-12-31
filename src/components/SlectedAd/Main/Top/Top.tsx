import { FC } from "react";
import styles from "./top.module.scss";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import StarIcon from "images/icons/star.svg";
import ShareIcon from "images/icons/share.svg";
import MapIcon from "images/icons/map-icon.svg";
import CalendarIcon from "images/icons/calendar.svg";
import { useTranslation } from "react-i18next";

interface IProps {
  isCurrentProduct: any;
  handleWihlist: () => void;
  handleShareModal: () => void;
}

const Top: FC<IProps> = ({
  isCurrentProduct,
  handleWihlist,
  handleShareModal,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.title}>{isCurrentProduct.name}</h2>
        <div className={styles.actions}>
          <div
            className={cn(styles.action, {
              [styles.isWish]: isCurrentProduct.isWish,
            })}
            onClick={handleWihlist}
          >
            <StarIcon />
          </div>
          <div className={styles.action} onClick={handleShareModal}>
            <ShareIcon />
          </div>
        </div>
      </div>
      <div className={styles.info}>
        {isCurrentProduct.location && (
          <div className={styles.location}>
            <span className={styles.icon}>
              <MapIcon />
            </span>
            {isCurrentProduct.location.name}
          </div>
        )}

        <div className={styles.date}>
          <span className={styles.icon}>
            <CalendarIcon />
          </span>
          {t(`selectedad.added`)}:<span> 30.05.2023</span>
        </div>
      </div>
    </div>
  );
};

export default Top;
