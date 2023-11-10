import React, { useCallback, useState, FC } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import { useTranslation } from "react-i18next";
import InputCode from "../../FormElements/InputCode/InputCode";

import cn from "classnames";

import styles from "./confirm-number-form.module.scss";

import AgainIcon from "images/icons/again.svg";
import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  openNextStepSignUp: () => void;
}

const ConfirmNumberForm: FC<IProps> = ({ openNextStepSignUp }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [confirmCode, setConfirmCode] = useState({ code: "" });

  const validationSchema = yup.object().shape({
    code: yup
      .string()
      .required(`Enter code`)
      .test("Code", "Wrong codet", function (value) {
        const codeRgx = /^\d{6}$/;
        let isValidCode = codeRgx.test(value);
        if (!isValidCode) {
          return false;
          // } else if (isValidCode && value !== "222222") {
          //   return false;
        }
        return true;
      }),
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
      initialValues={{
        ...confirmCode,
      }}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.item}>
            <Field
              name="code"
              //@ts-ignore
              component={InputCode}
              length={6}
              loading={loading}
              onComplete={(code) => {
                setLoading(true);
                setTimeout(() => setLoading(false), 10000);
              }}
              setConfirmCode={setConfirmCode}
            />
          </div>
          <p className={styles.info}>
            <span className={styles.icon}>
              <AgainIcon />
            </span>
            {t(`general.sendCodeAgain`)}
          </p>
          <p className={styles.description}>
            {t(`general.notificationsMustBeEnabled`)}
          </p>
          <div className={styles.button}>
            <button
              type="submit"
              className={cn("default-button", styles.button)}
              aria-label={`Continue`}
            >
              <span className="icon">
                <ArrowIcon />
              </span>
              {t(`general.continue`)}
            </button>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default ConfirmNumberForm;
