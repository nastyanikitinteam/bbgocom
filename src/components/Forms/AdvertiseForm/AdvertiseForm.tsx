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

const AdvertiseForm = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();

  const validationSchema = yup.object().shape({
    name: yup.string().required(`Enter name`),
    number: yup.string().required(`Enter phone number`),
    company: yup.string().required(`Enter company`),
    email: yup.string().email().required(`Enter email`),
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
            <div className={cn(styles.phone, styles.item)}>
              <div className={styles.code}>
                <p className={styles.label}>Your phone</p>
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
                  placeholder={"Phone"}
                  component={NumberInput}
                  extClassName="noIcon"
                />
              </div>
            </div>
            <div className={styles.items}>
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
                name="message"
                placeholder={"Enter Message"}
                type="text"
                component={Textarea}
                label="Message"
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

export default AdvertiseForm;
