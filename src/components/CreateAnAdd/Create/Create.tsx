import { useMemo, useCallback, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import Select from "components/Select/Select";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import Category from "components/SearchBar/Category/Category";

import ChooseCategory from "./ChooseCategory/ChooseCategory";

import CategoryMain from "components/SearchBar/Category/CategoryMain/CategoryMain";
import cn from "classnames";
import styles from "./create.module.scss";

const Create = () => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required(`No correct first name`),
    lastName: yup.string().required(`No correct last name`),
    email: yup.string().email().required(`No correct email`),
    password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  return (
    <div className={styles.container}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <ChooseCategory />
            <div className={styles.button}>
              <button
                type="submit"
                className={cn("default-button", styles.button)}
                aria-label={`Crate an account`}
              >
                Crate an account
              </button>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default Create;
