import { FC, useCallback, useState } from "react";
import styles from "./card.module.scss";
import Modal from "components/Modal/Modal";
import DeleteCard from "../DeleteCard/DeleteCard";
import cn from "classnames";

import DelIcon from "images/icons/delete.svg";

interface IProps {
  item: any;
}

const Card: FC<IProps> = ({ item }) => {
  const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  return (
    <>
      <div
        className={cn(styles.container, { [styles.active]: item.isMainCard })}
      >
        <div className={styles.top}>
          <p className={styles.type}>{item.typeOfCard}</p>
          <span className={styles.icon}>{item.icon}</span>
        </div>
        <div className={styles.number}>{item.number}</div>
        <div className={styles.bottom}>
          <div className={styles.position}>
            <label className={styles.radio}>
              <input
                type="radio"
                name="positionCard"
                checked={item.isMainCard}
              />
              <div className={styles.radioBlock}></div>
              <p className={styles.text}>
                {item.isMainCard ? "Main card" : "To make the main one"}
              </p>
            </label>
          </div>
          <span
            className={styles.delete}
            onClick={() => setIsActiveDeleteModal(true)}
          >
            <DelIcon />
          </span>
        </div>
      </div>
      {isActiveDeleteModal && (
        <Modal
          closeModal={setIsActiveDeleteModal}
          type="deleteCard"
          otherCloseIcon
        >
          <DeleteCard closeModal={setIsActiveDeleteModal} />
        </Modal>
      )}
    </>
  );
};

export default Card;
