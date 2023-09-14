import { useMemo, useState } from "react";
import Menu from "components/ProfilePage/Menu/Menu";
import Banner from "components/ProfilePage/Menu/Banner/Banner";
import styles from "./mobile-menu.module.scss";
import cn from "classnames";

import LogoSvg from "images/main/logo.svg";

const MobileMenu = () => {
  const [isActiveLang, setIsActiveLang] = useState("EN");

  const langList = useMemo(
    () => [
      {
        value: "EN",
        label: "EN",
      },
      {
        value: "RU",
        label: "RU",
      },
      {
        value: "TH",
        label: "TH",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <LogoSvg />
        </div>
        <div className={styles.languages}>
          {langList.map(({ value }) => {
            return (
              <div
                className={cn(styles.lang, {
                  [styles.active]: value === isActiveLang,
                })}
                key={value}
                onClick={() => setIsActiveLang(value)}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
      <Banner />
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default MobileMenu;
