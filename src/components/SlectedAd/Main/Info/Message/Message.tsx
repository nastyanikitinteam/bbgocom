import { useCallback, useMemo, useState, FC } from "react";
import { Form, Field } from "react-final-form";
import Textarea from "components/FormElements/Textarea/Textarea";
import Modal from "components/Modal/Modal";
import SuccessModal from "./SuccessModal/SuccessModal";
import * as yup from "yup";
import { validateForm } from "../../../../../utils/validateForm";
import styles from "./message.module.scss";
import cn from "classnames";

import SendIcon from "images/icons/send.svg";

interface IProps {
  isCurrentProduct: any;
}

const Message: FC<IProps> = ({ isCurrentProduct }) => {
  const [isMessageText, setIsMessageText] = useState("");
  const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false);

  const validationSchema = yup.object().shape({
    // message: yup
    // .string()
    // .min(5, "Text must be at least 5 characters long")
    // .required("This field is required"),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(isMessageText);
    setIsOpenModalSuccess(true);
  }, []);

  const onChangeInputVal = (val) => {
    setIsMessageText(val);
  };

  const tagsList = useMemo(
    () => [
      {
        id: 0,
        title: "Still selling?",
      },
      {
        id: 1,
        title: "There is a bargain?",
      },
      {
        id: 2,
        title: "When can you watch?",
      },
      {
        id: 3,
        title: "Still selling?",
      },
      {
        id: 4,
        title: "There is a bargain?",
      },
      {
        id: 5,
        title: "When can you watch?",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.label}>Your Message</h3>
            <div className={styles.item}>
              <Field
                name="message"
                placeholder={"Hello!"}
                component={Textarea}
                rows={4}
                text={isMessageText}
                extClassName="selected"
                onChange={onChangeInputVal}
              />
              <button type="submit" className={styles.send} aria-label={`Send`}>
                <SendIcon />
              </button>
            </div>
            <div className={styles.bottom}>
              <div className={styles.tags}>
                {tagsList.map(({ id, title }) => {
                  return (
                    <div
                      className={cn(styles.tag, {
                        [styles.active]: isMessageText === title,
                      })}
                      key={id}
                      onClick={() => onChangeInputVal(title)}
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
          <SuccessModal
            closeModal={() => setIsOpenModalSuccess(false)}
            isCurrentProduct={isCurrentProduct}
          />
        </Modal>
      )}
    </div>
  );
};

export default Message;
