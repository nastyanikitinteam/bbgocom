import { FC } from "react";
import styles from "./drop-menu.module.scss";
import DotsIcon from "images/icons/dots.svg";

interface IProps {
  list: any;
}

const DropMenu: FC<IProps> = ({ list }) => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <DotsIcon />
      </div>
      <div className={styles.menu}>
        {list.map(({ id, title, icon, fn }) => {
          return (
            <div className={styles.item} key={id}>
              <span className={styles.icon}>{icon}</span>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DropMenu;
