import React, { ReactNode, FC, useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import InfoBlock from "./InfoBlock/InfoBlock";
import Banner from "./Menu/Banner/Banner";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Rules from "./Banner/Rules/Rules";
import cn from "classnames";

import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import Menu from "components/ProfilePage/Menu/Menu";

import bannerImg from "images/main-page/banner.png";
import DeleteIcon from "images/icons/delete.svg";

import styles from "./profile-page.module.scss";

interface IProps {
  title: string;
  isShortMenu?: boolean;
  withoutInfoBlock?: boolean;
  children: ReactNode;
  showDeleteButton?: boolean;
  isBanner?: boolean;
}

const ProfilePage: FC<IProps> = ({
  title = "Page",
  children,
  isShortMenu,
  withoutInfoBlock,
  showDeleteButton,
  isBanner,
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

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: "Home",
        url: "/",
      },
      {
        id: 0,
        title: "Profile",
      },
    ],
    []
  );

  return (
    <div className={styles["app"]}>
      <Head>
        <title>{title}</title>
      </Head>
      {!isMobile ? (
        <>
          <Header isSecondHeader={true} />
          <main className={styles.page}>
            <section className={styles.container}>
              <div className="wrapper">
                <BreadCrumbs crumbs={breadCrumbs} />
                <h1
                  className={styles.title}
                  data-aos="fade"
                  data-aos-delay="300"
                >
                  {title}
                </h1>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <div
                      className={cn(styles.menu, {
                        [styles.short]: isShortMenu,
                      })}
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
                {showDeleteButton && (
                  <div className={styles.del}>
                    <span className={styles.icon}>
                      <DeleteIcon />
                    </span>
                    Delete account
                  </div>
                )}
                {isBanner && isTablet && <Rules />}
                {isTablet && (
                  <div
                    className={styles.banner}
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <Banner />
                  </div>
                )}
              </div>
            </section>
            {!isMobile && <AdvertisingBanner bannerImg={bannerImg.src} />}
          </main>
          <Footer />
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
