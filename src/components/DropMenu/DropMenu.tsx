import { FC } from "react";
import styles from "./drop-menu.module.scss";
import DotsIcon from "images/icons/dots.svg";
import { useTranslation } from "react-i18next";
interface IProps {
  list: any;
}

const DropMenu: FC<IProps> = ({ list }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <DotsIcon />
      </div>
      <div className={styles.block}>
        <div className={styles.menu}>
          {list.map(({ id, title, icon, fn }) => {
            return (
              <div className={styles.item} key={id} onClick={fn && fn}>
                <span className={styles.icon}>{icon}</span>
                {t(title)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DropMenu;
