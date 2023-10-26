import { useCallback, useState, useEffect, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import cn from "classnames";

import styles from "./add-card.module.scss";
import PlusIcon from "images/icons/plus.svg";
import CloseIcon from "images/icons/close.svg";

interface IProps {
  isActiveNewCard: boolean;
  setIsActiveNewCard: (bool: boolean) => void;
  setIsWallet?: (bool: boolean) => void;
}

const AddCard: FC<IProps> = ({
  isActiveNewCard,
  setIsActiveNewCard,
  setIsWallet,
}) => {
  const validationCard = yup.object().shape({});
  const isMobile = useMediaQuery(768);

  const validate = validateForm(validationCard);

  const onSubmit = useCallback((data, form) => {
    if (isMobile) {
      setIsActiveNewCard(false);
      setIsWallet(true);
    } else {
      setIsActiveNewCard(false);
    }
  }, []);

  return (
    <div className={cn(styles.container, { [styles.active]: isActiveNewCard })}>
      {isMobile && (
        <>
          <h3 className={styles.subtitle}>Add card</h3>
          <div
            className={styles.close}
            onClick={() => setIsActiveNewCard(false)}
          >
            <CloseIcon />
          </div>
        </>
      )}
      {isActiveNewCard ? (
        <div className={styles.card}>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.item}>
                  {isMobile && <p className={styles.label}>Card number</p>}
                  <Field
                    name="number"
                    placeholder={"---- ---- ---- ----"}
                    type="text"
                    component={FormInput}
                    extClassName="card"
                    isCardNumber
                    maxLength={19}
                  />
                </div>
                <div className={styles.items}>
                  <div className={styles.item}>
                    {isMobile && <p className={styles.label}>Validity</p>}
                    <Field
                      name="lastName"
                      placeholder={"MM/YY"}
                      type="text"
                      component={FormInput}
                      extClassName="smNoIcon"
                      isDate
                      maxLength={5}
                    />
                  </div>
                  <div className={styles.item}>
                    {isMobile && <p className={styles.label}>CVV</p>}
                    <Field
                      name="lastName"
                      placeholder={"CVV"}
                      type="text"
                      component={FormInput}
                      extClassName="smNoIcon"
                      maxLength={3}
                      number
                    />
                  </div>
                </div>
                <div className={styles.buttons}>
                  <a
                    href="#"
                    className={cn("default-button border sm", styles.button)}
                    onClick={() => setIsActiveNewCard(false)}
                  >
                    Cancel
                  </a>
                  <button
                    type="submit"
                    className={cn("default-button sm", styles.button)}
                    aria-label={`Add Card`}
                  >
                    Add Card
                  </button>
                </div>
              </form>
            )}
          ></Form>
        </div>
      ) : (
        <div className={styles.add} onClick={() => setIsActiveNewCard(true)}>
          <h2 className={styles.title}>
            <span className={styles.icon}>
              <PlusIcon />
            </span>
            Add Card
          </h2>
        </div>
      )}
    </div>
  );
};

export default AddCard;
