import { FC } from "react";
import styles from "./create.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import Car from "images/wishlist/auto.jpg";

interface IProps {
  setIsWishList: () => void;
}

const Create: FC<IProps> = ({ setIsWishList }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.title}>{t(`wishlist.createFirstWishlist`)}</h3>
        <p className={styles.text}>{t(`wishlist.searchInstructions`)}</p>
        <div
          onClick={setIsWishList}
          className={cn(styles.button, "default-button")}
        >
          {t(`wishlist.startSearch`)}
        </div>
      </div>
      <div className={styles.image}>
        <img src={Car.src} alt="" />
      </div>
    </div>
  );
};

export default Create;
