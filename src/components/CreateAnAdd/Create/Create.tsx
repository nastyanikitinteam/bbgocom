import { useMemo, useCallback, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";

import ChooseCategory from "./ChooseCategory/ChooseCategory";
import TitleLanguage from "./TitleLanguage/TitleLanguage";
import PhotoVideo from "./PhotoVideo/PhotoVideo";
import Price from "./Price/Price";
import DetailedInformation from "./DetailedInformation/DetailedInformation";

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

  const handleDataArray = (event, title) => {
    if (event?.length) {
      setDataArray((prev) => ({ ...prev, [title]: event }));
    } else {
      if (dataArray[title]) {
        let obj = dataArray;
        delete obj[title];
        setDataArray(obj);
      }
    }
  };

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
              handleDataArray={handleDataArray}
              // @ts-ignore
              disabled={!dataArray?.salesman}
            />
            <PhotoVideo
              dataArray={dataArray}
              setDataArray={setDataArray}
              handleDataArray={handleDataArray}
              // @ts-ignore
              disabled={!dataArray?.description}
            />
            <Price
              dataArray={dataArray}
              setDataArray={setDataArray}
              handleDataArray={handleDataArray}
              // @ts-ignore
              disabled={!dataArray?.files}
            />
            <DetailedInformation
              dataArray={dataArray}
              setDataArray={setDataArray}
              handleDataArray={handleDataArray}
              // @ts-ignore
              disabled={!dataArray?.price}
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
