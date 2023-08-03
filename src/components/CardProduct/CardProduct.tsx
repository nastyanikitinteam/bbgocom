import { useMemo } from "react";
import styles from "./card-product.module.scss";

import Slider from "../Slider/Slider";

import cover from "images/main/card-product.png";
import MapIcon from "images/icons/map-icon.svg";
import StarIcon from "images/icons/star.svg";

const CardProduct = () => {
  const imagesList = useMemo(
    () => [
      {
        id: 0,
        image: cover.src,
      },
      {
        id: 1,
        image: cover.src,
      },
      {
        id: 2,
        image: cover.src,
      },
      {
        id: 3,
        image: cover.src,
      },
    ],
    []
  );

  return (
    <a href="#" className={styles.container}>
      <div className={styles.image}>
        <div className={styles.wishlist}>
          <StarIcon />
        </div>
        <Slider slides={imagesList} isCardProduct />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>
          MacBook Air with M2 chip, 8-Core GPU 8GB Unified Memory, 256GB SSD
          Storage
        </h3>
        <div className={styles.location}>
          <span className={styles.icon}>
            <MapIcon />
          </span>
          Phuket, Thailand
        </div>
        <div className={styles.price}>
          $1,250.00
          <span className={styles.old}>$1,500.00</span>
        </div>
      </div>
    </a>
  );
};

export default CardProduct;
