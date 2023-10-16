import { useCallback, FC } from "react";
import { Form } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../../utils/validateForm";
import styles from "./delete-chat.module.scss";
import cn from "classnames";
import DeleteIcon from "images/icons/delete.svg";

interface IProps {
  cancel: () => void;
  item?: any;
}

const DeleteChat: FC<IProps> = ({ cancel, item }) => {
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    cancel();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <DeleteIcon />
      </div>
      <h3 className={styles.title}>Delete Chat?</h3>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.description}>
              Do you want to delete the chat with {item.name}?
            </p>
            <div className={styles.buttons}>
              <div
                className={cn("default-button border sm", styles.button)}
                onClick={cancel}
              >
                Cancel
              </div>
              <button
                type="submit"
                className={cn("default-button sm red", styles.button)}
                aria-label={"Delete"}
              >
                Delete
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default DeleteChat;
