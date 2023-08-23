import { useState } from "react";
import styles from "./header-mobile.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "components/SearchBar/SearchBar";
import cn from "classnames";

import CreateAdIcon from "images/icons/Greate-Ad-mobile.svg";
import HomeIcon from "images/icons/Home-mobile.svg";
import MessageIcon from "images/icons/Message-mobile.svg";
import ProfileIcon from "images/icons/Profile-mobile.svg";
import WishlistIcon from "images/icons/Wishlist-mobile.svg";

const Header = () => {
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div
          className={cn(styles.menu, { [styles.openMenu]: isOpenProfileMenu })}
        >
          <a href="" className={styles.item}>
            <HomeIcon />
          </a>
          <a href="" className={styles.item}>
            <WishlistIcon />
          </a>
          <a href="" className={styles.item}>
            <CreateAdIcon />
          </a>
          <a href="" className={styles.item}>
            <MessageIcon />
          </a>
          <div
            className={cn(styles.item, { [styles.aсtive]: isOpenProfileMenu })}
            onClick={() => setIsOpenProfileMenu((prev) => !prev)}
          >
            <ProfileIcon />
          </div>
        </div>
        {isOpenProfileMenu && <MobileMenu />}
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
