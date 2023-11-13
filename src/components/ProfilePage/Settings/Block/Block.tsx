import { useCallback, useState, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import PasswordInput from "components/FormElements/FormInput/PasswordInput";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import styles from "./block.module.scss";

import EditIcon from "images/icons/edit.svg";
import AvatarIcon from "images/icons/avatar.svg";
import avatar from "images/main/avatar.png";
import ShareIcon from "images/icons/share.svg";
import PhotoIcon from "images/icons/photo.svg";

interface IProps {
  title?: string;
  items: any;
  setIsOpenParam?: (bool: boolean) => void;
}

const Block: FC<IProps> = ({ title, items, setIsOpenParam }) => {
  const { t } = useTranslation();
  const [isEdit, setIsEdit] = useState(false);
  const [isAvatar, setIsAvatar] = useState(false);
  const isMobile = useMediaQuery(768);

  const validationSchema = yup.object().shape({
    // email: yup.string().email().required(`Введіть електрону пошту`),
    // password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    setIsEdit(false);
    if (setIsOpenParam) {
      setIsOpenParam(false);
    }
  }, []);

  const handleFile = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.container}>
      {isMobile && title === t("profile.personalInfo") && (
        <div className={cn(styles.account, { [styles.editAvatar]: isEdit })}>
          {!isEdit ? (
            <>
              <div
                className={cn(styles.avatar, {
                  [styles.noAvatar]: !isAvatar,
                })}
              >
                {isAvatar ? (
                  <img src={avatar.src} alt="" />
                ) : (
                  <span className={styles.avatarIcon}>
                    <AvatarIcon />
                  </span>
                )}
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>Alex1236</h3>
                <p className={styles.date}>{t(`general.from`)} April 2023</p>
              </div>
              <span className={styles.share}>
                <ShareIcon />
              </span>
            </>
          ) : (
            <div
              className={cn(styles.avatar, {
                [styles.noAvatar]: !isAvatar,
              })}
            >
              {isAvatar ? (
                <img src={avatar.src} alt="" />
              ) : (
                <span className={styles.avatarIcon}>
                  <AvatarIcon />
                </span>
              )}
              <label className={styles.addPhoto}>
                <span className={styles.icon}>
                  <PhotoIcon />
                </span>
                <input
                  id="image-input"
                  type="file"
                  accept=".png,.jpg,.jpeg,.gif"
                  onInput={(e) => {
                    handleFile(e);
                  }}
                />
              </label>
            </div>
          )}
        </div>
      )}
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form
            className={cn(styles.form, { [styles.edit]: isEdit })}
            onSubmit={handleSubmit}
          >
            {!isMobile && (
              <div className={styles.top}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.buttons}>
                  {isEdit ? (
                    <>
                      <div
                        className={cn("default-button border sm")}
                        onClick={() => setIsEdit(false)}
                      >
                        {t(`general.cancel`)}
                      </div>
                      <button
                        type="submit"
                        className={cn("default-button sm", styles.button)}
                        aria-label={`Save`}
                      >
                        {t(`general.save`)}
                      </button>
                    </>
                  ) : (
                    <div
                      className={cn("default-button border sm")}
                      onClick={() => setIsEdit(true)}
                    >
                      <span className={cn("icon", styles.icon)}>
                        <EditIcon />
                      </span>
                      {t(`general.edit`)}
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className={styles.items}>
              {items
                .filter(({ type }) => type !== "password")
                .map(({ id, label, name, type, value }) => {
                  return (
                    <div className={styles.item} key={id}>
                      <label className={styles.label}>{t(label)}</label>
                      {isEdit ? (
                        <Field
                          name={name}
                          type={type}
                          component={FormInput}
                          extClassName="smNoIcon"
                          text={value}
                        />
                      ) : (
                        <p className={styles.text}>
                          {type === "password"
                            ? value.replace(/[\s\S]/g, "*")
                            : value}
                        </p>
                      )}
                    </div>
                  );
                })}
              {items
                .filter(({ type }) => type === "password")
                .map(({ id, label, name, type, value }) => {
                  return !isEdit ? (
                    <div className={styles.item} key={id}>
                      <label className={styles.label}>{t(label)}</label>
                      <p className={styles.text}>
                        {value.replace(/[\s\S]/g, "*")}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div
                        className={cn(styles.item, styles.itemPass)}
                        key={id}
                      >
                        <label className={styles.label}>
                          {t(`profile.enterPassword`)}
                        </label>
                        <Field
                          name="enterPassword"
                          component={PasswordInput}
                          extClassName="smNoIcon"
                          placeholder={t(`profile.enterPassword`)}
                        />
                      </div>
                      <div
                        className={cn(styles.item, styles.itemPass)}
                        key={id}
                      >
                        <label className={styles.label}>
                          {t(`profile.newPassword`)}
                        </label>
                        <Field
                          name="newPassword"
                          component={PasswordInput}
                          extClassName="smNoIcon"
                          placeholder={t(`profile.enterPassword`)}
                        />
                      </div>
                      <div
                        className={cn(styles.item, styles.itemPass)}
                        key={id}
                      >
                        <label className={styles.label}>
                          {t(`profile.confirmPassword`)}
                        </label>
                        <Field
                          name="confirmPassword"
                          component={PasswordInput}
                          extClassName="smNoIcon"
                          placeholder={t(`profile.enterPassword`)}
                        />
                      </div>
                    </>
                  );
                })}
            </div>
            {isMobile && (
              <div className={styles.buttons}>
                {isEdit ? (
                  <>
                    <div
                      className={cn("default-button border sm", styles.button)}
                      onClick={() => setIsEdit(false)}
                    >
                      {t(`general.cancel`)}
                    </div>
                    <button
                      type="submit"
                      className={cn("default-button sm", styles.button)}
                      aria-label={`Save`}
                    >
                      {t(`general.save`)}
                    </button>
                  </>
                ) : (
                  <div
                    className={cn(
                      "default-button border sm",
                      styles.editButton
                    )}
                    onClick={() => setIsEdit(true)}
                  >
                    <span className={cn("icon", styles.icon)}>
                      <EditIcon />
                    </span>
                    {t(`general.edit`)}
                  </div>
                )}
              </div>
            )}
          </form>
        )}
      ></Form>
    </div>
  );
};
export default Block;
