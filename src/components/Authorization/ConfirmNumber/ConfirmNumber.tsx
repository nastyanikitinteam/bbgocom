import React, { FC } from "react";
import ConfirmNumberForm from "components/Forms/ConfirmNumberForm/ConfirmNumberForm";
import SocialsConfirm from "../Socials/SocialsConfirm";
import { useTranslation } from "react-i18next";

import styles from "./confirm-number.module.scss";

import LogoSvg from "images/main/logo.svg";

interface IProps {
  openNextStepSignUp: () => void;
  setIsOpenProfileMenu?: () => void;
}

const Login: FC<IProps> = ({ openNextStepSignUp, setIsOpenProfileMenu }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={setIsOpenProfileMenu}>
        <LogoSvg />
      </div>
      <h2 className={styles.title}>{t(`general.confirmNumber`)}</h2>
      <p className={styles.text}>
        {t(`general.enterCodeSentTo`)}
        <b>+66 000 000-00-00</b>
      </p>
      <ConfirmNumberForm openNextStepSignUp={openNextStepSignUp} />
      <h3 className={styles.subtitle}>{t(`general.anotherWayToGetCode`)}</h3>
      <SocialsConfirm />
      <p className={styles.description}>
        {t(`general.receiveCodeWithin1to2Minutes`)}
      </p>
    </div>
  );
};

export default Login;
