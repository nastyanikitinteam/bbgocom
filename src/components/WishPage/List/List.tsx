import { FC } from "react";
import Block from "./Block/Block";
import styles from "./list.module.scss";

interface IProps {
  list: any;
}

const List: FC<IProps> = ({ list }) => {
  return (
    <div className={styles.container}>
      {list.map((item, id) => {
        return <Block key={id} item={item} />;
      })}
    </div>
  );
};

export default List;
