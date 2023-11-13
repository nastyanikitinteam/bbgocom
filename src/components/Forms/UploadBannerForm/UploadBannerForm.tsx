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
import { useTranslation } from "react-i18next";

import { languageList } from "config/language";

interface IProps {
  setIsOpenNewBanner?: (bol: boolean) => void;
}

const UploadBannerForm: FC<IProps> = ({ setIsOpenNewBanner }) => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
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
    setSelectedLang("en");
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
                <h3 className={styles.title}>{t(`profile.uploadBanner`)}</h3>
                {selectedFile && !isSmallDisplay && (
                  <div className={styles.buttons}>
                    <div
                      className={cn(styles.button, "default-button border sm")}
                      onClick={() => {
                        handleRemoveFile();
                        form.restart();
                      }}
                    >
                      {t(`general.cancel`)}
                    </div>
                    <button
                      type="submit"
                      className={cn("default-button sm", styles.button)}
                      aria-label={`Upload`}
                    >
                      {t(`general.upload`)}
                    </button>
                  </div>
                )}
              </div>
            )}
            {isMobile && (
              <div className={cn(styles.item, styles.language)}>
                <div className={styles.languages}>
                  {languageList.map(({ value, label }) => {
                    return (
                      <div
                        className={cn(styles.lang, {
                          [styles.active]: value === selectedLang,
                        })}
                        key={value}
                        onClick={() => setSelectedLang(value)}
                      >
                        {label}
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
                title={t(`profile.dragImageOrOpenExplorer`)}
                description={t(`profile.sizeAndFileType`)}
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
                  <h3 className={styles.subtitle}>
                    {t(`profile.languageBanner`)}
                  </h3>
                  <div className={styles.languages}>
                    {languageList.map(({ value, label }) => {
                      return (
                        <div
                          className={cn(styles.lang, {
                            [styles.active]: value === selectedLang,
                          })}
                          key={value}
                          onClick={() => setSelectedLang(value)}
                        >
                          {label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className={styles.link}>
                <h3 className={styles.subtitle}>{t(`profile.addLink`)}</h3>
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
                  {t(`general.cancel`)}
                </div>
                <button
                  type="submit"
                  className={cn("default-button sm", styles.button)}
                  aria-label={`Upload`}
                >
                  {t(`general.upload`)}
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
                {t(`general.save`)}
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
            title={t(`profile.successful`)}
            description={t(`profile.bannerSentSuccess`)}
            event={t(`help.goToHome`)}
            isGreen
            goHomePage
          />
        </Modal>
      )}
    </>
  );
};

export default UploadBannerForm;
