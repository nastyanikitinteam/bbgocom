import { FC, useState } from "react";
import styles from "./message.module.scss";
import cn from "classnames";

import MessageStatusDone from "images/icons/message-status-done.svg";
import MessageStatusError from "images/icons/message-status-error.svg";
import MessageStatusSend from "images/icons/message-status-send.svg";

interface IProps {
  userIsSender: boolean;
  text?: string;
  time: string;
  date: string;
  name: string;
  images?: any;
}

const Message: FC<IProps> = ({
  userIsSender,
  text,
  time,
  date,
  name,
  images,
}) => {
  const [isStatus, setIsStatus] = useState("done");

  return (
    <div
      className={cn(
        styles.container,
        { [styles.isUser]: userIsSender },
        { [styles.error]: isStatus === "error" }
      )}
    >
      <div className={styles.block}>
        {images && (
          <div
            className={cn(styles.images, {
              [styles.two]: images.length === 2,
              [styles.three]: images.length === 3,
              [styles.even]: images.length % 2 === 0,
            })}
          >
            {images.map((item) => {
              return (
                <div className={styles.image}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
        )}

        {text && <p>{text}</p>}
      </div>

      {userIsSender ? (
        <div className={styles.description}>
          <p className={styles.time}>{time}</p>
          <p className={styles.name}>{userIsSender ? "You" : name}</p>
          <span className={styles.status}>
            {isStatus === "done" && <MessageStatusDone />}
            {isStatus === "error" && <MessageStatusError />}
            {isStatus === "load" && <MessageStatusSend />}
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
