import { useMemo, useCallback, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";

import ChooseCategory from "./ChooseCategory/ChooseCategory";
import TitleLanguage from "./TitleLanguage/TitleLanguage";
import PhotoVideo from "./PhotoVideo/PhotoVideo";

import cn from "classnames";
import styles from "./create.module.scss";

const Create = () => {
  const [dataArray, setDataArray] = useState({});

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

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  return (
    <section className={styles.container}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <ChooseCategory dataArray={dataArray} setDataArray={setDataArray} />
            <TitleLanguage
              dataArray={dataArray}
              setDataArray={setDataArray}
              // @ts-ignore
              disabled={!dataArray?.salesman}
            />
            <PhotoVideo
              dataArray={dataArray}
              setDataArray={setDataArray}
              // @ts-ignore
              disabled={!dataArray?.description}
            />
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
    </section>
  );
};

export default Create;
