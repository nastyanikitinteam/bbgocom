import React, { FC } from "react";
import ConfirmNumberForm from "components/Forms/ConfirmNumberForm/ConfirmNumberForm";
import SocialsConfirm from "../Socials/SocialsConfirm";

import styles from "./confirm-number.module.scss";

import LogoSvg from "images/main/logo.svg";

interface IProps {
  openNextStepSignUp: () => void;
}

const Login: FC<IProps> = ({ openNextStepSignUp }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
      <h2 className={styles.title}>Confirm number</h2>
      <p className={styles.text}>
        Enter the code sent to
        <b>+66 000 000-00-00</b>
      </p>
      <ConfirmNumberForm openNextStepSignUp={openNextStepSignUp} />
      <h3 className={styles.subtitle}>Another way to get a code</h3>
      <SocialsConfirm />
      <p className={styles.description}>
        Within 1-2 minutes you will receive a message with a code to verify your
        phone number
      </p>
    </div>
  );
};

export default Login;
