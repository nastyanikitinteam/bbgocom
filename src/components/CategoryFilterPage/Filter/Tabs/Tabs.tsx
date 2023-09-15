import { useState, FC } from "react";
import styles from "./tabs.module.scss";
import cn from "classnames";

interface IProps {
  tabsList: any;
}

const Tabs: FC<IProps> = ({ tabsList }) => {
  const [isActive, setIsActive] = useState(tabsList[0].name);

  return (
    <div className={styles.container}>
      {tabsList.map(({ id, name }) => {
        return (
          <div
            className={cn(styles.block, {
              [styles.active]: name === isActive,
            })}
            key={id}
            onClick={() => setIsActive(name)}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
