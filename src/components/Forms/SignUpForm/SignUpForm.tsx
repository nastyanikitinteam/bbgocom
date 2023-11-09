import React, { useCallback, useState, useEffect, FC } from "react";
import Link from "next/link";
import { Form, Field } from "react-final-form";
import Select from "components/Select/Select";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import PhoneCodeSelect from "components/FormElements/Select/PhoneCodeSelect";
import NumberInput from "components/FormElements/FormInput/NumberInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

import styles from "./sign-up-form.module.scss";

import AvatarIcon from "images/icons/avatar.svg";

interface IProps {
  changeActiveAuth: () => void;
  openNextStepSignUp: () => void;
}

const SignUpForm: FC<IProps> = ({ changeActiveAuth, openNextStepSignUp }) => {
  const validationSchema = yup.object().shape({
    // phone: yup
    //   .string()
    //   .required(`Enter phone number`)
    //   .test("Number", "Wrong phone number format", function (value) {
    //     const numberPhone = /^\d{10}$/;
    //     let isValidPhone = numberPhone.test(value);
    //     if (!isValidPhone) {
    //       return false;
    //     }
    //     return true;
    //   }),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    openNextStepSignUp();
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
                placeholder={"Phone"}
                component={NumberInput}
                extClassName="noIcon"
              />
            </div>
          </div>
          <p className={styles.info}>
            The specified number will receive an SMS for authorization
          </p>
          <div className={styles.terms}>
            <Field name="terms" type="checkbox" component={Checkbox}>
              By Sign Up, you agree to our <Link href="/">Terms of Use</Link>
            </Field>
          </div>
          <div className={styles.button}>
            <button
              type="submit"
              className={cn("default-button", styles.button)}
              aria-label={`Sign up`}
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
  );
};

export default SignUpForm;
