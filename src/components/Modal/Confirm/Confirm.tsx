import { FC, ReactNode, useCallback } from "react";
import { Form } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import cn from "classnames";
import styles from "./confirm.module.scss";

import DeactivateIcon from "images/icons/deactivate.svg";

interface IProps {
  closeModal: () => void;
  description?: string;
  title?: string;
  event?: string;
  icon?: ReactNode;
  isGreen?: boolean;
}

const Confirm: FC<IProps> = ({
  closeModal,
  description,
  title,
  event,
  icon,
  isGreen,
}) => {
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    closeModal();
  }, []);

  return (
    <div className={cn(styles.container, { [styles.green]: isGreen })}>
      <div className={styles.icon}>{icon ? icon : <DeactivateIcon />}</div>
      <h3 className={styles.title}>{title}</h3>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className={styles.buttons}>
              <a
                href="#"
                className={cn("default-button border sm", styles.button)}
                onClick={closeModal}
              >
                Cancel
              </a>
              <button
                type="submit"
                className={cn("default-button  sm", styles.button, {
                  red: !isGreen,
                })}
                aria-label={event}
              >
                {event}
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default Confirm;
