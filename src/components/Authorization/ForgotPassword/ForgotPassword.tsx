import React, { FC } from "react";
import ForgotPasswordForm from "components/Forms/ForgotPasswordForm/ForgotPasswordForm";
import cn from "classnames";

import styles from "./forgot-password.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import ForgotPasswordIcon from "images/icons/forgot-password.svg";

interface IProps {
  handleForgotPasswordModal: () => void;
}

const ForgotPassword: FC<IProps> = ({ handleForgotPasswordModal }) => {
  return (
    <div className={styles.container}>
      <div
        className={cn("back", styles.back)}
        onClick={handleForgotPasswordModal}
      >
        <span className="arrow">
          <ArrowSvg />
        </span>
        Back
      </div>
      <div className={styles.icon}>
        <ForgotPasswordIcon />
      </div>
      <h2 className={styles.title}>Forgot password?</h2>
      <p className={styles.text}>
        What email or phone number is associated with your BBGO profile?
      </p>
      <ForgotPasswordForm
        handleForgotPasswordModal={handleForgotPasswordModal}
      />
    </div>
  );
};

export default ForgotPassword;
