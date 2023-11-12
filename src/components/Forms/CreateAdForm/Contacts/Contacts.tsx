import { FC } from "react";
import Link from "next/link";
import { Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import NumberInput from "components/FormElements/FormInput/NumberInput";
import PhoneCodeSelect from "components/FormElements/Select/PhoneCodeSelect";
import styles from "./contacts.module.scss";
import cn from "classnames";
import { useTranslation, Trans } from "react-i18next";
import { useFormState } from "react-final-form";
import PostIcon from "images/icons/post.svg";

interface IProps {
  disabled?: boolean;
  isCreate?: any;
}

const Contacts: FC<IProps> = ({ disabled, isCreate }) => {
  const { values } = useFormState();
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>7</span>
        {t(`createad.contacts`)}
      </h3>
      {!disabled && (
        <>
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.label}> {t(`createad.phone`)}</p>
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
                    placeholder={t(`createad.phone`)}
                    component={NumberInput}
                    extClassName="noIcon"
                  />
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <p className={styles.label}>{t(`createad.email`)}</p>
              <div className={styles.input}>
                <Field
                  name="email"
                  type="email"
                  placeholder={t(`createad.enterEmail`)}
                  component={FormInput}
                  extClassName="email"
                />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>{t(`createad.receiveMessagesDisclaimer`)}</p>
            <p>
              <Trans
                i18nKey={"createad.postAdAgreement"}
                components={[<Link href="/" />, <Link href="/trn" />]}
              />
            </p>
          </div>
          <div className={styles.buttons}>
            <div className={cn("default-button border", styles.button)}>
              {t(`general.cancel`)}
            </div>
            <button
              type="submit"
              className={cn("default-button", styles.button)}
              aria-label={`Post Ad`}
            >
              <span className="icon">
                <PostIcon />
              </span>
              {isCreate ? `${t(`createad.edit`)}` : `${t(`createad.postAd`)}`}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Contacts;
