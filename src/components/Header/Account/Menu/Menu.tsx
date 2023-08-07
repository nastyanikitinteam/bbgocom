import { useState } from "react";
import cn from "classnames";
import styles from "./menu.module.scss";

import OrdersIcon from "images/icons/orders-icon.svg";
import AdsIcon from "images/icons/ads-icon.svg";
import MessagesIcon from "images/icons/messages-icon.svg";
import SettingIcon from "images/icons/setting-icon.svg";
import LogOutIcon from "images/icons/log-out-icon.svg";
import AvatarIcon from "images/icons/avatar.svg";
import ArrowIcon from "images/icons/drop.svg";
import avatar from "images/main/avatar.png";

const Menu = () => {
  const [isAvatar, setIsAvatar] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.account}>
        <div className={cn(styles.avatar, { [styles.noAvatar]: !isAvatar })}>
          {isAvatar ? <img src={avatar.src} alt="" /> : <AvatarIcon />}
        </div>
        <div className={styles.info}>
          <p className={styles.name}>Alex1236</p>
          <p className={styles.date}>From April 2023</p>
        </div>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <span className={styles.icon}>
            <OrdersIcon />
          </span>
          My orders
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>
            <AdsIcon />
          </span>
          My ads
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>
            <MessagesIcon />
          </span>
          My messages
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>
            <SettingIcon />
          </span>
          Settings
        </div>
      </div>
      <div className={cn(styles.item, styles.logout)}>
        <span className={styles.icon}>
          <LogOutIcon />
        </span>
        Log Out
      </div>
    </div>
  );
};

export default Menu;
