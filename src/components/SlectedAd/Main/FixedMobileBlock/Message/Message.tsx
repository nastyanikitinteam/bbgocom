import { useState, FC, useCallback, useMemo } from "react";
import { Form, Field } from "react-final-form";
import Textarea from "components/FormElements/Textarea/Textarea";
import MessagesIcon from "images/icons/messages-icon.svg";
import Modal from "components/Modal/Modal";
import SuccessMessage from "components/Modal/SuccessMessage/SuccessMessage";
import * as yup from "yup";
import { validateForm } from "../../../../../utils/validateForm";
import styles from "./message.module.scss";
import cn from "classnames";

import { messageTags } from "config/messageTags";
import { useTranslation } from "react-i18next";
import ArrowSvg from "images/icons/drop.svg";
import SendIcon from "images/icons/send.svg";

interface IProps {
  setIsShowMessage: (bool: boolean) => void;
  isCurrentProduct: any;
}

const Message: FC<IProps> = ({ setIsShowMessage, isCurrentProduct }) => {
  const { t } = useTranslation();
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);

  const validationSchema = yup.object().shape({
    // message: yup
    // .string()
    // .min(5, "Text must be at least 5 characters long")
    // .required("This field is required"),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    setIsOpenModalSuccess(true);
    form.restart();
  }, []);

  const back = useCallback(() => {
    setIsOpenModalSuccess(false);
    setIsShowMessage(false);
  }, []);

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        mutators={{
          changeValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value);
          },
        }}
        render={({ handleSubmit, form }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.main}>
              <span className={cn(styles.back, styles.icon)} onClick={back}>
                <ArrowSvg />
              </span>
              <span className={styles.icon}>
                <MessagesIcon />
              </span>
              <Field
                name="message"
                placeholder={t(`selectedad.hello`)}
                component={Textarea}
                rows={1}
                extClassName="mobile"
              />
              <button type="submit" className={styles.send} aria-label={`Send`}>
                <SendIcon />
              </button>
            </div>
            <div className={styles.bottom}>
              <div className={styles.tags}>
                {messageTags.map(({ id, title }) => {
                  return (
                    <div
                      className={cn(styles.tag, {
                        [styles.active]:
                          form.getState().values.message === title,
                      })}
                      key={id}
                      onClick={() => {
                        form.mutators.changeValue("message", title);
                      }}
                    >
                      {title}
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        )}
      ></Form>
      {isOpenModalSuccess && (
        <Modal
          closeModal={back}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <SuccessMessage
            closeModal={back}
            isCurrentProduct={isCurrentProduct}
          />
        </Modal>
      )}
    </>
  );
};

export default Message;
