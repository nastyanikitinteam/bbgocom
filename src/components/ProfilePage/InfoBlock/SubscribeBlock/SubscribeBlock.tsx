import cn from "classnames";
import styles from "./subscribe-block.module.scss";

import girl from "images/main/subscribe-girl.png";

const SubscribeBlock = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Subscribe to <br /> notifications
      </h3>
      <p className={styles.text}>If you want to receive messages from users</p>
      <a href="" className={cn("default-button sm white", styles.button)}>
        Subscribe
      </a>
      <div className={styles.image}>
        <img src={girl.src} alt="" />
      </div>
    </div>
  );
};

export default SubscribeBlock;
