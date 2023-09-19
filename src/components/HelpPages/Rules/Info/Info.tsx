import styles from "./info.module.scss";
import BookIcon from "images/icons/book-icon.svg";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <BookIcon />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Welcome to BBGO! 👋</h3>
        <p className={styles.text}>
          We're glad you're here. Settle in and have a good time, but follow our
          set of rules.
        </p>
      </div>
    </div>
  );
};

export default Info;
