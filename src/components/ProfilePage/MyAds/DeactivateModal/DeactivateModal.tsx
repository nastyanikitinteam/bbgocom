import { FC, ReactNode, useCallback } from "react";
import { Form } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../utils/validateForm";
import cn from "classnames";
import styles from "./deactivate-modal.module.scss";

import DeactivateIcon from "images/icons/deactivate.svg";

interface IProps {
  closeModal: () => void;
  description?: string;
  title?: string;
  event?: string;
  icon?: ReactNode;
}

const DeactivateModal: FC<IProps> = ({
  closeModal,
  description,
  title,
  event,
  icon,
}) => {
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    closeModal();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon ? icon : <DeactivateIcon />}</div>
      <h3 className={styles.title}>{title}</h3>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.description}>{description}</p>
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
                className={cn("default-button red sm", styles.button)}
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

export default DeactivateModal;
