import { useCallback, useMemo, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import * as yup from "yup";
import { validateForm } from "../../../../../utils/validateForm";
import cn from "classnames";

import styles from "./bottom.module.scss";

import AttachIcon from "images/icons/attach.svg";
import SendIcon from "images/icons/send.svg";

const Bottom = () => {
  const [isMessageText, setIsMessageeText] = useState("");

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(`Введіть електрону пошту`),
    password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  const onChangeMessageInput = (event) => {
    setIsMessageeText(event.target.value);
  };

  const onChangeTag = (val) => {
    setIsMessageeText(val);
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
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.main}>
            <button
              type="submit"
              className={styles.button}
              aria-label={`Attach`}
            >
              <AttachIcon />
            </button>
            <div className={styles.item}>
              {/* <Field
                name="messageText"
                type="text"
                placeholder={"Text"}
                component={FormInput}
                extClassName="message"
              /> */}
              <input
                type="text"
                value={isMessageText}
                className={styles.input}
                placeholder="text"
                onChange={onChangeMessageInput}
              />
            </div>
            <button type="submit" className={styles.button} aria-label={`Send`}>
              <SendIcon />
            </button>
          </div>
          <div className={styles.bottom}>
            <div className={styles.tags}>
              {tagsList.map(({ id, title }) => {
                return (
                  <div
                    className={styles.tag}
                    key={id}
                    onClick={() => onChangeTag(title)}
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
  );
};

export default Bottom;
