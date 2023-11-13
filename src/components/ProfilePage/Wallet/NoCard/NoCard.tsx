import { useState, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import styles from "./no-card.module.scss";
import { useTranslation } from "react-i18next";
import WalletIcon from "images/icons/wallet-big.svg";
import PlusIcon from "images/icons/plus.svg";

interface IProps {
  setIsWallet: (bool: boolean) => void;
  setIsActiveNewCard: (bool: boolean) => void;
}

const NoCard: FC<IProps> = ({ setIsWallet, setIsActiveNewCard }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(768);
  const addNewCard = () => {
    if (isMobile) {
      setIsActiveNewCard(true);
      setIsWallet(true);
    } else {
      setIsWallet(true);
      setIsActiveNewCard(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.icon}>
          <WalletIcon />
        </div>
        <h3 className={styles.title}>{t(`profile.noCardAdded`)}</h3>
        <p className={styles.description}>{t(`profile.addCardPrompt`)}</p>
        <a
          href="#"
          className={cn("default-button sm", styles.button)}
          onClick={addNewCard}
        >
          <span className="icon">
            <PlusIcon />
          </span>
          {t(`profile.addCard`)}
        </a>
      </div>
    </div>
  );
};

export default NoCard;
