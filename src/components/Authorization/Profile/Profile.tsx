import ProfileForm from "components/Forms/ProfileForm/ProfileForm";

import styles from "./profile.module.scss";

import LogoSvg from "images/main/logo.svg";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
      <h2 className={styles.title}>Profile</h2>
      <p className={styles.text}>Create an account</p>
      <ProfileForm />
      <p className={styles.description}>
        BBGO will send you exclusive offers, ideas, promotional emails and push
        notifications. You can opt out in your account settings or in a
        marketing notice.
      </p>
    </div>
  );
};

export default Profile;
