import React, { FC } from "react";
import ProfileForm from "components/Forms/ProfileForm/ProfileForm";
import { useTranslation } from "react-i18next";

import styles from "./profile.module.scss";

import LogoSvg from "images/main/logo.svg";

interface IProps {
  setIsOpenProfileMenu: () => void;
}

const Profile: FC<IProps> = ({ setIsOpenProfileMenu }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={setIsOpenProfileMenu}>
        <LogoSvg />
      </div>
      <h2 className={styles.title}>{t(`general.profile`)}</h2>
      <p className={styles.text}>{t(`general.createAccount`)}</p>
      <ProfileForm />
      <p className={styles.description}>
        {t(`general.bbgoExclusiveOffersAndNotifications`)}
      </p>
    </div>
  );
};

export default Profile;
