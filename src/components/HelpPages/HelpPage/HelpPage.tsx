import { useMemo } from "react";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import ServiceForm from "components/Forms/ServiceForm/ServiceForm";
import styles from "./help-page.module.scss";
import { useTranslation } from "react-i18next";

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
        title: "Help",
      },
    ],
    []
  );

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <BreadCrumbs crumbs={breadCrumbs} />
        <div className={styles.content}>
          <h1 className={styles.title}>Service Request Form</h1>
          <ServiceForm />
        </div>
      </div>
    </section>
  );
};

export default AdvertiseWithUs;
