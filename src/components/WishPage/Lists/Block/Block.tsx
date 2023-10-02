import { FC, useMemo, useState } from "react";
import styles from "./block.module.scss";
import DropMenu from "components/DropMenu/DropMenu";
import Modal from "components/Modal/Modal";
import NewWishList from "components/WishPage/NewWishList/NewWishList";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import DelIcon from "images/icons/delete.svg";
import EditIcon from "images/icons/edit.svg";

interface IProps {
  item: any;
}

const Block: FC<IProps> = ({ item }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const emptyBlocks = Array(3).fill(null);

  const dropMenuList = useMemo(
    () => [
      {
        id: 0,
        title: "Edit",
        icon: <EditIcon />,
        fn: () => setIsOpenEdit(true),
      },
      {
        id: 1,
        title: "Delete",
        icon: <DelIcon />,
        fn: () => setIsOpenAdd(true),
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.images}>
        {emptyBlocks.map((_, index) => {
          if (item.items.length > index) {
            return (
              <div key={index} className={styles.image}>
                {item.items[index].images && item.items[index].images[0] && (
                  <img src={item.items[index].images[0].url} alt="" />
                )}
              </div>
            );
          } else {
            return <div key={index} className={styles.image}></div>;
          }
        })}
      </div>
      <div className={styles.bottom}>
        <div className={styles.info}>
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.ads}>{item.items.length} ads</p>
          <p className={styles.date}>Updated 1 year ago</p>
        </div>
        <div className={styles.more}>
          <DropMenu list={dropMenuList} />
        </div>
      </div>
      {isOpenEdit && (
        <Modal
          closeModal={() => setIsOpenEdit(false)}
          type="successful"
          otherCloseIcon
        >
          <NewWishList cancel={() => setIsOpenEdit(false)} item={item} />
        </Modal>
      )}
      {isOpenAdd && (
        <Modal
          closeModal={() => setIsOpenAdd(false)}
          type="successful"
          otherCloseIcon
        >
          <AddToWishList cancel={() => setIsOpenAdd(false)} />
        </Modal>
      )}
    </div>
  );
};

export default Block;
