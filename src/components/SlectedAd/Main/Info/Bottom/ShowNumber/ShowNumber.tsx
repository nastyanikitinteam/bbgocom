import { useState } from "react";
import styles from "./show-number.module.scss";
import cn from "classnames";
import CallIcon from "images/icons/call.svg";
import { useTranslation } from "react-i18next";

const ShowNumber = () => {
  const [isShowNumber, setIsShowNumber] = useState(false);
  const { t } = useTranslation();
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
        {t(`selectedad.showPhone`)}
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
