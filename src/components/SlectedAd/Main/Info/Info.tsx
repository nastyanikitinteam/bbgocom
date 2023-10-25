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
      <div className={styles.price}>
        <h2 className={styles.mainPrice}>{isCurrentProduct.price}</h2>
        {isCurrentProduct.oldPrice && (
          <h3 className={styles.oldPrice}>{isCurrentProduct.oldPrice}</h3>
        )}
      </div>
      <User isCurrentProduct={isCurrentProduct} />
      <Message
        isCurrentProduct={isCurrentProduct}
        hasOldPrice={isCurrentProduct.oldPrice && true}
      />
      <Bottom />
    </div>
  );
};

export default Info;
