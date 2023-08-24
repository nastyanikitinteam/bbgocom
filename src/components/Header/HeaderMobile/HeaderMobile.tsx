import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (isOpenProfileMenu) {
      console.log("work");
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
    return () => {
      document.body.classList.remove("hidden");
    };
  }, [isOpenProfileMenu]);

  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div
          className={cn(styles.menu, { [styles.openMenu]: isOpenProfileMenu })}
        >
          <div className={styles.item}>
            <HomeIcon />
          </div>
          <div className={styles.item}>
            <WishlistIcon />
          </div>
          <div className={styles.item}>
            <CreateAdIcon />
          </div>
          <div className={styles.item}>
            <MessageIcon />
          </div>
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
