import { FC, useCallback, useEffect, useState } from "react";
import styles from "./top.module.scss";
import ShareModal from "../../ShareModal/ShareModal";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import Modal from "components/Modal/Modal";
import cn from "classnames";

import StarIcon from "images/icons/star.svg";
import ShareIcon from "images/icons/share.svg";
import MapIcon from "images/icons/map-icon.svg";
import CalendarIcon from "images/icons/calendar.svg";

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
  return (
    <>
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
          Added:
          <span> 30.05.2023</span>
        </div>
      </div>
    </>
  );
};

export default Top;
