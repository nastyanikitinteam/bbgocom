import styles from "./header-mobile.module.scss";

import CreateAdIcon from "images/icons/Greate-Ad-mobile.svg";
import HomeIcon from "images/icons/Home-mobile.svg";
import MessageIcon from "images/icons/Message-mobile.svg";
import ProfileIcon from "images/icons/Profile-mobile.svg";
import WishlistIcon from "images/icons/Wishlist-mobile.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
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
        <a href="" className={styles.item}>
          <ProfileIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
