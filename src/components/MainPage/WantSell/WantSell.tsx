import cn from "classnames";
import styles from "./want-sell.module.scss";

import man from "images/main-page/man.png";

const WantSell = () => {
  return (
    <section className={styles.container}>
      <div className="wrapper">
        <div className={styles.block}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              Want to sell <span>on bbgo.com?</span>
            </h2>
            <p className={styles.text}>
              Check out BBGO offers for business. Raise your applications to the
              top and earn more.
            </p>
            <a href="" className={cn("default-button white", styles.button)}>
              Start Selling
            </a>
          </div>
          <div className={styles.image}>
            <img src={man.src} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WantSell;
