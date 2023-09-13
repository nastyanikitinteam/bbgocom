import { useMemo, useState, useCallback } from "react";
import { Form, Field } from "react-final-form";
import Select from "components/Select/Select";
import { validateForm } from "../../../../utils/validateForm";
import * as yup from "yup";
import FormInput from "components/FormElements/FormInput/FormInput";
import Upload from "../Upload/Upload";
import cn from "classnames";
import styles from "./uploadBanner.module.scss";

const UploadBanner = () => {
  const [isActiveLang, setIsActiveLang] = useState("EN");

  const validationSchema = yup.object().shape({});

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  const langList = useMemo(
    () => [
      {
        value: "EN",
        label: "EN",
      },
      {
        value: "RU",
        label: "RU",
      },
      {
        value: "TH",
        label: "TH",
      },
    ],
    []
  );

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.top}>
            <h3 className={styles.title}>Upload banner</h3>
          </div>
          <div className={styles.main}>
            <Upload />
          </div>
          <div className={styles.bottom}>
            <div className={cn(styles.item, styles.language)}>
              <h3 className={styles.subtitle}>Language banner</h3>
              <div className={styles.languages}>
                {langList.map(({ value }) => {
                  return (
                    <div
                      className={cn(styles.lang, {
                        [styles.active]: value === isActiveLang,
                      })}
                      key={value}
                      onClick={() => setIsActiveLang(value)}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.link}>
              <h3 className={styles.subtitle}>Add link</h3>
              <Field
                name="link"
                type="text"
                placeholder={"http://"}
                component={FormInput}
                extClassName="link"
              />
            </div>
          </div>

          {/* <div className={styles.button}>
              <button
                type="submit"
                className={cn("default-button", styles.button)}
                aria-label={`Log In`}
              >
                Upload
              </button>
            </div> */}
        </form>
      )}
    ></Form>
  );
};

export default UploadBanner;
