import AccountBlock from "./AccountBlock/AccountBlock";
import SubscribeBlock from "./SubscribeBlock/SubscribeBlock";
import styles from "./info-block.module.scss";

const InfoBlock = () => {
  return (
    <div className={styles.container}>
      <AccountBlock />
      <SubscribeBlock />
    </div>
  );
};

export default InfoBlock;
