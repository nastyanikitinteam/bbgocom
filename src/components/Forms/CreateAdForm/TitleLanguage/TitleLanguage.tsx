import { FC } from "react";
import { Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./title-language.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { languageList } from "config/language";

interface IProps {
  choosedLang: string;
  setChoosedLang: (str: string) => void;
  disabled: boolean;
}

const TitleLanguage: FC<IProps> = ({
  choosedLang,
  setChoosedLang,
  disabled,
}) => {
  const isMobile = useMediaQuery(768);
  const { t } = useTranslation();

  console.log(choosedLang);
  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>2</span>
        {t(`createad.titleAndDescription`)}
      </h3>
      {!disabled && (
        <>
          <div className={styles.items}>
            <div className={styles.item}>
              <p className={styles.label}>{t(`createad.title`)}</p>
              <div className={styles.input}>
                <Field
                  name="title"
                  placeholder={t(`createad.addTitle`)}
                  type="text"
                  component={FormInput}
                  extClassName="theme"
                />
              </div>
            </div>
            <div className={cn(styles.item, styles.language)}>
              <p className={styles.label}>{t(`createad.language`)}</p>
              <div className={cn(styles.input)}>
                <div className={styles.tabs}>
                  {languageList.map(({ value, label }) => {
                    return (
                      <div
                        className={cn(styles.tab, {
                          [styles.active]: value === choosedLang,
                        })}
                        key={value}
                        onClick={() => setChoosedLang(value)}
                      >
                        {label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.label}>{t(`createad.description`)}</p>
            <div className={cn(styles.input)}>
              <Field
                name="description"
                placeholder={t(`createad.enterDescription`)}
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
