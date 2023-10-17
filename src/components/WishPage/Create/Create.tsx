import { FC } from "react";
import styles from "./create.module.scss";
import cn from "classnames";

import Car from "images/wishlist/auto.jpg";

interface IProps {
  setIsWishList: () => void;
}

const Create: FC<IProps> = ({ setIsWishList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.title}>Create your first wishlist</h3>
        <p className={styles.text}>
          As you search, tap the heart icon to save your favorite places to stay
          or things to do to a wishlist.
        </p>
        <div
          onClick={setIsWishList}
          className={cn(styles.button, "default-button")}
        >
          Start search
        </div>
      </div>
      <div className={styles.image}>
        <img src={Car.src} alt="" />
      </div>
    </div>
  );
};

export default Create;
