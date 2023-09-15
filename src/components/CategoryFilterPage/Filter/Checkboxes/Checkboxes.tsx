import { useState, FC } from "react";
import styles from "./checkboxes.module.scss";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

interface IProps {
  title: string;
  list: any;
  isColumn?: boolean;
}

const Checkboxes: FC<IProps> = ({ title, list, isColumn }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={cn(styles.list, { [styles.column]: isColumn })}>
        {list.map(({ id, name }) => {
          return (
            <div className={styles.item} key={id}>
              <Checkbox name={name} extClassName="filter" key={id}>
                {name}
              </Checkbox>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkboxes;
