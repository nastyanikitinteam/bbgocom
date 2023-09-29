import { FC } from "react";
import Link from "next/link";
import styles from "./successful-modal.module.scss";
import cn from "classnames";

import CongratulationsIcon from "images/icons/congratulations.svg";
import Share from "components/Share/Share";

interface IProps {
  closeModal: () => void;
}

const SuccessfulModal: FC<IProps> = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cancel} onClick={closeModal}>
        Cancel
      </div>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <CongratulationsIcon />
        </div>
        <h3 className={styles.title}>Congratulations!</h3>
        <p className={styles.text}>
          You have successfully placed your add!It will be active until May 12
        </p>
        <Link href="/my-ads" className={cn("default-button sm", styles.button)}>
          My Ads
        </Link>
      </div>
      <div className={styles.line}></div>
      <div className={styles.wrapper}>
        <Share />
      </div>
    </div>
  );
};

export default SuccessfulModal;
