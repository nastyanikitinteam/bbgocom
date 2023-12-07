import React, { useCallback, FC } from "react";
import Link from "next/link";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import PhoneCodeSelect from "components/FormElements/Select/PhoneCodeSelect";
import NumberInput from "components/FormElements/FormInput/NumberInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./sign-up-form.module.scss";

import AvatarIcon from "images/icons/avatar.svg";

interface IProps {
  changeActiveAuth: () => void;
  openNextStepSignUp: () => void;
}

const SignUpForm: FC<IProps> = ({ changeActiveAuth, openNextStepSignUp }) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    // phone: yup
    //   .string()
    //   .required(t(`errors.enterPhoneNumber`))
    //  .test("Number", t(`errors.wrongPhoneNumberFormat`), function (value) {
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
                // placeholder={t(`general.phone`)}
                placeholder="00 000-00-00"
                component={NumberInput}
                extClassName="noIcon"
              />
            </div>
          </div>
          <p className={styles.info}>
            {t(`general.specifiedNumberWillReceiveSMS`)}
          </p>
          <div className={styles.terms}>
            <Field name="terms" type="checkbox" component={Checkbox}>
              {t(`general.bySignUpAgreement`)}{" "}
              <Link href="/"> {t(`general.withTermsOfUse`)}</Link>
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
              {t(`general.signUp`)}
            </button>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default SignUpForm;
