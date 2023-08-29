import React, { ReactNode, FC, useEffect, useState } from "react";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import InfoBlock from "./InfoBlock/InfoBlock";
import Banner from "./Menu/Banner/Banner";

import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import Menu from "components/ProfilePage/Menu/Menu";

import styles from "./profile-page.module.scss";

interface IProps {
  title: string;
  children: ReactNode;
}

const ProfilePage: FC<IProps> = ({ title = "Page", children }) => {
  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);

  return (
    <div className={styles["app"]}>
      <Head>
        <title>{title}</title>
      </Head>
      {!isMobile ? (
        <>
          <Header isSecondHeader={true} />
          <div className={styles.container}>
            <div className="wrapper">
              <h1 className={styles.title}>{title}</h1>
              <div className={styles.content}>
                <div className={styles.left}>
                  <div className={styles.menu}>
                    <Menu />
                  </div>
                  {!isTablet && (
                    <div className={styles.banner}>
                      <Banner />
                    </div>
                  )}
                </div>
                <div className={styles.main}>{children}</div>
                <div className={styles.info}>
                  <InfoBlock />
                </div>
              </div>
              {isTablet && (
                <div className={styles.banner}>
                  <Banner />
                </div>
              )}
              {!isMobile && <AdvertisingBanner />}
            </div>
          </div>
          {!isMobile && <Footer />}
        </>
      ) : (
        <div className={styles.container}>{children}</div>
      )}
    </div>
  );
};

export default ProfilePage;
