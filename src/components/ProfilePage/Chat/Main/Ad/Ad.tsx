import { FC } from "react";
import cn from "classnames";

import styles from "./ad.module.scss";

interface IProps {
  cover: string;
  title: string;
}

const Ad: FC<IProps> = ({ cover, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={cover} alt="" />
      </div>
      <h3 className={styles.adTitle}>{title}</h3>
      <div className={cn("default-button sm", styles.button)}>Go to Ad</div>
    </div>
  );
};

export default Ad;
