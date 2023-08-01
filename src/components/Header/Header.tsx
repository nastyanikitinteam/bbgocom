import { useMemo } from "react";
import Link from "next/link";
import Select from "react-select";
import Account from "./Account/Account";

import styles from "./header.module.scss";
import LogoSvg from "images/main/logo.svg";
import StarSvg from "images/icons/star.svg";
import LanguageSvg from "images/icons/language.svg";

import cn from "classnames";

const Header = () => {
  const langList = [
    {
      value: "EN",
      label: <div className="default-item">EN</div>,
    },
    {
      value: "RU",
      label: <div className="default-item">RU</div>,
    },
    {
      value: "TH",
      label: <div className="default-item">TH</div>,
    },
  ];

  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.logo}>
            <LogoSvg />
          </div>
          <p className={styles.logoDescription}>
            Service of Private Advertisements
          </p>
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

          <div className={styles.info}>
            <div className={styles.wishlist}>
              <span className={styles.icon}>
                <StarSvg />
              </span>
              My Whishlist
            </div>

            <div className={styles.language}>
              <span className={styles.icon}>
                <LanguageSvg />
              </span>
              <Select
                options={langList}
                defaultValue={langList[0]}
                className={cn("default-select language-select", styles.lang)}
                classNamePrefix="default"
                isSearchable={false}
              />
            </div>
            <div className={styles.account}>
              <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
