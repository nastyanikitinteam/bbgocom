import React, { FC } from "react";
import LoginForm from "components/Forms/LoginForm/LoginForm";
import Socials from "../Socials/Socials";
import cn from "classnames";

import styles from "./login.module.scss";

import LogoSvg from "images/main/logo.svg";
interface IProps {
  changeActiveAuth: () => void;
  handleForgotPasswordModal: () => void;
  setIsNoLogin?: () => void;
}

const Login: FC<IProps> = ({
  changeActiveAuth,
  handleForgotPasswordModal,
  setIsNoLogin,
}) => {
  return (
    <div className={styles.container}>
      <>
        <div className={styles.logo}>
          <LogoSvg />
        </div>
        <h2 className={styles.title}>Log In</h2>
        <p className={styles.text}>
          You don't have an account yet?{" "}
          <span onClick={changeActiveAuth}>Sign Up</span>
        </p>
        <LoginForm
          changeActiveAuth={changeActiveAuth}
          handleForgotPasswordModal={handleForgotPasswordModal}
          setIsNoLogin={setIsNoLogin}
        />
        <h3 className={styles.subtitle}>Or Log In with</h3>
        <Socials />
        <p className={styles.description}>
          If you want to receive messages from users (your mail will be visible
          to the sender only if the question is answered)
        </p>
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
