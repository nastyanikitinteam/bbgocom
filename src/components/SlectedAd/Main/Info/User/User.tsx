import { FC } from "react";
import styles from "./user.module.scss";

import avatar from "images/main/avatar.png";
import DeliveryIcon from "images/icons/delivery.svg";
import StarIcon from "images/icons/star-sm.svg";

interface IProps {
  isCurrentProduct: any;
}

const User: FC<IProps> = ({ isCurrentProduct }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={avatar.src} alt="" />
      </div>
      <div className={styles.main}>
        <h3 className={styles.name}>Kimhan Nakpradith</h3>
        <p className={styles.start}>From April 2023</p>
        <div className={styles.info}>
          <div className={styles.item}>
            <span className={styles.icon}>
              <StarIcon />
            </span>
            4.5
          </div>
          <div className={styles.item}>
            <span className={styles.icon}>
              <DeliveryIcon />
            </span>
            +10
            <span className={styles.description}>Successful sales</span>
          </div>
        </div>
      </div>
      <div className={styles.status}>
        Online: <span> 2:58 P.M</span>
      </div>
    </div>
  );
};

export default User;
