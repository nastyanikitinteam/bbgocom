import React, { FC } from "react";
import ForgotPasswordForm from "components/Forms/ForgotPasswordForm/ForgotPasswordForm";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./forgot-password.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import ForgotPasswordIcon from "images/icons/forgot-password.svg";

interface IProps {
  handleForgotPasswordModal: () => void;
}

const ForgotPassword: FC<IProps> = ({ handleForgotPasswordModal }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div
        className={cn("back", styles.back)}
        onClick={handleForgotPasswordModal}
      >
        <span className="arrow">
          <ArrowSvg />
        </span>
        {t(`general.back`)}
      </div>
      <div className={styles.icon}>
        <ForgotPasswordIcon />
      </div>
      <h2 className={styles.title}>{t(`general.forgotPassword`)}?</h2>
      <p className={styles.text}>
        {t(`general.associatedWithEmailOrPhoneNumber`)}
      </p>
      <ForgotPasswordForm
        handleForgotPasswordModal={handleForgotPasswordModal}
      />
    </div>
  );
};

export default ForgotPassword;
