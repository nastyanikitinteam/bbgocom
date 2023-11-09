import React, { FC } from "react";
import SignUpForm from "components/Forms/SignUpForm/SignUpForm";
import Socials from "../Socials/Socials";
import styles from "./sign-up.module.scss";

import LogoSvg from "images/main/logo.svg";

interface IProps {
  changeActiveAuth: () => void;
  openNextStepSignUp: () => void;
}

const SignUp: FC<IProps> = ({ changeActiveAuth, openNextStepSignUp }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
      <h2 className={styles.title}>Sign Up</h2>
      <p className={styles.text}>
        You already have an account?{" "}
        <span onClick={changeActiveAuth}>Log In</span>
      </p>
      <SignUpForm
        changeActiveAuth={changeActiveAuth}
        openNextStepSignUp={openNextStepSignUp}
      />
      <h3 className={styles.subtitle}>Or Log In with</h3>
      <Socials />
      <p className={styles.description}>
        If you want to receive messages from users (your mail will be visible to
        the sender only if the question is answered)
      </p>
    </div>
  );
};

export default SignUp;
