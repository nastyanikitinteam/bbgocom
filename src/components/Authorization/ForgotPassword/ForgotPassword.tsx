import React, { useCallback, useState, useEffect, FC } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import cn from "classnames";

import styles from "./forgot-password.module.scss";

import ForgotPasswordIcon from "images/icons/forgot-password.svg";
import ArrowSvg from "images/icons/drop.svg";
import LogoSvg from "images/main/logo.svg";

interface IProps {
  handleForgotPasswordModal: () => void;
}

const ForgotPassword: FC<IProps> = ({ handleForgotPasswordModal }) => {
  const validationSchema = yup.object().shape({
    // email: yup.string().email().required(`Введіть електрону пошту`),
    // password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

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

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.icon}>
              <ForgotPasswordIcon />
            </div>
            <h2 className={styles.title}>Forgot password?</h2>
            <p className={styles.text}>
              What email or phone number is associated with your BBGO profile?
            </p>
            <div className={styles.item}>
              <Field
                name="emailorphone"
                type="text"
                placeholder={"Enter phone or email"}
                component={FormInput}
                extClassName="firstName"
              />
            </div>

            <div className={styles.button}>
              <button
                type="submit"
                className={cn("default-button", styles.button)}
                aria-label={`   Change password`}
              >
                Change password
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default ForgotPassword;
