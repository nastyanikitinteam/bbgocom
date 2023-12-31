import { useCallback, useMemo, useState, FC } from "react";
import { Form, Field, useFormState } from "react-final-form";
import Textarea from "components/FormElements/Textarea/Textarea";
import Modal from "components/Modal/Modal";
import SuccessMessage from "components/Modal/SuccessMessage/SuccessMessage";
import * as yup from "yup";
import { validateForm } from "../../../../../utils/validateForm";
import styles from "./message.module.scss";
import cn from "classnames";
import { messageTags } from "config/messageTags";
import { useTranslation } from "react-i18next";
import SendIcon from "images/icons/send.svg";

interface IProps {
  isCurrentProduct: any;
  hasOldPrice?: boolean;
}

const Message: FC<IProps> = ({ isCurrentProduct, hasOldPrice }) => {
  // const formState = useFormState();
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

  return (
    <div className={styles.container}>
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
            <h3 className={styles.label}>{t(`selectedad.yourMessage`)}</h3>
            <div className={cn(styles.item, { [styles.sm]: hasOldPrice })}>
              <Field
                name="message"
                placeholder={t(`selectedad.hello`)}
                component={Textarea}
                rows={4}
                extClassName="selected"
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
          closeModal={() => setIsOpenModalSuccess(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <SuccessMessage
            closeModal={() => setIsOpenModalSuccess(false)}
            isCurrentProduct={isCurrentProduct}
          />
        </Modal>
      )}
    </div>
  );
};

export default Message;
