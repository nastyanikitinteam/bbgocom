import { useState, FC } from "react";
import ShowNumber from "../Info/Bottom/ShowNumber/ShowNumber";
import MessagesIcon from "images/icons/messages-icon.svg";
import Message from "./Message/Message";
import ArrowSvg from "images/icons/drop.svg";
import styles from "./fixed-mobile-block.module.scss";
import cn from "classnames";

interface IProps {
  isCurrentProduct: any;
}

const FixedMobileBlock: FC<IProps> = ({ isCurrentProduct }) => {
  const [isShowMessage, setIsShowMessage] = useState(false);

  return (
    <div className={styles.container}>
      {isShowMessage ? (
        <Message
          setIsShowMessage={setIsShowMessage}
          isCurrentProduct={isCurrentProduct}
        />
      ) : (
        <div className={styles.buttons}>
          <div
            className={cn("default-button border", styles.button)}
            onClick={() => setIsShowMessage(true)}
          >
            <span className="icon">
              <MessagesIcon />
            </span>
            Message
          </div>
          <ShowNumber />
        </div>
      )}
    </div>
  );
};

export default FixedMobileBlock;
