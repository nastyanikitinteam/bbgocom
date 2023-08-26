import React, { useCallback, useState, useEffect, FC } from "react";
import { Form, Field } from "react-final-form";
import Select from "components/Select/Select";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import InputCode from "../../FormElements/InputCode/InputCode";

import cn from "classnames";

import styles from "./confirm-number.module.scss";

import AgainIcon from "images/icons/again.svg";
import ArrowIcon from "images/icons/drop.svg";
import SMSIcon from "images/icons/sms.svg";
import WhatAppIcon from "images/icons/whatsapp.svg";
import CallIcon from "images/icons/call.svg";

interface IProps {
  openNextStepSignUp: () => void;
}

const Login: FC<IProps> = ({ openNextStepSignUp }) => {
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    // email: yup.string().email().required(`Введіть електрону пошту`),
    // password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log("1234");
    console.log(data);
    openNextStepSignUp();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Confirm number</h2>
      <p className={styles.text}>
        Enter the code sent to
        <b>+66 000 000-00-00</b>
      </p>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.item}>
              <InputCode
                length={6}
                label="Code Label"
                loading={loading}
                onComplete={(code) => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 10000);
                }}
              />
            </div>
            <p className={styles.info}>
              <span className={styles.icon}>
                <AgainIcon />
              </span>
              Send code again
            </p>
            <p className={styles.description}>Notifications must be enabled</p>
            <div className={styles.button}>
              <button
                type="submit"
                className={cn("default-button", styles.button)}
                aria-label={`Continue`}
              >
                <span className="icon">
                  <ArrowIcon />
                </span>
                Continue
              </button>
            </div>
          </form>
        )}
      ></Form>
      <h3 className={styles.subtitle}>Another way to get a code</h3>
      <div className={styles.socials}>
        <a href="#" className={cn("default-button border", styles.social)}>
          <span className="icon">
            <SMSIcon />
          </span>
          SMS
        </a>
        <a href="#" className={cn("default-button border", styles.social)}>
          <span className="icon">
            <WhatAppIcon />
          </span>
          WhatsApp
        </a>
        <a href="#" className={cn("default-button border", styles.social)}>
          <span className="icon">
            <CallIcon />
          </span>
          Call
        </a>
      </div>
      <p className={styles.description}>
        Within 1-2 minutes you will receive a message with a code to verify your
        phone number
      </p>
    </div>
  );
};

export default Login;
