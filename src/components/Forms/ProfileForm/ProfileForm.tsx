import React, { useCallback } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import { useTranslation } from "react-i18next";
import FormInput from "components/FormElements/FormInput/FormInput";
import PasswordInput from "components/FormElements/FormInput/PasswordInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

import styles from "./profile-form.module.scss";

const ProfileForm = () => {
  const { t } = useTranslation();
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
                placeholder={t(`general.firstName`)}
                type="text"
                component={FormInput}
                extClassName="firstName"
              />
            </div>
            <div className={styles.item}>
              <Field
                name="lastName"
                placeholder={t(`general.lastName`)}
                type="text"
                component={FormInput}
                extClassName="lastName"
              />
            </div>
          </div>
          <div className={styles.item}>
            <Field
              name="email"
              placeholder={t(`general.email`)}
              type="email"
              component={FormInput}
              extClassName="email"
            />
          </div>
          <div className={styles.item}>
            <Field
              name="password"
              placeholder={t(`general.password`)}
              component={PasswordInput}
            />
          </div>
          <div className={styles.terms}>
            <Field name="terms" type="checkbox" component={Checkbox}>
              {t(`general.receiveBBGONewsAndPromotions`)}
            </Field>
          </div>
          <div className={styles.button}>
            <button
              type="submit"
              className={cn("default-button", styles.button)}
              aria-label={`Crate an account`}
            >
              {t(`general.createAccount`)}
            </button>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default ProfileForm;
