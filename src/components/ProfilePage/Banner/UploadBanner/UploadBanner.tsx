import { useMemo, useState, useCallback } from "react";
import { Form, Field } from "react-final-form";
import Select from "components/Select/Select";
import { validateForm } from "../../../../utils/validateForm";
import * as yup from "yup";
import FormInput from "components/FormElements/FormInput/FormInput";
import FileUpload from "components/FileUpload/FileUpload";
import cn from "classnames";
import styles from "./uploadBanner.module.scss";

const UploadBanner = () => {
  const [isActiveLang, setIsActiveLang] = useState("EN");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const validationSchema = yup.object().shape({});

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    console.log(selectedFile);
  }, []);

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setImageDimensions({ width: 0, height: 0 });
  };

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
            {selectedFile && (
              <div className={styles.buttons}>
                <div
                  className={cn(styles.button, "default-button border sm")}
                  onClick={handleRemoveFile}
                >
                  Cancel
                </div>
                <button
                  type="submit"
                  className={cn("default-button sm", styles.button)}
                  aria-label={`Upload`}
                >
                  Upload
                </button>
              </div>
            )}
          </div>
          <div className={styles.main}>
            <FileUpload
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              setImageDimensions={setImageDimensions}
              imageDimensions={imageDimensions}
            />
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
