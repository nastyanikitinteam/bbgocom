import { useCallback, FC } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import styles from "./new-wish-list.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
interface IProps {
  cancel: () => void;
  item?: any;
}

const NewWishList: FC<IProps> = ({ cancel, item }) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);
  const onSubmit = useCallback((data, form) => {
    console.log(data);
    cancel();
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t(`wishlist.nameThisWishlist`)}</h3>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
          ...item,
        }}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.item}>
              <Field
                name="name"
                placeholder={t(`wishlist.enterName`)}
                label={t(`wishlist.nameWishlist`)}
                type="text"
                component={FormInput}
                extClassName="enterName"
                isSmall
              />
            </div>
            <div className={styles.item}>
              <Field
                name="description"
                placeholder={t(`wishlist.enterDescription`)}
                label={t(`wishlist.descriptionOptional`)}
                type="text"
                component={Textarea}
                rows={6}
                isSmall
              />
            </div>
            <div className={styles.buttons}>
              <div
                className={cn("default-button border sm", styles.button)}
                onClick={cancel}
              >
                {t(`general.cancel`)}
              </div>
              <button
                type="submit"
                className={cn("default-button sm", styles.button)}
                aria-label={item ? t(`general.edit`) : t(`general.create`)}
              >
                {item ? t(`general.edit`) : t(`general.create`)}
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default NewWishList;
