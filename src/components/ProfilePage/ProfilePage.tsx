import React, { ReactNode, FC, useEffect, useState, useMemo } from "react";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import InfoBlock from "./InfoBlock/InfoBlock";
import Banner from "./Menu/Banner/Banner";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Rules from "./Banner/Rules/Rules";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import cn from "classnames";

import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import Menu from "components/ProfilePage/Menu/Menu";
import bannerImg from "images/main-page/banner.png";
import DeleteIcon from "images/icons/delete.svg";
import AvatarIcon from "images/icons/avatar.svg";
import styles from "./profile-page.module.scss";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);
  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: `general.home`,
        url: "/",
      },
      {
        id: 0,
        title: "Profile",
      },
    ],
    []
  );

  useEffect(() => {
    if (isMobile) {
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
    return () => {
      document.body.classList.remove("hidden");
    };
  }, [isMobile]);

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
                  <div
                    className={styles.del}
                    onClick={() => setIsActiveDeleteModal(true)}
                  >
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
      {isActiveDeleteModal && (
        <Modal
          closeModal={() => setIsActiveDeleteModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={() => setIsActiveDeleteModal(false)}
            event="Delete"
            description="Are you sure you want to delete your account?"
            title="Delete"
            icon={<AvatarIcon />}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProfilePage;
