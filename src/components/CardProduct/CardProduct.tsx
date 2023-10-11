import { useMemo, FC, ReactNode, useState, useCallback } from "react";
import styles from "./card-product.module.scss";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import Delete from "components/WishPage/Delete/Delete";
import Modal from "components/Modal/Modal";
import cn from "classnames";

import Slider from "components/Slider/Slider";

import cover from "images/main/card-product.png";
import MapIcon from "images/icons/map-icon.svg";
import StarIcon from "images/icons/star.svg";

interface IProps {
  title: string;
  images: any;
  price: string;
  oldPrice?: string;
  location?: any;
  isGreenCard?: boolean;
  children?: ReactNode;
  isHorizontal?: boolean;
  isAds?: boolean;
  isWish?: boolean;
  isMap?: boolean;
  isOpenMap?: boolean;
}

const CardProduct: FC<IProps> = ({
  title,
  images,
  price,
  oldPrice,
  location,
  isGreenCard,
  children,
  isHorizontal,
  isAds,
  isWish,
  isMap,
  isOpenMap,
}) => {
  const [isOpenWishModal, setIsOpenWishModal] = useState(false);

  const handleWihlist = useCallback(() => {
    !isWish ? setIsOpenWishModal(true) : console.log("delete");
  }, []);

  return (
    <>
      <div
        className={cn(
          styles.container,
          { [styles.green]: isGreenCard },
          { [styles.isHorizontal]: isHorizontal },
          { [styles.isMap]: isMap },
          { [styles.isOpenMap]: isOpenMap }
        )}
      >
        {children && <div className={styles.checkbox}>{children}</div>}
        <div
          className={cn(styles.wishlist, { [styles.active]: isWish })}
          onClick={handleWihlist}
        >
          <StarIcon />
        </div>
        <div className={styles.block}>
          <div className={styles.image}>
            <div className={styles.photos}>
              <Slider slides={images} isCardProduct />
            </div>
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.location}>
              <span className={styles.icon}>
                <MapIcon />
              </span>
              {location.name}
            </div>
            <div className={styles.price}>
              {price}
              {oldPrice && <span className={styles.old}>{oldPrice}</span>}
            </div>
          </div>
        </div>
      </div>

      {isOpenWishModal && (
        <Modal
          closeModal={() => setIsOpenWishModal(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          {!isWish && (
            <AddToWishList cancel={() => setIsOpenWishModal(false)} />
          )}
        </Modal>
      )}
    </>
  );
};

export default CardProduct;
