import { useCallback, FC } from "react";
import { Form } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../../utils/validateForm";
import styles from "./block-chat.module.scss";
import cn from "classnames";
import BlockIcon from "images/icons/block.svg";

interface IProps {
  cancel: () => void;
  item?: any;
}

const BlockChat: FC<IProps> = ({ cancel, item }) => {
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    cancel();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <BlockIcon />
      </div>
      <h3 className={styles.title}>Block {item.name}?</h3>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.description}>
              Are you sure you want to block the user?
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
                aria-label={"Block"}
              >
                Block
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default BlockChat;
