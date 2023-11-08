import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import FilesUpload from "components/FileUpload/FilesUpload";
import styles from "../AdvertiseForm/advertise-form.module.scss";
import Textarea from "components/FormElements/Textarea/Textarea";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import cn from "classnames";

import MailSendIcon from "images/icons/mail-send.svg";

const ServiceForm = () => {
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
                  placeholder={"Enter theme"}
                  type="text"
                  component={FormInput}
                  extClassName="theme"
                  label="Theme of Request"
                />
              </div>
              <div className={styles.item}>
                <Field
                  name="email"
                  placeholder={"Enter email"}
                  type="email"
                  component={FormInput}
                  extClassName="email"
                  label="Email for Request"
                />
              </div>
            </div>
            <div className={styles.item}>
              <Field
                name="name"
                placeholder={"Enter name"}
                type="text"
                component={FormInput}
                extClassName="firstName"
                label="Name"
              />
            </div>

            <div className={styles.item}>
              <Field
                name="company"
                placeholder={"Enter name"}
                type="text"
                component={FormInput}
                extClassName="company"
                label="Company’s name"
              />
            </div>

            <div className={styles.item}>
              <Field
                name="message"
                placeholder={"Enter Message"}
                type="text"
                component={Textarea}
                label="Message"
              />
            </div>
            <div className={styles.item}>
              <FilesUpload
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
                title="<span>Attach file</span> or drop files here"
                description="You can upload screenshots. File requirements: pdf, png, jpeg, heic and no more than 15 mb."
                isSmall
              />
            </div>
            <p className={styles.description}>
              By clicking «Post Ad» you accept the{" "}
              <Link href="/">License Agreement</Link> and agree to the{" "}
              <Link href="/">Privacy Policy</Link>
            </p>
            <div className={styles.buttons}>
              <div className={styles.button}>
                <div
                  onClick={back}
                  className={cn("default-button  border", styles.button)}
                >
                  Cancel
                </div>
              </div>
              <div className={styles.button}>
                <button
                  type="submit"
                  className={cn("default-button", styles.button)}
                  aria-label={`Send`}
                >
                  Send
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
            title="Successful!"
            description="Your request has been successfully sent"
            event="Go to Home"
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
