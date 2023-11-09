import { useState, useCallback, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import { Form, Field } from "react-final-form";
import { validateForm } from "utils/validateForm";
import * as yup from "yup";
import FormInput from "components/FormElements/FormInput/FormInput";
import BannerFileInput from "components/FormElements/FilesInput/BannerFileInput/BannerFileInput";
import Confirm from "components/Modal/Confirm/Confirm";
import Modal from "components/Modal/Modal";
import cn from "classnames";
import styles from "./upload-banner-form.module.scss";

import CheckIcon from "images/icons/message-status-done.svg";

import { languageList } from "config/language";

interface IProps {
  setIsOpenNewBanner?: (bol: boolean) => void;
}

const UploadBannerForm: FC<IProps> = ({ setIsOpenNewBanner }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const isSmallDisplay = useMediaQuery(1200);
  const isMobile = useMediaQuery(768);

  const validationSchema = yup.object().shape({
    files: yup.mixed().required(`Selected file`),
    link: yup.string().url("Invalid link format").required("Link is required"),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log({ ...data, language: selectedLang });
    // isMobile && setIsOpenNewBanner(false);
    setIsOpenModal(true);
    form.restart();
    handleRemoveFile();
  }, []);

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setSelectedLang("EN");
    setImageDimensions({ width: 0, height: 0 });
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form }) => (
          <form className={styles.container} onSubmit={handleSubmit}>
            {!isMobile && (
              <div className={styles.top}>
                <h3 className={styles.title}>Upload banner</h3>
                {selectedFile && !isSmallDisplay && (
                  <div className={styles.buttons}>
                    <div
                      className={cn(styles.button, "default-button border sm")}
                      onClick={() => {
                        handleRemoveFile();
                        form.restart();
                      }}
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
            )}
            {isMobile && (
              <div className={cn(styles.item, styles.language)}>
                <div className={styles.languages}>
                  {languageList.map(({ value }) => {
                    return (
                      <div
                        className={cn(styles.lang, {
                          [styles.active]: value === selectedLang,
                        })}
                        key={value}
                        onClick={() => setSelectedLang(value)}
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className={styles.main}>
              <Field
                name="files"
                //@ts-ignore
                component={BannerFileInput}
                title="Drag the image or <span> Open explorer</span>"
                description={`size <100KB and file type PNG/GIF/JPEG`}
                isSmall
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                setImageDimensions={setImageDimensions}
                imageDimensions={imageDimensions}
              />
            </div>
            <div className={styles.bottom}>
              {!isMobile && (
                <div className={cn(styles.item, styles.language)}>
                  <h3 className={styles.subtitle}>Language banner</h3>
                  <div className={styles.languages}>
                    {languageList.map(({ value }) => {
                      return (
                        <div
                          className={cn(styles.lang, {
                            [styles.active]: value === selectedLang,
                          })}
                          key={value}
                          onClick={() => setSelectedLang(value)}
                        >
                          {value}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className={styles.link}>
                <h3 className={styles.subtitle}>Add link</h3>
                <Field
                  name="link"
                  type="text"
                  placeholder={"http://"}
                  component={FormInput}
                  extClassName="link"
                  isSmall
                />
              </div>
            </div>
            {selectedFile && isSmallDisplay && !isMobile && (
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
            {isMobile && (
              <button
                type="submit"
                className={cn("default-button sm", styles.button, {
                  disabled: !selectedFile,
                })}
                aria-label={`Upload`}
              >
                Save
              </button>
            )}
          </form>
        )}
      ></Form>
      {isOpenModal && (
        <Modal
          closeModal={() => setIsOpenModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={() => setIsOpenModal(false)}
            title="Successful!"
            description="Your banner has been successfully sent"
            event="Go to Home"
            isGreen
            goHomePage
          />
        </Modal>
      )}
    </>
  );
};

export default UploadBannerForm;
