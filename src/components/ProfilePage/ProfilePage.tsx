import { useState } from "react";
import useMediaQuery from "src/utils/useMediaQuery";

import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import Menu from "components/Account/Menu/Menu";

import styles from "./profile-page.module.scss";

const ProfilePage = () => {
  const [isActiveMenuItem, setIsActiveMenuItem] = useState("Settings");

  const SmallLaptop = useMediaQuery(768);
  const isTablet = useMediaQuery(998);
  return (
    <div className="wrapper">
      <h1 className={styles.title}>{isActiveMenuItem}</h1>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Menu
            isActiveMenuItem={isActiveMenuItem}
            setIsActiveMenuItem={setIsActiveMenuItem}
          />
        </div>
      </div>
      <AdvertisingBanner />
    </div>
  );
};

export default ProfilePage;
