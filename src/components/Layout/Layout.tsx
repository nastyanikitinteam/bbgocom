import React, { ReactNode, FC, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import HeaderMobile from "components/Header/HeaderMobile/HeaderMobile";
import Footer from "components/Footer/Footer";
import Modal from "components/Modal/Modal";
import Authorization from "components/Authorization/Authorization";

import styles from "./layout.module.scss";

interface IProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<IProps> = ({ title = "Page", children }) => {
  const [isOpenAuthorization, setIsOpenAuthorization] = useState(false);

  const isMobile = useMediaQuery(768);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles["app"]}>
      <Head>
        <title>{title}</title>
      </Head>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <Header setIsOpenAuthorization={setIsOpenAuthorization} />
      )}
      <div className={styles.container}>{children}</div>
      <Footer />
      {isOpenAuthorization && (
        <Modal closeModal={setIsOpenAuthorization} type="authorization">
          <Authorization />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
