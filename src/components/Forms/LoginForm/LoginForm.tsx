import React, { useCallback, useState, useEffect, FC } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import PasswordInput from "components/FormElements/FormInput/PasswordInput";
import NumberInput from "components/FormElements/FormInput/NumberInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import PhoneCodeSelect from "components/FormElements/Select/PhoneCodeSelect";
import cn from "classnames";
import styles from "./login-form.module.scss";
import LoginIcon from "images/icons/login.svg";

import { useTranslation } from "react-i18next";
interface IProps {
  changeActiveAuth: () => void;
  handleForgotPasswordModal: () => void;
  setIsNoLogin?: () => void;
}

const LoginForm: FC<IProps> = ({ handleForgotPasswordModal }) => {
  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .required(`Enter phone number`)
      .test("Number", "Wrong phone number format", function (value) {
        const numberPhone = /^\d{10}$/;
        let isValidPhone = numberPhone.test(value);
        if (!isValidPhone) {
          return false;
        }
        return true;
      }),
    password: yup.string().required(`Enter password`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={cn(styles.phone, styles.item)}>
            <div className={styles.code}>
              <Field
                name="phoneCode"
                //@ts-ignore
                component={PhoneCodeSelect}
              />
            </div>
            <div className={styles.number}>
              <Field
                name="phone"
                type="text"
                placeholder={t(`general.phone`)}
                component={NumberInput}
                extClassName="noIcon"
              />
            </div>
          </div>
          <div className={styles.item}>
            <Field
              name="password"
              placeholder={t(`general.password`)}
              component={PasswordInput}
            />
          </div>
          <p
            className={cn(styles.forgot, "link")}
            onClick={handleForgotPasswordModal}
          >
            {t(`general.forgotPassword`)}
          </p>
          <div className={styles.terms}>
            <Field name="terms" type="checkbox" component={Checkbox}>
              {t(`general.loginAgree`)} <a>{t(`general.withTermsOfUse`)}</a>
            </Field>
          </div>
          <div className={styles.button}>
            <button
              type="submit"
              className={cn("default-button", styles.button)}
              aria-label={`Log In`}
            >
              <span className="icon">
                <LoginIcon />
              </span>
              {t(`general.logIn`)}
            </button>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default LoginForm;
