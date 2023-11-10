import React, { useCallback, FC } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import cn from "classnames";
import styles from "./forgot-password-form.module.scss";
import { useTranslation } from "react-i18next";

interface IProps {
  handleForgotPasswordModal: () => void;
}

const ForgotPasswordForm: FC<IProps> = ({ handleForgotPasswordModal }) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    contact: yup
      .string()
      .required(`${t(`general.enterPhoneOrEmail`)}`)
      .test("Number/Email", "Wrong phone/email format", function (value) {
        const numberPhone = /^\+\d{10,13}$/;
        const emailRgx = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}\b/;
        let isValidEmail = emailRgx.test(value);
        let isValidPhone = numberPhone.test(value);
        if (!isValidEmail && !isValidPhone) {
          return false;
        }
        return true;
      }),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    handleForgotPasswordModal();
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.item}>
            <Field
              name="contact"
              type="text"
              placeholder={t(`general.enterPhoneOrEmail`)}
              component={FormInput}
              extClassName="firstName"
            />
          </div>
          <div className={styles.button}>
            <button
              type="submit"
              className={cn("default-button", styles.button)}
              aria-label={`Change password`}
            >
              {t(`general.changePassword`)}
            </button>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default ForgotPasswordForm;
