import AccountBlock from "./AccountBlock/AccountBlock";
import SubscribeBlock from "./SubscribeBlock/SubscribeBlock";
import styles from "./info-block.module.scss";
import { useState } from "react";
import cn from "classnames";

const InfoBlock = () => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  return (
    <div
      className={cn(styles.container, { [styles.subscribed]: isSubscribed })}
    >
      <AccountBlock />
      {!isSubscribed && <SubscribeBlock />}
    </div>
  );
};

export default InfoBlock;
