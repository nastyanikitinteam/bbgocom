import {
  useMemo,
  useContext,
  useEffect,
  useState,
  FC,
  useCallback,
} from "react";

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

import UsaIcon from "images/countries/usa.svg";
import RuIcon from "images/countries/russia.svg";
import ThailandIcon from "images/countries/thailand.svg";

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

  const langList = useMemo(
    () => [
      {
        value: "en",
        label: (
          <div className="option-withIcon">
            <UsaIcon />
            EN
          </div>
        ),
      },
      {
        value: "ru",
        label: (
          <div className="option-withIcon">
            <RuIcon />
            RU
          </div>
        ),
      },
      {
        value: "th",
        label: (
          <div className="option-withIcon">
            <ThailandIcon />
            TH
          </div>
        ),
      },
    ],
    []
  );

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
              <p className={styles.logoDescription}>{t(`headerDescription`)}</p>
            )}
            {(!isSearchBarTop || withoutSearchBar) &&
              (!isTablet || withoutSearchBar) &&
              !isSecondHeader && (
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <Link href="/help">Help</Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="/advertise-with-us">Advertise with us</Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="/rules">Rules</Link>
                  </li>
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
                className={cn(styles.wishlist, {
                  [styles.small]:
                    !withoutSearchBar &&
                    (isSearchBarTop || isSmallLaptop || isSecondHeader),
                })}
              >
                <span className={styles.icon}>
                  <StarSvg />
                </span>
                {(!isSearchBarTop || withoutSearchBar) &&
                  !isSmallLaptop &&
                  !isSecondHeader &&
                  `${t(`wishTitle`)}`}

                {!isSearchBarTop && isWishItems > 0 && (
                  <span className={styles.num}>{isWishItems}</span>
                )}
              </Link>

              <div className={styles.language}>
                <Select
                  options={langList}
                  classname="language-select"
                  language
                  onChange={changeLanguage}
                  chooseOption={langList.filter(
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
                    onlyIcon: isSearchBarTop || isTablet || isSecondHeader,
                  },
                  styles.button
                )}
                onClick={() => setIsOpenAuthorization(true)}
              >
                {isSearchBarTop || isTablet || isSecondHeader ? (
                  <AddSvg />
                ) : (
                  t(`createButton`)
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
