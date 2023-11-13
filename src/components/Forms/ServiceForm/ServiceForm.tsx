import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import ServiceFilesInput from "components/FormElements/FilesInput/ServiceFilesInput/ServiceFilesInput";
import styles from "../AdvertiseForm/advertise-form.module.scss";
import Textarea from "components/FormElements/Textarea/Textarea";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import cn from "classnames";
import { useTranslation, Trans } from "react-i18next";
import MailSendIcon from "images/icons/mail-send.svg";

const ServiceForm = () => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const router = useRouter();

  const validationSchema = yup.object().shape({
    theme: yup.string().required(`Enter theme`),
    email: yup.string().email().required(`Enter email`),
    name: yup.string().required(`Enter name`),
    company: yup.string().required(`Enter company`),
    message: yup.string().required(`Enter message`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    setIsOpenModal(true);
    form.restart();
    setSelectedFiles([]);
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
            <div className={styles.items}>
              <div className={styles.item}>
                <Field
                  name="theme"
                  placeholder={t(`help.enterTheme`)}
                  type="text"
                  component={FormInput}
                  extClassName="theme"
                  label={t(`help.themeOfRequest`)}
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
                name="name"
                placeholder={t(`help.enterName`)}
                type="text"
                component={FormInput}
                extClassName="firstName"
                label={t(`help.name`)}
              />
            </div>

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
                name="message"
                placeholder={t(`help.enterMessage`)}
                type="text"
                component={Textarea}
                label={t(`help.message`)}
              />
            </div>
            <div className={styles.item}>
              <Field
                name="files"
                //@ts-ignore
                component={ServiceFilesInput}
                title={t(`help.attachFile`)}
                description={t(`help.uploadScreenshots`)}
                isSmall
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
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

export default ServiceForm;
