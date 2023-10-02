import { FC, useMemo } from "react";
import styles from "./block.module.scss";
import DropMenu from "components/DropMenu/DropMenu";
import DelIcon from "images/icons/delete.svg";
import EditIcon from "images/icons/edit.svg";

interface IProps {
  item: any;
}

const Block: FC<IProps> = ({ item }) => {
  const emptyBlocks = Array(3).fill(null);

  const dropMenuList = useMemo(
    () => [
      {
        id: 0,
        title: "Edit",
        icon: <EditIcon />,
        fn: "",
      },
      {
        id: 1,
        title: "Delete",
        icon: <DelIcon />,
        fn: "",
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
                1
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
    </div>
  );
};

export default Block;
