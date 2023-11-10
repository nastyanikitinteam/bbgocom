import ProfileForm from "components/Forms/ProfileForm/ProfileForm";
import { useTranslation } from "react-i18next";

import styles from "./profile.module.scss";

import LogoSvg from "images/main/logo.svg";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
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
