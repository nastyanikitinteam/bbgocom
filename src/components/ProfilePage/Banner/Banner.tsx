import { useState } from "react";
import { useRouter } from "next/router";
import UploadBanner from "./UploadBanner/UploadBanner";
import BannerList from "./BannerList/BannerList";
import BannerListMobile from "./BannerList/BannerListMobile";
import Rules from "./Rules/Rules";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./banner.module.scss";
import ArrowIcon from "images/icons/drop.svg";
import PlusIcon from "images/icons/plus.svg";

const Banner = () => {
  const isSmallDisplay = useMediaQuery(1300);
  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);
  const [isOpenRules, setIsOpenRules] = useState(false);
  const [isOpenNewBanner, setIsOpenNewBanner] = useState(false);

  const router = useRouter();

  const back = () => {
    if (isOpenRules) {
      setIsOpenRules(false);
    } else if (isOpenNewBanner) {
      setIsOpenNewBanner(false);
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.container}>
      {isMobile ? (
        <>
          <div className={styles.top}>
            <div className="back" onClick={back}>
              <span className="arrow">
                <ArrowIcon />
              </span>
              Back
            </div>
            <h3 className={styles.title}>
              {isOpenNewBanner
                ? "Upload Banner"
                : isOpenRules
                ? ""
                : "Your Banners"}
            </h3>
            {!isOpenNewBanner && !isOpenRules && (
              <a
                href="#"
                className={styles.addNew}
                onClick={() => setIsOpenNewBanner(true)}
              >
                <span className={styles.icon}>
                  <PlusIcon />
                </span>
                Add New
              </a>
            )}
          </div>
          <div className={styles.main}>
            {isOpenRules ? (
              <Rules />
            ) : isOpenNewBanner ? (
              <UploadBanner />
            ) : (
              <BannerListMobile
                isOpenRules={isOpenRules}
                setIsOpenRules={setIsOpenRules}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div className={styles.main}>
            {!isOpenRules && (
              <>
                <UploadBanner />
                {isSmallDisplay ? (
                  <BannerListMobile
                    isOpenRules={isOpenRules}
                    setIsOpenRules={setIsOpenRules}
                  />
                ) : (
                  <BannerList />
                )}
              </>
            )}
          </div>
          {!isTablet && (
            <div className={styles.info}>
              <Rules />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Banner;
