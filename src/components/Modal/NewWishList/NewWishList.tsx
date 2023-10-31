import { useCallback, FC } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import styles from "./new-wish-list.module.scss";
import cn from "classnames";

interface IProps {
  cancel: () => void;
  item?: any;
}

const NewWishList: FC<IProps> = ({ cancel, item }) => {
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    cancel();
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Name this wishlist</h3>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.item}>
              <Field
                name="name"
                placeholder={"Enter name"}
                label="Name wishlist"
                type="text"
                component={FormInput}
                extClassName="enterName"
                isSmall
                text={item && item.name}
              />
            </div>
            <div className={styles.item}>
              <Field
                name="description"
                placeholder={"Enter Description"}
                label="Description (optional)"
                type="text"
                text={item?.description && item.description}
                component={Textarea}
                row={6}
                isSmall
              />
            </div>
            <div className={styles.buttons}>
              <div
                className={cn("default-button border sm", styles.button)}
                onClick={cancel}
              >
                Cancel
              </div>
              <button
                type="submit"
                className={cn("default-button sm", styles.button)}
                aria-label={item ? "Edit wishlist" : "Create wishlist"}
              >
                {item ? "Edit wishlist" : "Create wishlist"}
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default NewWishList;
