import { FC } from "react";
import styles from "./range.module.scss";
import cn from "classnames";

interface IProps {
  title: string;
  defaultVelue1: string;
  defaultVelue2: string;
}

const Range: FC<IProps> = ({ title, defaultVelue1, defaultVelue2 }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <input
            type="text"
            className={"default-input sm withoutIcon"}
            placeholder={defaultVelue1}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>
        <span className={styles.separator}>-</span>
        <div className={styles.item}>
          <input
            type="text"
            className={"default-input sm withoutIcon"}
            placeholder={defaultVelue2}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Range;
