import { useState, FC, useEffect, useRef } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./menu.module.scss";
import useMediaQuery from "src/utils/useMediaQuery";
import OrdersIcon from "images/icons/orders-icon.svg";
import AdsIcon from "images/icons/ads-icon.svg";
import MessagesIcon from "images/icons/messages-icon.svg";
import SettingIcon from "images/icons/setting-icon.svg";
import LogOutIcon from "images/icons/log-out-icon.svg";
import AvatarIcon from "images/icons/avatar.svg";
import ArrowIcon from "images/icons/drop.svg";
import avatar from "images/main/avatar.png";

interface IProps {
  isNewMessages: number;
  isTopPosition: number;
  isLeftPosition: number;
  setIsOpenMenu: (bool: boolean) => void;
  isSearchBarTop: boolean;
}

const Menu: FC<IProps> = ({
  isNewMessages,
  isTopPosition,
  isLeftPosition,
  setIsOpenMenu,
  isSearchBarTop,
}) => {
  const [isAvatar, setIsAvatar] = useState(false);
  const isMobile = useMediaQuery(768);
  const containerRef = useRef(null);

  useEffect(() => {
    const onClick = (e) =>
      containerRef?.current.contains(e.target) || setIsOpenMenu(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      className={cn(styles.main, { [styles.searhTop]: isSearchBarTop })}
      style={{ top: `${isTopPosition}px`, left: `${isLeftPosition}px` }}
      ref={containerRef}
    >
      <Link href="/account-settings" className={styles.account}>
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
      </Link>
      <div className={styles.list}>
        {/* <Link href="/my-orders" className={styles.item}>
          <span className={styles.icon}>
            <OrdersIcon />
          </span>
          My orders
        </Link> */}
        <Link href="/my-ads" className={styles.item}>
          <span className={styles.icon}>
            <AdsIcon />
          </span>
          My ads
        </Link>
        <Link href="/my-messages" className={styles.item}>
          <span className={styles.icon}>
            <MessagesIcon />
          </span>
          My messages
          {isNewMessages > 0 && (
            <span className={styles.num}>{isNewMessages}</span>
          )}
        </Link>
        <Link href="/account-settings" className={styles.item}>
          <span className={styles.icon}>
            <SettingIcon />
          </span>
          Settings
        </Link>
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
