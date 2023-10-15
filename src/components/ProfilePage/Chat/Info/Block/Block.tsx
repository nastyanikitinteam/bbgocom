import { FC, useState } from "react";
import styles from "./block.module.scss";
import cn from "classnames";

import DelIcon from "images/icons/delete.svg";

interface IProps {
  id: number;
  name: string;
  avatar: string;
  title: string;
  messages: any;
  isNew?: number;
  isActiveChatID: number;
  onClick: () => void;
}

const Block: FC<IProps> = ({
  id,
  name,
  avatar,
  title,
  messages,
  isNew,
  isActiveChatID,
  onClick,
}) => {
  const [leftPosition, setLeftPosition] = useState(0);

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - e.touches[0].clientX;

    if (deltaX < 0) {
      setLeftPosition(-60);
    } else {
      setLeftPosition(0);
    }
  };
  return (
    <div
      className={cn(
        styles.container,
        {
          [styles.active]: id === isActiveChatID,
        },
        { [styles.isNew]: isNew }
      )}
      onClick={onClick}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.del}>
        <DelIcon />
      </div>
      <div className={styles.block} style={{ left: `${leftPosition}px` }}>
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
    </div>
  );
};

export default Block;
