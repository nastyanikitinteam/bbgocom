import { FC } from "react";
import cn from "classnames";
import styles from "./delete-card.module.scss";

import WalletIcon from "images/icons/wallet-big.svg";

interface IProps {
  closeModal: (bool: boolean) => void;
}

const DeleteCard: FC<IProps> = ({ closeModal }) => {
  const delCard = () => {
    closeModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.icon}>
          <WalletIcon />
        </div>
        <h3 className={styles.title}>Delete Card</h3>
        <p className={styles.text}>
          The card will be removed from your wallet and personal account
        </p>
        <div className={styles.buttons}>
          <a
            href="#"
            className={cn("default-button border sm", styles.button)}
            onClick={() => closeModal(false)}
          >
            Cancel
          </a>
          <button
            type="submit"
            className={cn("default-button red sm", styles.button)}
            aria-label={`Delete card`}
            onClick={delCard}
          >
            Delete card
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCard;
