import { useMemo, FC } from "react";
import styles from "./card-product.module.scss";

import Slider from "../Slider/Slider";

import cover from "images/main/card-product.png";
import MapIcon from "images/icons/map-icon.svg";
import StarIcon from "images/icons/star.svg";

interface IProps {
  title: string;
  images: any;
  price: string;
  oldPrice?: string;
  location: string;
}

const CardProduct: FC<IProps> = ({
  title,
  images,
  price,
  oldPrice,
  location,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wishlist}>
        <StarIcon />
      </div>
      <a href="#" className={styles.block}>
        <div className={styles.image}>
          <Slider slides={images} isCardProduct />
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
      </a>
    </div>
  );
};

export default CardProduct;
