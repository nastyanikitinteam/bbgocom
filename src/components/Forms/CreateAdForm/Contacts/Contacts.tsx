import { useCallback, useState, FC, useEffect } from "react";
import { Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import SelectContainer from "components/FormElements/Select/Select";
import NumberInput from "components/FormElements/FormInput/NumberInput";
import { CountriesList } from "components/Authorization/config";
import PhoneCodeSelect from "components/FormElements/Select/PhoneCodeSelect";
import Country from "components/Authorization/Country/Country";
import styles from "./contacts.module.scss";
import cn from "classnames";

import { useFormState } from "react-final-form";

import PostIcon from "images/icons/post.svg";

interface IProps {
  disabled?: boolean;
  isCreate?: any;
}

const Contacts: FC<IProps> = ({ disabled, isCreate }) => {
  const { values } = useFormState();

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>7</span>Contacts
      </h3>
      {!disabled && (
        <>
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.label}>Phone</p>
              <div className={cn(styles.input, styles.phone)}>
                <div className={styles.code}>
                  <Field
                    name="phoneCode"
                    //@ts-ignore
                    component={PhoneCodeSelect}
                    chooseOption={values.phoneCode}
                  />
                </div>
                <div className={styles.number}>
                  <Field
                    name="phoneNumber"
                    type="text"
                    placeholder={"Phone"}
                    component={NumberInput}
                    extClassName="noIcon"
                  />
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <p className={styles.label}>Email</p>
              <div className={styles.input}>
                <Field
                  name="email"
                  type="email"
                  placeholder={"Enter email"}
                  component={FormInput}
                  extClassName="email"
                />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              If you want to receive messages from users ( your mail will be
              visible to the sender only if the question is answered)
            </p>
            {!isCreate && (
              <p>
                By clicking «Post Ad» you accept the{" "}
                <a href="#">License Agreement</a> and agree to the{" "}
                <a href="#">Privacy Policy</a>
              </p>
            )}
          </div>
          <div className={styles.buttons}>
            <div className={cn("default-button border", styles.button)}>
              Cancel
            </div>
            <button
              type="submit"
              className={cn("default-button", styles.button)}
              aria-label={`Post Ad`}
            >
              <span className="icon">
                <PostIcon />
              </span>
              {isCreate ? "Edit" : "Post Ad"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Contacts;
