import cn from "classnames";
import styles from "./sign-up-block.module.scss";
import { useTranslation } from "react-i18next";
import girl from "images/main/subscribe-girl.png";

const SignUpBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: t(`category.signUpForNewsletter`),
        }}
      />
      <p
        className={styles.text}
        dangerouslySetInnerHTML={{
          __html: t(`category.toReceiveLatestListingsNews`),
        }}
      />
      <a href="" className={cn("default-button sm white", styles.button)}>
        {t(`general.signUp`)}
      </a>
      <div className={styles.image}>
        <img src={girl.src} alt="" />
      </div>
    </div>
  );
};

export default SignUpBlock;
