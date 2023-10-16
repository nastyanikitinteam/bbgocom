import { useState, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import styles from "./no-card.module.scss";

import WalletIcon from "images/icons/wallet-big.svg";
import PlusIcon from "images/icons/plus.svg";

interface IProps {
  setIsWallet: (bool: boolean) => void;
  setIsActiveNewCard: (bool: boolean) => void;
}

const NoCard: FC<IProps> = ({ setIsWallet, setIsActiveNewCard }) => {
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
        <h3 className={styles.title}>You don't have a card added yet</h3>
        <p className={styles.description}>
          Add a card to be able to use paid services BBGO
        </p>
        <a
          href="#"
          className={cn("default-button sm", styles.button)}
          onClick={addNewCard}
        >
          <span className="icon">
            <PlusIcon />
          </span>
          Add Card
        </a>
      </div>
    </div>
  );
};

export default NoCard;
