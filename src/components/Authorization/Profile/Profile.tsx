import React, { useCallback, useState, useEffect, FC } from "react";
import { Form, Field } from "react-final-form";
import Select from "components/Select/Select";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

import styles from "./profile.module.scss";

import LoginIcon from "images/icons/login.svg";
import GoogleIcon from "images/icons/google.svg";
import TelegramIcon from "images/icons/telegram.svg";
import LineIcon from "images/icons/line.svg";

// interface IProps {
//   changeActiveAuth: () => void;
// }

const Login = () => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required(`No correct first name`),
    lastName: yup.string().required(`No correct last name`),
    email: yup.string().email().required(`No correct email`),
    password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Profile</h2>
      <p className={styles.text}>Crate an account</p>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.items}>
              <div className={styles.item}>
                <Field
                  name="firstName"
                  placeholder={"First name"}
                  type="text"
                  component={FormInput}
                  extClassName="firstName"
                />
              </div>
              <div className={styles.item}>
                <Field
                  name="lastName"
                  placeholder={"Last name"}
                  type="text"
                  component={FormInput}
                  extClassName="lastName"
                />
              </div>
            </div>
            <div className={styles.item}>
              <Field
                name="email"
                placeholder={"Email"}
                type="email"
                component={FormInput}
                extClassName="email"
              />
            </div>
            <div className={styles.item}>
              <Field
                name="password"
                type="password"
                placeholder={"Password"}
                component={FormInput}
              />
            </div>
            <div className={styles.terms}>
              <Field name="terms" type="checkbox" component={Checkbox}>
                Receive information about BBGO news and promotions
              </Field>
            </div>
            <div className={styles.button}>
              <button
                type="submit"
                className={cn("default-button", styles.button)}
                aria-label={`Crate an account`}
              >
                Crate an account
              </button>
            </div>
          </form>
        )}
      ></Form>
      <p className={styles.description}>
        BBGO will send you exclusive offers, ideas, promotional emails and push
        notifications. You can opt out in your account settings or in a
        marketing notice.
      </p>
    </div>
  );
};

export default Login;
