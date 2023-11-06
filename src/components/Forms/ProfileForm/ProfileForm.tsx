import React, { useCallback } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import PasswordInput from "components/FormElements/FormInput/PasswordInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

import styles from "./profile-form.module.scss";

const ProfileForm = () => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required(`Enter first name`),
    lastName: yup.string().required(`Enter  last name`),
    email: yup
      .string()
      .email()
      .required(`Enter email`)
      .test("Email", "Wrong email format", function (value) {
        const emailRgx = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}\b/;
        let isValidEmail = emailRgx.test(value);
        if (!isValidEmail) {
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
              placeholder={"Password"}
              component={PasswordInput}
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
  );
};

export default ProfileForm;
