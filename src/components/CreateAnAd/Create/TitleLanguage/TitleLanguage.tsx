import { useMemo, useState, FC, useEffect } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./title-language.module.scss";
import cn from "classnames";

interface IProps {
  dataArray: any;
  setDataArray: (bool: any) => void;
  disabled: boolean;
  handleDataArray: (event: any, title: any) => void;
}

const TitleLanguage: FC<IProps> = ({
  dataArray,
  setDataArray,
  disabled,
  handleDataArray,
}) => {
  const [isActiveLang, setIsActiveLang] = useState(
    dataArray?.language ? dataArray?.language : "EN"
  );
  const isMobile = useMediaQuery(768);

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

  const handleLanguage = (value) => {
    setIsActiveLang(value);
    handleDataArray(value, "language");
  };

  useEffect(() => {
    dataArray?.title && handleDataArray(isActiveLang, "language");
  }, [dataArray?.title]);

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>2</span>Title and Description
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
                  text={dataArray?.title && dataArray.title}
                  component={FormInput}
                  extClassName="theme"
                  keyName="title"
                  onChange={handleDataArray}
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
                <div className={styles.tabs}>
                  {langList.map(({ value }) => {
                    return (
                      <div
                        className={cn(styles.tab, {
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
                [styles.disabled]: !dataArray?.language || !dataArray?.title,
              })}
            >
              <Field
                name="description"
                placeholder={"Enter Description"}
                type="text"
                text={dataArray?.description && dataArray?.description}
                component={Textarea}
                row={isMobile ? 5 : 11}
                keyName="description"
                onChange={handleDataArray}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default TitleLanguage;
