import { FC, useEffect, useState } from "react";
import Modal from "components/Modal/Modal";
import DeleteChat from "../../Main/DeleteChat/DeleteChat";
import styles from "./block.module.scss";
import cn from "classnames";

import DelIcon from "images/icons/delete.svg";

interface IProps {
  item?: any;
  isActiveChatID: number;
  onClick: () => void;
}

const Block: FC<IProps> = ({ item, isActiveChatID, onClick }) => {
  const [startX, setStartX] = useState(null);
  const [leftPosition, setLeftPosition] = useState(0);
  const [isOpenDel, setIsOpenDel] = useState(false);

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

  useEffect(() => {
    setLeftPosition(0);
  }, [isOpenDel]);

  return (
    <>
      <div
        className={cn(
          styles.container,
          {
            [styles.active]: item.id === isActiveChatID,
          },
          { [styles.isNew]: item.isNew }
        )}
        // onMouseMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.del}
          style={{ right: `${-leftPosition}px` }}
          onClick={() => setIsOpenDel(true)}
        >
          <DelIcon />
        </div>
        <div
          className={styles.block}
          style={{ left: `${leftPosition}px` }}
          onClick={onClick}
        >
          <div className={styles.avatar}>
            <img src={item.avatar} alt="" />
          </div>
          <div className={styles.main}>
            <div className={styles.top}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.time}>{item.messages[0].time}</p>
            </div>
            <div className={styles.info}>
              <h4 className={styles.title}>{item.title}</h4>
              {item.isNew && <span className={styles.new}>{item.isNew}</span>}
            </div>
          </div>
        </div>
      </div>
      {isOpenDel && (
        <Modal
          closeModal={() => setIsOpenDel(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <DeleteChat cancel={() => setIsOpenDel(false)} item={item} />
        </Modal>
      )}
    </>
  );
};

export default Block;
