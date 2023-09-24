import { useMemo, useState, FC, useEffect } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import styles from "./title-language.module.scss";
import cn from "classnames";

interface IProps {
  dataArray: any;
  setDataArray: (bool: any) => void;
  disabled: boolean;
}

const TitleLanguage: FC<IProps> = ({ dataArray, setDataArray, disabled }) => {
  const [isActiveLang, setIsActiveLang] = useState("EN");

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

  const handleTitleInput = (event) => {
    if (event.length) {
      setDataArray((prev) => ({ ...prev, title: event }));
    } else {
      if (dataArray.title) {
        let obj = dataArray;
        delete obj.title;
        setDataArray(obj);
      }
    }
  };

  const handleLanguage = (value) => {
    setIsActiveLang(value);
    setDataArray((prev) => ({ ...prev, language: value }));
  };

  useEffect(() => {
    setDataArray((prev) => ({ ...prev, language: isActiveLang }));
  }, [langList]);

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: styles.title })}>
        <span className={styles.num}>2</span>Title and language
      </h3>
      {!disabled && (
        <>
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.label}>Title</p>
              <div className={styles.input}>
                <Field
                  name="title"
                  placeholder={"Add Title"}
                  type="text"
                  component={FormInput}
                  extClassName="theme"
                  onChange={handleTitleInput}
                />
              </div>
            </div>
            <div className={cn(styles.item, styles.language)}>
              <p className={styles.label}>Language</p>
              <div
                className={cn(styles.input, {
                  // @ts-ignore
                  [styles.disabled]: !dataArray?.title,
                })}
              >
                <div className={styles.languages}>
                  {langList.map(({ value }) => {
                    return (
                      <div
                        className={cn(styles.lang, {
                          [styles.active]: value === isActiveLang,
                        })}
                        key={value}
                        onClick={() => handleLanguage(value)}
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.label}>Description</p>
            <div
              className={cn(styles.input, {
                // @ts-ignore
                [styles.disabled]: !dataArray?.language,
              })}
            >
              <Field
                name="description"
                placeholder={"Enter Description"}
                type="text"
                component={Textarea}
                row={11}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default TitleLanguage;
