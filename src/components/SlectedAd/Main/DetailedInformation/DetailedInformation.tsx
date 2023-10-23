import { FC } from "react";
import styles from "./detailed-information.module.scss";

import { infoList } from "./config";

interface IProps {
  isCurrentProduct?: any;
}

const DetailedInformation: FC<IProps> = ({ isCurrentProduct }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Detailed information</h3>
      <div className={styles.items}>
        {infoList.map(({ id, icon, title }) => {
          return (
            <div key={id} className={styles.item}>
              <span className={styles.icon}>{icon}</span>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailedInformation;
