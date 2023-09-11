import { useMemo, useContext, useEffect, useState, FC } from "react";

import Link from "next/link";
import useMediaQuery from "src/utils/useMediaQuery";
import ThemeContext from "src/context";
import Authorization from "components/Authorization/Authorization";
import Modal from "components/Modal/Modal";

import Account from "./Account/Account";
import SearchBar from "components/SearchBar/SearchBar";
import styles from "./header.module.scss";
import LogoSvg from "images/main/logo.svg";
import StarSvg from "images/icons/star.svg";
import AddSvg from "images/icons/add-icon.svg";

import cn from "classnames";
import Select from "components/Select/Select";

interface IProps {
  isSecondHeader: boolean;
}

const Header: FC<IProps> = ({ isSecondHeader }) => {
  const { height } = useContext(ThemeContext);

  const [scrollTop, setScrollTop] = useState(0);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isSearchBarTop, setIsSearchBarTop] = useState(false);
  const [isWishItems, setIsWishItems] = useState(0);
  const [isOpenAuthorization, setIsOpenAuthorization] = useState(false);

  const isTablet = useMediaQuery(998);

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
            <div className={styles.logo}>
              <LogoSvg />
            </div>
            {!isTablet && (
              <p className={styles.logoDescription}>
                Service of Private Advertisements
              </p>
            )}

            {!isSearchBarTop && !isTablet && !isSecondHeader && (
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a>Help</a>
                </li>
                <li className={styles.item}>
                  <a>Advertise with us</a>
                </li>
                <li className={styles.item}>
                  <Link href="/rules">Rules</Link>
                </li>
              </ul>
            )}
            {(isTablet || isSecondHeader) && (
              <SearchBar isSecondHeader={isSecondHeader} />
            )}

            {isSearchBarTop && !isTablet && !isSecondHeader && (
              <div className={styles.searchBar}></div>
            )}

            <div className={styles.info}>
              <div
                className={cn(styles.wishlist, {
                  [styles.small]: isSearchBarTop || isTablet || isSecondHeader,
                })}
              >
                <span className={styles.icon}>
                  <StarSvg />
                </span>
                {!isSearchBarTop &&
                  !isTablet &&
                  !isSecondHeader &&
                  "My Whishlist"}
                {!isSearchBarTop && isWishItems > 0 && (
                  <span className={styles.num}>{isWishItems}</span>
                )}
              </div>

              <div className={styles.language}>
                <Select
                  options={langList}
                  classname="language-select"
                  language
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
                  " Create an Ad"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenAuthorization && (
        <Modal closeModal={setIsOpenAuthorization} type="authorization">
          <Authorization />
        </Modal>
      )}
    </>
  );
};

export default Header;
