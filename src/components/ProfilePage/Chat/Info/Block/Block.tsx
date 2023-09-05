import { FC } from "react";
import styles from "./block.module.scss";
import cn from "classnames";

interface IProps {
  id: number;
  name: string;
  avatar: string;
  title: string;
  messages: any;
  isNew?: number;
  isActiveChatID: number;
}

const Block: FC<IProps> = ({
  id,
  name,
  avatar,
  title,
  messages,
  isNew,
  isActiveChatID,
}) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.active]: id === isActiveChatID,
      })}
    >
      <div className={styles.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.main}>
        <div className={styles.top}>
          <p className={styles.name}>{name}</p>
          <p className={styles.time}>{messages[0].time}</p>
        </div>
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          {isNew && <span className={styles.new}>{isNew}</span>}
        </div>
      </div>
    </div>
  );
};

export default Block;
