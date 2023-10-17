import React, { useCallback, useState, useEffect, FC } from "react";
import { Form, Field } from "react-final-form";
import Select from "components/Select/Select";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";
import { CountriesList } from "../config";
import Country from "../Country/Country";

import styles from "./login.module.scss";

import LoginIcon from "images/icons/login.svg";
import GoogleIcon from "images/icons/google.svg";
import TelegramIcon from "images/icons/telegram.svg";
import LineIcon from "images/icons/line.svg";
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
  const validationSchema = yup.object().shape({
    // email: yup.string().email().required(`Введіть електрону пошту`),
    // password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  const [isCountryList, setIsCountryList] = useState([]);

  const processingCounrtryList = useCallback(() => {
    // TODO: Move to utils
    const countries = CountriesList.map(({ value, icon, name, code }) => ({
      value: `${value} ${code}`,
      label: <Country icon={icon} name={name} code={code} />,
    }));
    setIsCountryList(countries);
  }, [CountriesList]);

  useEffect(() => {
    if (!isCountryList.length) {
      processingCounrtryList();
    }
  }, [CountriesList]);

  return (
    <div className={styles.container}>
      {isCountryList.length && (
        <>
          <div className={styles.logo}>
            <LogoSvg />
          </div>
          <h2 className={styles.title}>Log In</h2>
          <p className={styles.text}>
            You don't have an account yet?{" "}
            <a onClick={changeActiveAuth}>Sign Up</a>
          </p>
          {/* TODO: TO ANOTHER COMPONENT */}
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={cn(styles.phone, styles.item)}>
                  <div className={styles.code}>
                    <Select
                      options={isCountryList}
                      isSearch
                      classname="phone"
                      title="Choose Country"
                    />
                  </div>
                  <div className={styles.number}>
                    <Field
                      name="phone"
                      type="text"
                      placeholder={"Phone"}
                      component={FormInput}
                      number
                      extClassName="noIcon"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <Field
                    name="password"
                    type="password"
                    placeholder={"Password"}
                    component={FormInput}
                  />
                </div>
                <p
                  className={cn(styles.forgot, "link")}
                  onClick={handleForgotPasswordModal}
                >
                  Forgot password
                </p>
                <div className={styles.terms}>
                  <Field name="terms" type="checkbox" component={Checkbox}>
                    By Log In, you agree to our <a>Terms of Use</a>
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
                    Log In
                  </button>
                </div>
              </form>
            )}
          ></Form>
          <h3 className={styles.subtitle}>Or Log In with</h3>
          {/* TODO: to another component */}
          <div className={styles.socials}>
            <a href="#" className={cn("default-button border", styles.social)}>
              <span className="icon">
                <GoogleIcon />
              </span>
              Google
            </a>
            <a href="#" className={cn("default-button border", styles.social)}>
              <span className="icon">
                <TelegramIcon />
              </span>
              Telegram
            </a>
            <a href="#" className={cn("default-button border", styles.social)}>
              <span className="icon">
                <LineIcon />
              </span>
              Line
            </a>
          </div>
          <p className={styles.description}>
            If you want to receive messages from users (your mail will be
            visible to the sender only if the question is answered)
          </p>
        </>
      )}
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
