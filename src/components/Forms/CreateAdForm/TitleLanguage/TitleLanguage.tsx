import { useState, FC, useEffect } from "react";
import { Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./title-language.module.scss";
import cn from "classnames";
import { useFormState } from "react-final-form";

import { languageList } from "config/language";

interface IProps {
  disabled?: boolean;
  choosedLang: string;
  setChoosedLang: (str: string) => void;
}

const TitleLanguage: FC<IProps> = ({
  disabled,
  choosedLang,
  setChoosedLang,
}) => {
  const isMobile = useMediaQuery(768);

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
                  component={FormInput}
                  extClassName="theme"
                />
              </div>
            </div>
            <div className={cn(styles.item, styles.language)}>
              <p className={styles.label}>Language</p>
              <div className={cn(styles.input)}>
                <div className={styles.tabs}>
                  {languageList.map(({ value }) => {
                    return (
                      <div
                        className={cn(styles.tab, {
                          [styles.active]: value === choosedLang,
                        })}
                        key={value}
                        onClick={() => setChoosedLang(value)}
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
            <div className={cn(styles.input)}>
              <Field
                name="description"
                placeholder={"Enter Description"}
                type="text"
                component={Textarea}
                rows={isMobile ? 5 : 11}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default TitleLanguage;
