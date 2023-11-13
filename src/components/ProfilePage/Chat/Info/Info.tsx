import { FC } from "react";
import List from "./List/List";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./info.module.scss";

interface IProps {
  setIsActiveChat: (bool: boolean) => void;
  setIsActiveChatID: (bool: any) => void;
  chatLists: any;
  isActiveChatID: number;
  setIsActiveCategory: (bool: string) => void;
  isActiveCategory: string;
}

const Info: FC<IProps> = ({
  setIsActiveChat,
  setIsActiveChatID,
  chatLists,
  isActiveChatID,
  setIsActiveCategory,
  isActiveCategory,
}) => {
  const { t } = useTranslation();

  const handleActiveChat = (chatId) => {
    setIsActiveChat(true);
    setIsActiveChatID(chatId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.categories}>
          <div
            className={cn(styles.category, {
              [styles.active]: isActiveCategory === "Buy",
            })}
            onClick={() => setIsActiveCategory("Buy")}
          >
            {t(`profile.buy`)}
          </div>
          <div
            className={cn(styles.category, {
              [styles.active]: isActiveCategory === "Sell",
            })}
            onClick={() => setIsActiveCategory("Sell")}
          >
            {t(`profile.sell`)}
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <List
          chatLists={chatLists}
          handleActiveChat={handleActiveChat}
          isActiveChatID={isActiveChatID}
          isNewList
        />
        <List
          chatLists={chatLists}
          handleActiveChat={handleActiveChat}
          isActiveChatID={isActiveChatID}
        />
      </div>
    </div>
  );
};

export default Info;
