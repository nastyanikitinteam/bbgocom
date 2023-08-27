import { useCallback, useState, FC } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";

import cn from "classnames";
import styles from "./block.module.scss";

import EditIcon from "images/icons/edit.svg";

interface IProps {
  title: string;
  items: any;
}

const Block: FC<IProps> = ({ title, items }) => {
  const [isEdit, setIsEdit] = useState(false);

  const validationSchema = yup.object().shape({
    // email: yup.string().email().required(`Введіть електрону пошту`),
    // password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    setIsEdit(false);
  }, []);

  console.log(
    items.filter(({ type }) => type !== "passsword"),
    "filter"
  );

  return (
    <div className={styles.container}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form
            className={cn(styles.form, { [styles.edit]: isEdit })}
            onSubmit={handleSubmit}
          >
            <div className={styles.top}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.buttons}>
                {isEdit ? (
                  <>
                    <div
                      className={cn("default-button border sm")}
                      onClick={() => setIsEdit(false)}
                    >
                      Cancel
                    </div>
                    <button
                      type="submit"
                      className={cn("default-button sm", styles.button)}
                      aria-label={`Save`}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <div
                    className={cn("default-button border sm")}
                    onClick={() => setIsEdit(true)}
                  >
                    <span className={cn("icon", styles.icon)}>
                      <EditIcon />
                    </span>
                    Edit
                  </div>
                )}
              </div>
            </div>
            <div className={styles.items}>
              {items
                .filter(({ type }) => type !== "password")
                .map(({ id, label, name, type, value }) => {
                  return (
                    <div className={styles.item} key={id}>
                      <label className={styles.label}>{label}</label>
                      {isEdit ? (
                        <Field
                          name={name}
                          type={type}
                          component={FormInput}
                          extClassName="smNoIcon"
                          text={value}
                        />
                      ) : (
                        <p className={styles.text}>
                          {type === "password"
                            ? value.replace(/[\s\S]/g, "*")
                            : value}
                        </p>
                      )}
                    </div>
                  );
                })}
              {items
                .filter(({ type }) => type === "password")
                .map(({ id, label, name, type, value }) => {
                  return !isEdit ? (
                    <div className={styles.item} key={id}>
                      <label className={styles.label}>{label}</label>
                      <p className={styles.text}>
                        {value.replace(/[\s\S]/g, "*")}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div
                        className={cn(styles.item, styles.itemPass)}
                        key={id}
                      >
                        <label className={styles.label}>Enter Password</label>
                        <Field
                          name="enterPassword"
                          type="password"
                          component={FormInput}
                          extClassName="smNoIcon"
                          placeholder="Enter password"
                        />
                      </div>
                      <div
                        className={cn(styles.item, styles.itemPass)}
                        key={id}
                      >
                        <label className={styles.label}>New Password</label>
                        <Field
                          name="newPassword"
                          type="password"
                          component={FormInput}
                          extClassName="smNoIcon"
                          placeholder="Enter password"
                        />
                      </div>
                      <div
                        className={cn(styles.item, styles.itemPass)}
                        key={id}
                      >
                        <label className={styles.label}>Confirm Password</label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          component={FormInput}
                          extClassName="smNoIcon"
                          placeholder="Enter password"
                        />
                      </div>
                    </>
                  );
                })}
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};
export default Block;
