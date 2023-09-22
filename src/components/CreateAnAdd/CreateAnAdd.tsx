import { useMemo } from "react";
import styles from "./create-an-add.module.scss";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import bannerImg from "images/create-an-add/hero-banner.jpg";
import Create from "./Create/Create";

const CreateAnAdd = () => {
  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: "Home",
        url: "/",
      },
      {
        id: 0,
        title: "Create an add",
      },
    ],
    []
  );
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <BreadCrumbs crumbs={breadCrumbs} />
        <div className={styles.banner}>
          <img src={bannerImg.src} alt="" />
        </div>
        <section className={styles.section}>
          <Create />
        </section>
      </div>
    </div>
  );
};

export default CreateAnAdd;
