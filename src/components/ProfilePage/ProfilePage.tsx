import React, { ReactNode, FC, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import InfoBlock from "./InfoBlock/InfoBlock";
import Banner from "./Menu/Banner/Banner";
import cn from "classnames";

import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import Menu from "components/ProfilePage/Menu/Menu";

import bannerImg from "images/main-page/banner.png";

import styles from "./profile-page.module.scss";

interface IProps {
  title: string;
  isShortMenu?: boolean;
  withoutInfoBlock?: boolean;
  children: ReactNode;
}

const ProfilePage: FC<IProps> = ({
  title = "Page",
  children,
  isShortMenu,
  withoutInfoBlock,
}) => {
  const isTablet = useMediaQuery(998);
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
      {!isMobile ? (
        <>
          <Header isSecondHeader={true} />
          <div className={styles.container}>
            <div className="wrapper">
              <h1 className={styles.title} data-aos="fade" data-aos-delay="300">
                {title}
              </h1>
              <div className={styles.content}>
                <div className={styles.left}>
                  <div
                    className={cn(styles.menu, { [styles.short]: isShortMenu })}
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <Menu />
                  </div>
                  {!isTablet && (
                    <div
                      className={styles.banner}
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <Banner />
                    </div>
                  )}
                </div>
                <div
                  className={styles.main}
                  data-aos="fade"
                  data-aos-delay="300"
                >
                  {children}
                </div>
                {!withoutInfoBlock && (
                  <div
                    className={styles.info}
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <InfoBlock />
                  </div>
                )}
              </div>
              {isTablet && (
                <div
                  className={styles.banner}
                  data-aos="fade"
                  data-aos-delay="300"
                >
                  <Banner />
                </div>
              )}
              {!isMobile && <AdvertisingBanner bannerImg={bannerImg.src} />}
            </div>
          </div>
          {!isMobile && <Footer />}
        </>
      ) : (
        <div className={styles.container} data-aos="fade" data-aos-delay="300">
          {children}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
