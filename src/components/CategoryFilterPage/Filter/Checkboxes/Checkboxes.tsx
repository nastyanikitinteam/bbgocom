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
        {list.length ? (
          list.map((item, id) => {
            return (
              // TODO return, todo id + item, key
              <div className={styles.item} key={id}>
                <Checkbox name={item} extClassName="filter" key={id}>
                  {item}
                </Checkbox>
              </div>
            );
          })
        ) : (
          <p className={styles.noresult}>No result</p>
        )}
      </div>
    </div>
  );
};

export default Checkboxes;
