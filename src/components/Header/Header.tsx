import { useMemo } from "react";
import Link from "next/link";
import Account from "./Account/Account";
import styles from "./header.module.scss";
import LogoSvg from "images/main/logo.svg";
import StarSvg from "images/icons/star.svg";

import cn from "classnames";
import Select from "components/Select/Select";

const Header = () => {
  const langList = [
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
              <Select options={langList} classname="language-select" language />
            </div>
            <div className={styles.account}>
              <Account />
            </div>
            <a href="#" className="default-button sm">
              Create an Ad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
