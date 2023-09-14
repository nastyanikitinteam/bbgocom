import cn from "classnames";
import styles from "./sign-up-block.module.scss";

import girl from "images/main/subscribe-girl.png";

const SignUpBlock = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Sign up for our <br /> newsletter
      </h3>
      <p className={styles.text}>
        to receive the latest listings and real estate news
      </p>
      <a href="" className={cn("default-button sm white", styles.button)}>
        Sign Up
      </a>
      <div className={styles.image}>
        <img src={girl.src} alt="" />
      </div>
    </div>
  );
};

export default SignUpBlock;
