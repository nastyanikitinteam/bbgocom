import { FC } from "react";
import Link from "next/link";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "./Header/Header";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./error-page.module.scss";

import errorImage from "images/main/404.png";
import errorImageMobile from "images/main/404-mobile.png";

interface IProps {
  title: string;
}

const ErrorPage: FC<IProps> = ({ title }) => {
  const isMobile = useMediaQuery(768);

  const { t } = useTranslation();
  return (
    <div className={styles["app"]}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <section className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>{t(`errors.pageNotFound`)}</h1>
          <p className={styles.description}>
            {t(`errors.pageNotFoundMessage`)}
          </p>
          <div className={styles.image}>
            <img src={errorImage.src} alt="" />
          </div>
          <Link href={"/"} className={cn("default-button", styles.button)}>
            {t(`errors.backToHome`)}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
