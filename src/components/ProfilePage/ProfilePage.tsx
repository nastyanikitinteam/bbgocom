import React, { ReactNode, FC, useEffect, useState } from "react";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import HeaderMobile from "components/Header/HeaderMobile/HeaderMobile";
import Footer from "components/Footer/Footer";
import InfoBlock from "./InfoBlock/InfoBlock";

import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import Menu from "components/ProfilePage/Menu/Menu";

import styles from "./profile-page.module.scss";

interface IProps {
  title: string;
  children: ReactNode;
}

const ProfilePage: FC<IProps> = ({ title = "Page", children }) => {
  const [isActiveMenuItem, setIsActiveMenuItem] = useState("Settings");

  return (
    <div className={styles.container}>
      <div className="wrapper">
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>
          <div className={styles.menu}>
            <Menu
              isActiveMenuItem={isActiveMenuItem}
              // setIsActiveMenuItem={setIsActiveMenuItem}
            />
          </div>
          <div className={styles.main}>{children}</div>
          <div className={styles.info}>
            <InfoBlock />
          </div>
        </div>
        <AdvertisingBanner />
      </div>
    </div>
  );
};

export default ProfilePage;
