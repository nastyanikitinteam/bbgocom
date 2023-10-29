import { FC, useCallback } from "react";
import { Form } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../utils/validateForm";
import cn from "classnames";
import styles from "./delete-card.module.scss";

import WalletIcon from "images/icons/wallet-big.svg";

interface IProps {
  closeModal: () => void;
}

const DeleteCard: FC<IProps> = ({ closeModal }) => {
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    closeModal();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <WalletIcon />
      </div>
      <h3 className={styles.title}>Delete Card</h3>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.description}>
              The card will be removed from your wallet and personal account
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
                className={cn("default-button red sm", styles.button)}
                aria-label={`Delete card`}
              >
                Delete card
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default DeleteCard;
