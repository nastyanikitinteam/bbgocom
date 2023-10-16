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
  const [startX, setStartX] = useState(null);
  const [leftPosition, setLeftPosition] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === null) {
      return; // Ігнорувати перший рух пальцем
    }

    const touchX = e.touches[0].clientX;
    const deltaX = touchX - startX;

    if (deltaX < 0) {
      setLeftPosition(-60);
    } else {
      setLeftPosition(0);
    }

    setStartX(touchX);
  };

  const handleTouchEnd = () => {
    setStartX(null);
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
      // onMouseMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.del} style={{ right: `${-leftPosition}px` }}>
        <DelIcon />
      </div>
      <div
        className={styles.block}
        style={{ left: `${leftPosition}px` }}
        onClick={onClick}
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
    </div>
  );
};

export default Block;
