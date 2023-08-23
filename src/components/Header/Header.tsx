import { useMemo, useContext, useEffect, useState } from "react";

import Link from "next/link";
import useMediaQuery from "src/utils/useMediaQuery";
import ThemeContext from "src/context";

import Account from "./Account/Account";
import SearchBar from "components/SearchBar/SearchBar";
import styles from "./header.module.scss";
import LogoSvg from "images/main/logo.svg";
import StarSvg from "images/icons/star.svg";
import AddSvg from "images/icons/add-icon.svg";

import cn from "classnames";
import Select from "components/Select/Select";

const Header = () => {
  const { height } = useContext(ThemeContext);

  const [scrollTop, setScrollTop] = useState(0);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isSearchBarTop, setIsSearchBarTop] = useState(false);
  const [isWishItems, setIsWishItems] = useState(0);

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
    <div
      className={cn(styles.container, { [styles.active]: isHeaderActive })}
      data-aos-anchor-placement="center-bottom"
      data-aos="fade-down"
      data-aos-delay="300"
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

          {!isSearchBarTop && !isTablet && (
            <ul className={styles.list}>
              <li className={styles.item}>
                <a>Help</a>
              </li>
              <li className={styles.item}>
                <a>Advertise with us</a>
              </li>
              <li className={styles.item}>
                <a>Rules</a>
              </li>
            </ul>
          )}
          {isTablet && <SearchBar />}

          {isSearchBarTop && !isTablet && (
            <div className={styles.searchBar}></div>
          )}

          <div className={styles.info}>
            <div
              className={cn(styles.wishlist, {
                [styles.small]: isSearchBarTop || isTablet,
              })}
            >
              <span className={styles.icon}>
                <StarSvg />
              </span>
              {!isSearchBarTop && !isTablet && "My Whishlist"}
              {!isSearchBarTop && isWishItems > 0 && (
                <span className={styles.num}>{isWishItems}</span>
              )}
            </div>

            <div className={styles.language}>
              <Select options={langList} classname="language-select" language />
            </div>
            <div className={styles.account}>
              <Account isSearchBarTop={isSearchBarTop} />
            </div>
            <a
              href="#"
              className={cn(
                "default-button sm",
                {
                  onlyIcon: isSearchBarTop || isTablet,
                },
                styles.button
              )}
            >
              {isSearchBarTop || isTablet ? <AddSvg /> : " Create an Ad"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
