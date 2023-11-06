import { useMemo, useCallback } from "react";
import Menu from "components/ProfilePage/Menu/Menu";
import Banner from "components/ProfilePage/Menu/Banner/Banner";
import styles from "./mobile-menu.module.scss";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import cn from "classnames";

import { languageList } from "config/language";

import LogoSvg from "images/main/logo.svg";

const MobileMenu = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = useCallback((locale: string) => {
    i18n.changeLanguage(locale);

    const { route, asPath, query } = router;
    router.push({ pathname: route, query }, asPath, {
      locale,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <LogoSvg />
        </div>
        <div className={styles.languages}>
          {languageList.map(({ value, label }) => {
            return (
              <div
                className={cn(styles.lang, {
                  [styles.active]: value === router.locale,
                })}
                key={value}
                onClick={() => changeLanguage(value)}
              >
                {label}
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
