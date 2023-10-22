import { useCallback } from "react";
import { Form, Field } from "react-final-form";
import Textarea from "components/FormElements/Textarea/Textarea";
import Select from "components/Select/Select";
import * as yup from "yup";
import { validateForm } from "../../../../../utils/validateForm";
import styles from "./message.module.scss";

import SendIcon from "images/icons/send.svg";

const Message = () => {
  const validationSchema = yup.object().shape({
    // email: yup.string().email().required(`Введіть електрону пошту`),
    // password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

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
                name="Name"
                placeholder={"Hello!"}
                type="text"
                component={Textarea}
                rows={4}
              />
              <button type="submit" className={styles.send} aria-label={`Send`}>
                <SendIcon />
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default Message;
