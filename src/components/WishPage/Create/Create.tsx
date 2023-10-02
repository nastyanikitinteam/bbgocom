import styles from "./create.module.scss";
import cn from "classnames";

import Car from "images/wishlist/auto.jpg";

const Create = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.title}>Create your first wishlist</h3>
        <p className={styles.text}>
          As you search, tap the heart icon to save your favorite places to stay
          or things to do to a wishlist.
        </p>
        <a href="#" className={cn(styles.button, "default-button")}>
          Start search
        </a>
      </div>
      <div className={styles.image}>
        <img src={Car.src} alt="" />
      </div>
    </div>
  );
};

export default Create;
