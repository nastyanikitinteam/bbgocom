import styles from "./account.module.scss";
import avatar from "images/main/avatar.png";

const Account = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={avatar.src} alt="" />
      </div>
    </div>
  );
};

export default Account;
