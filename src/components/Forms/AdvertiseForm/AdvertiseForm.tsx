import { useMemo, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import NumberInput from "components/FormElements/FormInput/NumberInput";
import styles from "./advertise-form.module.scss";
import Textarea from "components/FormElements/Textarea/Textarea";
import PhoneCodeSelect from "components/FormElements/Select/PhoneCodeSelect";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import cn from "classnames";

import MailSendIcon from "images/icons/mail-send.svg";
import { useTranslation, Trans } from "react-i18next";

const AdvertiseForm = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    name: yup.string().required(t(`errors.enterName`)),
    number: yup.string().required(t(`errors.enterPhoneNumber`)),
    company: yup.string().required(t(`errors.enterCompany`)),
    email: yup
      .string()
      .email(t(`errors.wrongEmailFormat`))
      .test("contains-dot", t(`errors.wrongEmailFormat`), (value) => {
        const [localPart, domainPart] = value.split("@");
        return domainPart.includes(".");
      })
      .required(t(`errors.enterEmail`)),
    message: yup.string().required(t(`errors.enterMessage`)),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    setIsOpenModal(true);
    form.restart();
  }, []);

  const back = () => {
    router.back();
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.item}>
              <Field
                name="name"
                placeholder={t(`help.enterName`)}
                type="text"
                component={FormInput}
                extClassName="firstName"
                label={t(`help.name`)}
              />
            </div>
            <div className={cn(styles.phone, styles.item)}>
              <div className={styles.code}>
                <p className={styles.label}>{t(`help.yourPhone`)}</p>
                <Field
                  name="phoneCode"
                  //@ts-ignore
                  component={PhoneCodeSelect}
                />
              </div>
              <div className={styles.number}>
                <Field
                  name="number"
                  type="text"
                  // placeholder={t(`general.phone`)}
                  placeholder="00 000-00-00"
                  component={NumberInput}
                  extClassName="noIcon"
                />
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <Field
                  name="company"
                  placeholder={t(`help.enterName`)}
                  type="text"
                  component={FormInput}
                  extClassName="company"
                  label={t(`help.companyName`)}
                />
              </div>
              <div className={styles.item}>
                <Field
                  name="email"
                  placeholder={t(`help.enterEmail`)}
                  type="email"
                  component={FormInput}
                  extClassName="email"
                  label={t(`help.emailForRequest`)}
                />
              </div>
            </div>
            <div className={styles.item}>
              <Field
                name="message"
                placeholder={t(`help.enterMessage`)}
                type="text"
                component={Textarea}
                label={t(`help.message`)}
              />
            </div>
            <p className={styles.description}>
              <Trans
                i18nKey={"createad.postAdAgreement"}
                components={[<Link href="/" />, <Link href="/trn" />]}
              />
            </p>
            <div className={styles.buttons}>
              <div className={styles.button}>
                <div
                  onClick={back}
                  className={cn("default-button  border", styles.button)}
                >
                  {t(`general.cancel`)}
                </div>
              </div>
              <div className={styles.button}>
                <button
                  type="submit"
                  className={cn("default-button", styles.button)}
                  aria-label={`Send`}
                >
                  {t(`general.send`)}
                </button>
              </div>
            </div>
          </form>
        )}
      ></Form>
      {isOpenModal && (
        <Modal
          closeModal={() => setIsOpenModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={() => setIsOpenModal(false)}
            title={t(`profile.successful`)}
            description={t(`help.requestSentSuccess`)}
            event={t(`help.goToHome`)}
            icon={<MailSendIcon />}
            isGreen
            goHomePage
          />
        </Modal>
      )}
    </>
  );
};

export default AdvertiseForm;
