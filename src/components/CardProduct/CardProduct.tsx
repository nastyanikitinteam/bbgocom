import { useMemo, FC, ReactNode } from "react";
import styles from "./card-product.module.scss";
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
}) => {
  return (
    <div
      className={cn(
        styles.container,
        { [styles.green]: isGreenCard },
        { [styles.isHorizontal]: isHorizontal }
      )}
    >
      {children && <div className={styles.checkbox}>{children}</div>}
      <div className={styles.wishlist}>
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
  );
};

export default CardProduct;
