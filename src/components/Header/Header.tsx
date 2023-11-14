import { useContext, useEffect, useState, FC, useCallback } from "react";

import Link from "next/link";
import useMediaQuery from "src/utils/useMediaQuery";
import ThemeContext from "src/context";
import Authorization from "components/Authorization/Authorization";
import Modal from "components/Modal/Modal";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Account from "./Account/Account";
import SearchBar from "components/SearchBar/SearchBar";
import styles from "./header.module.scss";
import LogoSvg from "images/main/logo.svg";
import StarSvg from "images/icons/star.svg";
import AddSvg from "images/icons/add-icon.svg";

import { helpMenu } from "config/menu";
import { languageListWithIcon } from "config/language";

import cn from "classnames";
import Select from "components/Select/Select";

interface IProps {
  isSecondHeader?: boolean;
  withoutSearchBar?: boolean;
}

const Header: FC<IProps> = ({ isSecondHeader, withoutSearchBar }) => {
  const { height } = useContext(ThemeContext);
  const [scrollTop, setScrollTop] = useState(0);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isSearchBarTop, setIsSearchBarTop] = useState(false);
  const [isWishItems, setIsWishItems] = useState(0);
  const [isOpenAuthorization, setIsOpenAuthorization] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const isSmallLaptop = useMediaQuery(1100);
  const isTablet = useMediaQuery(998);

  const changeLanguage = useCallback((locale: string) => {
    i18n.changeLanguage(locale);

    const { route, asPath, query } = router;
    router.push({ pathname: route, query }, asPath, {
      locale,
    });
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTop > 0) {
      setIsHeaderActive(true);
    } else {
      setIsHeaderActive(false);
    }
    if (scrollTop > height) {
      setIsSearchBarTop(true);
    } else {
      setIsSearchBarTop(false);
    }
  }, [scrollTop]);

  return (
    <>
      <div
        className={cn(styles.container, {
          [styles.active]: isHeaderActive || isSecondHeader,
        })}
        data-aos-anchor-placement="center-bottom"
      >
        <div className="wrapper">
          <div className={styles.content}>
            <Link href="/" className={styles.logo}>
              <LogoSvg />
            </Link>
            {!isTablet && (
              <p className={styles.logoDescription}>
                {t(`general.headerDescription`)}
              </p>
            )}
            {(!isSearchBarTop || withoutSearchBar) &&
              (!isTablet || withoutSearchBar) &&
              !isSecondHeader && (
                <ul className={styles.list}>
                  {helpMenu.map(({ id, name, link }) => {
                    return (
                      <li
                        className={cn(
                          styles.item,
                          router.pathname === link && styles.active
                        )}
                        key={id}
                      >
                        <Link href={link} key={id}>
                          {t(name)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            {(isTablet || isSecondHeader) && !withoutSearchBar && (
              <SearchBar isSecondHeader={isSecondHeader} />
            )}

            {isSearchBarTop &&
              !isTablet &&
              !isSecondHeader &&
              !withoutSearchBar && <div className={styles.searchBar}></div>}

            <div className={styles.info}>
              <Link
                href="/wishlist"
                className={cn(
                  styles.wishlist,
                  {
                    [styles.small]:
                      !withoutSearchBar &&
                      (isSearchBarTop || isSmallLaptop || isSecondHeader),
                  },
                  router.pathname === "/wishlist" && styles.active
                )}
              >
                <span className={styles.icon}>
                  <StarSvg />
                </span>
                {(!isSearchBarTop || withoutSearchBar) &&
                  !isSmallLaptop &&
                  !isSecondHeader &&
                  `${t(`general.wishTitle`)}`}

                {!isSearchBarTop && isWishItems > 0 && (
                  <span className={styles.num}>{isWishItems}</span>
                )}
              </Link>

              <div className={styles.language}>
                <Select
                  options={languageListWithIcon}
                  classname="language-select"
                  language
                  onChange={changeLanguage}
                  chooseOption={languageListWithIcon.filter(
                    (item) => item.value === router.locale
                  )}
                />
              </div>
              <div className={styles.account}>
                <Account isSearchBarTop={isSearchBarTop} />
              </div>
              <div
                className={cn(
                  "default-button sm",
                  {
                    onlyIcon: isSearchBarTop || isSmallLaptop || isSecondHeader,
                  },
                  styles.button
                )}
                onClick={() => setIsOpenAuthorization(true)}
              >
                {isSearchBarTop || isSmallLaptop || isSecondHeader ? (
                  <AddSvg />
                ) : (
                  t(`general.createButton`)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenAuthorization && (
        <Modal
          closeModal={() => setIsOpenAuthorization(false)}
          type="authorization"
        >
          <Authorization />
        </Modal>
      )}
    </>
  );
};

export default Header;
