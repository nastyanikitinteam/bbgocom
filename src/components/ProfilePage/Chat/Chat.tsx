import { useState } from "react";

import Main from "./Main/Main";
import Info from "./Info/Info";
import MessagesIcon from "images/icons/messages-big.svg";
import styles from "./chat.module.scss";

import { chatLists } from "./config";

const Chat = () => {
  const [isActiveChat, setIsActiveChat] = useState(false);
  const [isActiveChatID, setIsActiveChatID] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {isActiveChat ? (
          <Main isActiveChatID={isActiveChatID} chatLists={chatLists} />
        ) : (
          <div className={styles.empty}>
            <div className={styles.image}>
              <MessagesIcon />
            </div>
            <h3 className={styles.subtitle}>Select a message to read it</h3>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <Info
          setIsActiveChat={setIsActiveChat}
          setIsActiveChatID={setIsActiveChatID}
          chatLists={chatLists}
          isActiveChatID={isActiveChatID}
        />
      </div>
    </div>
  );
};

export default Chat;
