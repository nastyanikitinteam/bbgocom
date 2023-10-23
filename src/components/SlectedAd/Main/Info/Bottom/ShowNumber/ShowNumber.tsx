import { useState } from "react";
import Link from "next/link";
import styles from "./show-number.module.scss";
import cn from "classnames";
import CallIcon from "images/icons/call.svg";

const ShowNumber = () => {
  const [isShowNumber, setIsShowNumber] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={cn("default-button", styles.button, styles.firstState, {
          [styles.hidden]: isShowNumber,
        })}
        onClick={() => setIsShowNumber(true)}
      >
        <span className="icon">
          <CallIcon />
        </span>
        Show phone
      </div>
      <a
        className={cn("default-button border", styles.button, {
          [styles.hidden]: !isShowNumber,
        })}
        href={`tel:+6612345678`}
      >
        <span className="icon">
          <CallIcon />
        </span>
        +66 1-234-5678
      </a>
    </div>
  );
};

export default ShowNumber;
