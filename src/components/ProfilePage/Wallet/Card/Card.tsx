import { FC, useCallback, useState } from "react";
import styles from "./card.module.scss";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import DelIcon from "images/icons/delete.svg";
import WalletIcon from "images/icons/wallet-big.svg";

interface IProps {
  item: any;
  changeMainCard: () => void;
}

const Card: FC<IProps> = ({ item, changeMainCard }) => {
  const { t } = useTranslation();
  const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  const formatCardNumber = (number) => {
    const visibleDigits = 4;
    const maskedNumber =
      "•".repeat(number.length - visibleDigits) + number.slice(-visibleDigits);
    return maskedNumber.replace(/(.{4})/g, "$1 ");
  };

  return (
    <>
      <div
        className={cn(styles.container, { [styles.active]: item.isMainCard })}
      >
        <div className={styles.top}>
          <p className={styles.type}>{item.typeOfCard}</p>
          <span className={styles.icon}>{item.icon}</span>
        </div>
        <div className={styles.number}>{formatCardNumber(item.number)}</div>
        <div className={styles.bottom}>
          <div className={styles.position}>
            <label className={styles.radio}>
              <input
                type="radio"
                name="positionCard"
                checked={item.isMainCard}
                onChange={changeMainCard}
              />
              <div className={styles.radioBlock}></div>
              <p className={styles.text}>
                {item.isMainCard
                  ? t(`profile.mainCard`)
                  : t(`profile.makeMainCard`)}
              </p>
            </label>
          </div>
          <span
            className={styles.delete}
            onClick={() => setIsActiveDeleteModal(true)}
          >
            <DelIcon />
          </span>
        </div>
      </div>
      {isActiveDeleteModal && (
        <Modal
          closeModal={() => setIsActiveDeleteModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={() => setIsActiveDeleteModal(false)}
            event={t(`profile.deleteCard`)}
            description={t(`profile.removeCardWarning`)}
            title={t(`profile.deleteCard`)}
            icon={<WalletIcon />}
          />
        </Modal>
      )}
    </>
  );
};

export default Card;
