import React, { ReactNode, FC, useState } from "react";
import Head from "next/head";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import styles from "./layout.module.scss";

interface IProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<IProps> = ({ title = "Page", children }) => {
  return (
    <div className={styles["app"]}>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Header /> */}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
