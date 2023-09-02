import styles from "./noresult.module.scss";
import cn from "classnames";
import ListIcon from "images/icons/list-icon.svg";

const NoResult = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <ListIcon />
      </div>
      <h3 className={styles.subtitle}>
        Ads rejected after moderation are displayed here
      </h3>
      <p className={styles.text}>
        Depending on why the ad was rejected, you can still edit it and try to
        activate it again.
      </p>
      <a className={cn("default-button sm", styles.button)}>Create an Ad</a>
    </div>
  );
};

export default NoResult;
