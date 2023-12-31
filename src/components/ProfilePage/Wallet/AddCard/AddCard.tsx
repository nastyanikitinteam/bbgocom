import { useCallback, useState, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../utils/validateForm";
import CardInput from "components/FormElements/FormInput/CardInput";
import DateInput from "components/FormElements/FormInput/DateInput";
import NumberInput from "components/FormElements/FormInput/NumberInput";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import cn from "classnames";
import { useTranslation } from "react-i18next";
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const validationCard = yup.object().shape({});
  const isMobile = useMediaQuery(768);
  const { t } = useTranslation();

  const validate = validateForm(validationCard);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    setIsOpenModal(true);
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
          <h3 className={styles.subtitle}>{t(`profile.addCard`)}</h3>
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
                  {isMobile && (
                    <p className={styles.label}>{t(`profile.cardNumber`)}</p>
                  )}
                  <Field
                    name="cardNumber"
                    placeholder={"---- ---- ---- ----"}
                    type="text"
                    component={CardInput}
                    maxLength={19}
                  />
                </div>
                <div className={styles.items}>
                  <div className={styles.item}>
                    {isMobile && (
                      <p className={styles.label}>{t(`profile.validity`)}</p>
                    )}
                    <Field
                      name="validity"
                      placeholder={t(`profile.mmYY`)}
                      type="text"
                      component={DateInput}
                      maxLength={5}
                    />
                  </div>
                  <div className={styles.item}>
                    {isMobile && (
                      <p className={styles.label}>{t(`profile.cvv`)}</p>
                    )}
                    <Field
                      name="CVV"
                      placeholder={t(`profile.cvv`)}
                      type="text"
                      component={NumberInput}
                      extClassName="smNoIcon"
                      maxLength={3}
                    />
                  </div>
                </div>
                <div className={styles.buttons}>
                  <a
                    href="#"
                    className={cn("default-button border sm", styles.button)}
                    onClick={() => setIsActiveNewCard(false)}
                  >
                    {t(`general.cancel`)}
                  </a>
                  <button
                    type="submit"
                    className={cn("default-button sm", styles.button)}
                    aria-label={`Add Card`}
                  >
                    {t(`profile.addCard`)}
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
            {t(`profile.addCard`)}
          </h2>
        </div>
      )}
      {isOpenModal && (
        <Modal
          closeModal={() => setIsOpenModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={() => setIsOpenModal(false)}
            title={t(`profile.successful`)}
            description={t(`profile.cardSuccessfullyAdded`)}
            event={t(`general.done`)}
            isGreen
          />
        </Modal>
      )}
    </div>
  );
};

export default AddCard;
