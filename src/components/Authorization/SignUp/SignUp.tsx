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

import styles from "./sign-up.module.scss";

import AvatarIcon from "images/icons/avatar.svg";
import GoogleIcon from "images/icons/google.svg";
import TelegramIcon from "images/icons/telegram.svg";
import LineIcon from "images/icons/line.svg";

interface IProps {
  setIsLoginActive: (bool: boolean) => void;
}

const SignUp: FC<IProps> = ({ setIsLoginActive }) => {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(`Введіть електрону пошту`),
    password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  const [isCountryList, setIsCountryList] = useState([]);

  const processingCounrtryList = () => {
    let arr = CountriesList.map(({ value, icon, name, code }) => {
      return {
        value: value,
        label: <Country icon={icon} name={name} code={code} />,
      };
    });
    setIsCountryList(arr);
  };

  useEffect(() => {
    if (!isCountryList.length) {
      processingCounrtryList();
    }
  }, [CountriesList]);

  return (
    isCountryList.length && (
      <div className={styles.container} data-aos="fade" data-aos-delay="400">
        <h2 className={styles.title}>Sign Up</h2>
        <p className={styles.text}>
          You already have an account?{" "}
          <a onClick={() => setIsLoginActive(true)}>Log In</a>
        </p>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={cn(styles.phone, styles.item)}>
                <div className={styles.code}>
                  <Select
                    options={isCountryList}
                    isPhoneList
                    classname="phone"
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
              <p className={styles.info}>
                The specified number will receive an SMS for authorization
              </p>
              <div className={styles.terms}>
                <Field name="terms" type="checkbox" component={Checkbox}>
                  By Sign Up, you agree to our <a>Terms of Use</a>
                </Field>
              </div>
              <div className={styles.button}>
                <button
                  type="submit"
                  className={cn("default-button", styles.button)}
                  aria-label={`Log In`}
                >
                  <span className="icon">
                    <AvatarIcon />
                  </span>
                  Sign Up
                </button>
              </div>
            </form>
          )}
        ></Form>
        <h3 className={styles.subtitle}>Or Log In with</h3>
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
          If you want to receive messages from users (your mail will be visible
          to the sender only if the question is answered)
        </p>
      </div>
    )
  );
};

export default SignUp;
