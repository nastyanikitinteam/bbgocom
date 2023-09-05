import { FC } from "react";
import cn from "classnames";
import styles from "./main.module.scss";
import Message from "../Message/Message";
import Ad from "./Ad/Ad";

import BlockIcon from "images/icons/block.svg";
import DeleteIcon from "images/icons/delete.svg";

interface IProps {
  isActiveChatID: number;
  chatLists: any;
}
const Main: FC<IProps> = ({ isActiveChatID, chatLists }) => {
  return chatLists
    .filter(({ id }) => id === isActiveChatID)
    .map(({ id, name, avatar, timeOnline, title, cover, messages, isNew }) => {
      return (
        <div className={styles.container} key={id}>
          <div className={styles.top}>
            <div className={styles.avatar}>
              <img src={avatar} alt="" />
            </div>
            <div className={styles.info}>
              <p className={styles.name}> {name}</p>
              <p className={styles.onlineStatus}>
                Online: <span className={styles.onlineTime}>{timeOnline}</span>
              </p>
            </div>
            <div className={styles.buttons}>
              <div
                className={cn("default-button  border onlyIcon", styles.button)}
              >
                <BlockIcon />
              </div>
              <div
                className={cn("default-button  border onlyIcon", styles.button)}
              >
                <DeleteIcon />
              </div>
            </div>
          </div>

          <div className={styles.main}>
            <Ad cover={cover} title={title} />
            <div className={styles.list}>
              {messages.map((item, id) => {
                return (
                  <Message
                    key={id}
                    userIsSender={item.userIsSender}
                    text={item.text}
                    time={item.time}
                    date={item.date}
                    name={name}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.bottom}></div>
        </div>
      );
    });
};

export default Main;
