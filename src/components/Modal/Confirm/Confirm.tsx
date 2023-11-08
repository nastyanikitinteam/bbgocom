import { FC, ReactNode, useCallback } from "react";
import { Form } from "react-final-form";
import Link from "next/link";
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
  goHomePage?: boolean;
}

const Confirm: FC<IProps> = ({
  closeModal,
  description,
  title,
  event,
  icon,
  isGreen,
  goHomePage,
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
      {goHomePage ? (
        <>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className={styles.buttons}>
            <div
              className={cn("default-button border sm", styles.button)}
              onClick={closeModal}
            >
              Cancel
            </div>
            <Link
              href="/"
              className={cn("default-button  sm", styles.button, {
                red: !isGreen,
              })}
            >
              {event}
            </Link>
          </div>
        </>
      ) : (
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
                <div
                  className={cn("default-button border sm", styles.button)}
                  onClick={closeModal}
                >
                  Cancel
                </div>
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
      )}
    </div>
  );
};

export default Confirm;
