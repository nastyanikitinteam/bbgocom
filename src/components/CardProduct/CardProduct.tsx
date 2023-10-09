import { useMemo, FC, ReactNode, useState } from "react";
import styles from "./card-product.module.scss";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import NewWishList from "components/WishPage/NewWishList/NewWishList";
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
  location: string;
  isGreenCard?: boolean;
  children?: ReactNode;
  isHorizontal?: boolean;
  isAds?: boolean;
  isWish?: boolean;
  isMap?: boolean;
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
}) => {
  const [isOpenAddToWish, setIsOpenAddToWish] = useState(false);
  const [isOpenDeleteWish, setIsOpenDeleteWish] = useState(false);

  const handleWishItem = () => {
    if (isWish) {
      setIsOpenDeleteWish(true);
    } else {
      setIsOpenAddToWish(true);
    }
  };

  return (
    <>
      <div
        className={cn(
          styles.container,
          { [styles.green]: isGreenCard },
          { [styles.isHorizontal]: isHorizontal },
          { [styles.isMap]: isMap }
        )}
      >
        {children && <div className={styles.checkbox}>{children}</div>}
        <div
          className={cn(styles.wishlist, { [styles.active]: isWish })}
          onClick={handleWishItem}
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
              {location}
            </div>
            <div className={styles.price}>
              {price}
              {oldPrice && <span className={styles.old}>{oldPrice}</span>}
            </div>
          </div>
        </div>
      </div>

      {isOpenAddToWish && (
        <Modal
          closeModal={() => setIsOpenAddToWish(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          {/* <NewWishList cancel={() => setIsOpenAddToWish(false)} /> */}
          <AddToWishList cancel={() => setIsOpenAddToWish(false)} />
        </Modal>
      )}
    </>
  );
};

export default CardProduct;
