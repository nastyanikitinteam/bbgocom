import React, { FC } from "react";
import SignUpForm from "components/Forms/SignUpForm/SignUpForm";
import Socials from "../Socials/Socials";
import styles from "./sign-up.module.scss";
import LogoSvg from "images/main/logo.svg";

import { useTranslation } from "react-i18next";

interface IProps {
  changeActiveAuth: () => void;
  openNextStepSignUp: () => void;
}

const SignUp: FC<IProps> = ({ changeActiveAuth, openNextStepSignUp }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
      <h2 className={styles.title}>{t(`general.signUp`)}</h2>
      <p className={styles.text}>
        {t(`general.haveAccount`)}{" "}
        <span onClick={changeActiveAuth}>{t(`general.logIn`)}</span>
      </p>
      <SignUpForm
        changeActiveAuth={changeActiveAuth}
        openNextStepSignUp={openNextStepSignUp}
      />
      <h3 className={styles.subtitle}>{t(`general.orLogin`)}</h3>
      <Socials />
      <p className={styles.description}>{t(`general.loginDescription`)}</p>
    </div>
  );
};

export default SignUp;
