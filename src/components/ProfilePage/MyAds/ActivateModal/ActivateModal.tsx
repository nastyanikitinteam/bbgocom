import { FC, useCallback } from "react";
import { Form } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../utils/validateForm";
import cn from "classnames";
import styles from "./activate-modal.module.scss";

import ActivateIcon from "images/icons/activate.svg";

interface IProps {
  closeModal: () => void;
  type: string;
}

const ActivateModal: FC<IProps> = ({ closeModal, type }) => {
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    closeModal();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <ActivateIcon />
      </div>
      <h3 className={styles.title}>Activate Ad</h3>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.description}>
              Are you sure you want to activate ad?
            </p>
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
                className={cn("default-button sm", styles.button)}
                aria-label={`Activate`}
              >
                Activate
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default ActivateModal;
