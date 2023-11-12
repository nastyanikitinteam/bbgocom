import { useMemo } from "react";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import styles from "./advertise-with-us-page.module.scss";
import AdvertiseForm from "components/Forms/AdvertiseForm/AdvertiseForm";
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
        title: "Advertise with us",
      },
    ],
    []
  );

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <BreadCrumbs crumbs={breadCrumbs} />
        <div className={styles.content}>
          <h1 className={styles.title}>Advertise with us</h1>
          <p className={styles.text}>
            If you need display advertising, please fill out the form below. We
            will determine your needs and form a suitable offer. If you would
            like to advertise your product or service, you can do so{" "}
            <a href="/">here</a>. If you have a question about working with the
            service, you can find the answer <a href="/">here</a>.
          </p>
          <AdvertiseForm />
        </div>
      </div>
    </section>
  );
};

export default AdvertiseWithUs;
