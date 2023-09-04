import { FC } from "react";
import Block from "./Block/Block";

import styles from "./info.module.scss";

interface IProps {
  setIsActiveChat: (bool: boolean) => void;
  setIsActiveChatID: (bool: any) => void;
  chatLists: any;
}

const Info: FC<IProps> = ({
  setIsActiveChat,
  setIsActiveChatID,
  chatLists,
}) => {
  const handleActiveChat = (chatId) => {
    setIsActiveChat(true);
    setIsActiveChatID(chatId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {chatLists.map(({ id, name, avatar, title, messages, isNew }) => {
          return (
            <div
              className={styles.item}
              key={id}
              onClick={() => handleActiveChat(id)}
            >
              <Block
                id={id}
                name={name}
                avatar={avatar}
                title={title}
                messages={messages}
                isNew={isNew}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
