import { FC } from "react";
import User from "./User/User";
import Message from "./Message/Message";
import Bottom from "./Bottom/Bottom";
import styles from "./info.module.scss";

interface IProps {
  isCurrentProduct: any;
}

const Info: FC<IProps> = ({ isCurrentProduct }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.price}>{isCurrentProduct.price}</h2>
      <User isCurrentProduct={isCurrentProduct} />
      <Message isCurrentProduct={isCurrentProduct} />
      <Bottom />
    </div>
  );
};

export default Info;
