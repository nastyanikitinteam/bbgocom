import { useState, FC } from "react";
import styles from "./tabs.module.scss";
import cn from "classnames";

interface IProps {
  tabsList: any;
}

const Tabs: FC<IProps> = ({ tabsList }) => {
  const [isActive, setIsActive] = useState(tabsList[0]);

  return (
    <div className={styles.container}>
      {tabsList.map((item, id) => {
        return (
          <div
            className={cn(styles.block, {
              [styles.active]: item === isActive,
            })}
            key={id}
            onClick={() => setIsActive(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
