import { useMemo } from "react";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import styles from "./advertise-with-us-page.module.scss";
import AdvertiseForm from "components/Forms/AdvertiseForm/AdvertiseForm";
import { useTranslation, Trans } from "react-i18next";
import Link from "next/link";

const AdvertiseWithUs = () => {
  const { t } = useTranslation();

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: `general.home`,
        url: "/",
      },
      {
        id: 0,
        title: "help.advertiseWithUs",
      },
    ],
    []
  );

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <BreadCrumbs crumbs={breadCrumbs} />
        <div className={styles.content}>
          <h1 className={styles.title}>{t("help.advertiseWithUs")}</h1>
          <p className={styles.text}>
            <Trans
              i18nKey={"help.displayAdvertisingRequest"}
              components={[<Link href="/" />, <Link href="/trn" />]}
            />
          </p>
          <AdvertiseForm />
        </div>
      </div>
    </section>
  );
};

export default AdvertiseWithUs;
