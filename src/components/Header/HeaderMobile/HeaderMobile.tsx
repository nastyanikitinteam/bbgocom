import { useState, useEffect, FC } from "react";
import styles from "./header-mobile.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "components/SearchBar/SearchBar";
import Authorization from "components/Authorization/Authorization";
import cn from "classnames";

import CreateAdIcon from "images/icons/Greate-Ad-mobile.svg";
import HomeIcon from "images/icons/Home-mobile.svg";
import MessageIcon from "images/icons/Message-mobile.svg";
import ProfileIcon from "images/icons/Profile-mobile.svg";
import WishlistIcon from "images/icons/Wishlist-mobile.svg";

interface IProps {
  mobileWithoutSearchBar?: boolean;
}

const HeaderMobile: FC<IProps> = ({ mobileWithoutSearchBar }) => {
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
  const [isOpenAuthorization, setIsOpenAuthorization] = useState(false);

  useEffect(() => {
    if (isOpenProfileMenu || isOpenAuthorization) {
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
          className={cn(styles.menu, {
            [styles.openMenu]: isOpenProfileMenu || isOpenAuthorization,
          })}
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
          {/* <div
            className={cn(styles.item, {
              [styles.aсtive]: isOpenProfileMenu || isOpenAuthorization,
            })}
            onClick={() => setIsOpenAuthorization((prev) => !prev)}
          >
            <ProfileIcon />
          </div> */}
          <div
            className={cn(styles.item, { [styles.aсtive]: isOpenProfileMenu })}
            onClick={() => setIsOpenProfileMenu((prev) => !prev)}
          >
            <ProfileIcon />
          </div>
        </div>
        {isOpenAuthorization && <Authorization />}
        {isOpenProfileMenu && <MobileMenu />}
        {!mobileWithoutSearchBar && <SearchBar />}
      </div>
    </div>
  );
};

export default HeaderMobile;
