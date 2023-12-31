import { FC } from "react";
import Link from "next/link";
import styles from "./successful-create.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import CongratulationsIcon from "images/icons/congratulations.svg";
import Share from "components/Share/Share";
import { createad } from "src/translates/en/createad";

interface IProps {
  closeModal: () => void;
  isCurrentAd?: boolean;
}

const SuccessfulCreate: FC<IProps> = ({ closeModal, isCurrentAd }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.cancel} onClick={closeModal}>
        {t(`general.cancel`)}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <CongratulationsIcon />
        </div>
        <h3 className={styles.title}>{t("createad.congratulations")}!</h3>
        <p className={styles.text}>
          {isCurrentAd
            ? t("createad.successfullyChangedAd")
            : t("createad.successMessage")}
        </p>
        <Link href="/my-ads" className={cn("default-button sm", styles.button)}>
          {t(`profile.myAdsSecond`)}
        </Link>
      </div>
      <div className={styles.line}></div>
      <div className={styles.wrapper}>
        <Share />
      </div>
    </div>
  );
};

export default SuccessfulCreate;
