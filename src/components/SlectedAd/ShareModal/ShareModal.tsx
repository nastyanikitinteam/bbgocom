import { FC } from "react";
import Link from "next/link";
import Share from "components/Share/Share";

import styles from "./share-modal.module.scss";

import MapIcon from "images/icons/map-icon.svg";

interface IProps {
  closeModal: () => void;
  isCurrentProduct: any;
}

const ShareModal: FC<IProps> = ({ closeModal, isCurrentProduct }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.top}>Add to a wishlist</h3>
      <div className={styles.block}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={isCurrentProduct.images[0].image} alt="" />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{isCurrentProduct.name}</h3>
            <h3 className={styles.price}>{isCurrentProduct.price}</h3>
            <div className={styles.location}>
              <span className={styles.icon}>
                <MapIcon />
              </span>
              {isCurrentProduct.location.name}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottom}>
        <Share />
      </div>
    </div>
  );
};

export default ShareModal;
