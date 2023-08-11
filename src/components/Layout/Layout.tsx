import React, { ReactNode, FC, useState } from "react";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import HeaderMobile from "components/Header/HeaderMobile/HeaderMobile";
import Footer from "components/Footer/Footer";

import styles from "./layout.module.scss";

interface IProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<IProps> = ({ title = "Page", children }) => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={styles["app"]}>
      <Head>
        <title>{title}</title>
      </Head>
      {isMobile ? <HeaderMobile /> : <Header />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
