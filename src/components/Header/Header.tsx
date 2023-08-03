import { useMemo, useContext, useEffect, useState } from "react";
import Link from "next/link";
import ThemeContext from "src/context";

import Account from "./Account/Account";
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
    <div className={cn(styles.container, { [styles.active]: isHeaderActive })}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.logo}>
            <LogoSvg />
          </div>
          <p className={styles.logoDescription}>
            Service of Private Advertisements
          </p>
          {!isSearchBarTop && (
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

          {isSearchBarTop && <div className={styles.searchBar}></div>}

          <div className={styles.info}>
            <div
              className={cn(styles.wishlist, {
                [styles.small]: isSearchBarTop,
              })}
            >
              <span className={styles.icon}>
                <StarSvg />
              </span>
              {!isSearchBarTop && "My Whishlist"}
            </div>

            <div className={styles.language}>
              <Select options={langList} classname="language-select" language />
            </div>
            <div className={styles.account}>
              <Account />
            </div>
            <a
              href="#"
              className={cn("default-button sm", { onlyIcon: isSearchBarTop })}
            >
              {isSearchBarTop ? <AddSvg /> : " Create an Ad"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
