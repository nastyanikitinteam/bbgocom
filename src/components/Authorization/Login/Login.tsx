import React, { FC } from "react";
import LoginForm from "components/Forms/LoginForm/LoginForm";
import Socials from "../Socials/Socials";
import cn from "classnames";
import styles from "./login.module.scss";
import LogoSvg from "images/main/logo.svg";
import { useTranslation } from "react-i18next";

interface IProps {
  changeActiveAuth: () => void;
  handleForgotPasswordModal: () => void;
  setIsNoLogin?: () => void;
  setIsOpenProfileMenu: () => void;
}

const Login: FC<IProps> = ({
  changeActiveAuth,
  handleForgotPasswordModal,
  setIsNoLogin,
  setIsOpenProfileMenu,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <>
        <div className={styles.logo} onClick={setIsOpenProfileMenu}>
          <LogoSvg />
        </div>
        <h2 className={styles.title}>{t(`general.logIn`)}</h2>
        <p className={styles.text}>
          {t(`general.donthaveAccount`)}{" "}
          <span onClick={changeActiveAuth}> {t(`general.signUp`)}</span>
        </p>
        <LoginForm
          changeActiveAuth={changeActiveAuth}
          handleForgotPasswordModal={handleForgotPasswordModal}
          setIsNoLogin={setIsNoLogin}
        />
        <h3 className={styles.subtitle}>{t(`general.orLogin`)}</h3>
        <Socials />
        <p className={styles.description}>{t(`general.loginDescription`)}</p>
      </>
      {setIsNoLogin && (
        <div
          className={cn("default-button", styles.openProfile)}
          onClick={setIsNoLogin}
        >
          Open profile menu
        </div>
      )}
    </div>
  );
};

export default Login;
