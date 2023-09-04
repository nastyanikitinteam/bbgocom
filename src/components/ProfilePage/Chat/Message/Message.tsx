import { FC, useState } from "react";
import styles from "./message.module.scss";
import cn from "classnames";

import MessageStatusDone from "images/icons/message-status-done.svg";

interface IProps {
  userIsSender: boolean;
  text: string;
  time: string;
  date: string;
  name: string;
}

const Message: FC<IProps> = ({ userIsSender, text, time, date, name }) => {
  const [isStatus, setIsStatus] = useState("done");

  return (
    <div className={cn(styles.container, { [styles.isUser]: userIsSender })}>
      <div className={styles.block}>{text}</div>

      {userIsSender ? (
        <div className={styles.description}>
          <p className={styles.time}>{time}</p>
          <p className={styles.name}>{userIsSender ? "You" : name}</p>
          <span className={styles.status}>
            {isStatus === "done" && <MessageStatusDone />}
          </span>
        </div>
      ) : (
        <div className={styles.description}>
          <p className={styles.name}>{userIsSender ? "You" : name}</p>
          <p className={styles.time}>{time}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
