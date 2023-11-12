import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./success-message.module.scss";
import MapIcon from "images/icons/map-icon.svg";
import avatar from "images/main/avatar.png";
import CheckIcon from "images/icons/message-status-done.svg";
import { useTranslation } from "react-i18next";

interface IProps {
  closeModal: () => void;
  isCurrentProduct: any;
}

const SuccessMessage: FC<IProps> = ({ closeModal, isCurrentProduct }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t(`general.messageSent`)}</h3>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={avatar.src} alt="" />
          <div className={styles.check}>
            <CheckIcon />
          </div>
        </div>
        <h3 className={styles.name}>Kimhan Nakpradith</h3>
      </div>
      <div className={styles.block}>
        <h3 className={styles.description}>{isCurrentProduct.name}</h3>
        <p className={styles.price}>{isCurrentProduct.price}</p>
        {isCurrentProduct.location && (
          <div className={styles.location}>
            <span className={styles.icon}>
              <MapIcon />
            </span>
            {isCurrentProduct.location.name}
          </div>
        )}
      </div>

      <div className={styles.buttons}>
        <div
          className={cn("default-button border sm", styles.button)}
          onClick={closeModal}
        >
          {t(`general.cancel`)}
        </div>
        <Link
          href="/my-messages"
          className={cn("default-button sm", styles.button)}
        >
          {t(`general.myMessages`)}
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
