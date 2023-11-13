import { FC } from "react";
import Block from "../Block/Block";
import { useTranslation } from "react-i18next";
import styles from "./list.module.scss";

interface IProps {
  chatLists: any;
  handleActiveChat: (bool: number) => void;
  isActiveChatID: number;
  isNewList?: boolean;
}

const List: FC<IProps> = ({
  chatLists,
  handleActiveChat,
  isActiveChatID,
  isNewList,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        {isNewList ? t(`profile.newMessages`) : t(`profile.allMessages`)}
      </p>
      <div className={styles.list}>
        {chatLists
          .filter(({ isNew }) => (isNewList ? isNew : !isNew))
          .map((item, id) => {
            return (
              <Block
                item={item}
                isActiveChatID={isActiveChatID}
                onClick={() => handleActiveChat(item.id)}
                key={`${item}-${id}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
