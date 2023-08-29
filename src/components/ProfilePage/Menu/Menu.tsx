import { useMemo, useState, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";

import cn from "classnames";
import styles from "./menu.module.scss";

import OrdersIcon from "images/icons/orders-icon.svg";
import AdsIcon from "images/icons/ads-icon.svg";
import MessagesIcon from "images/icons/messages-icon.svg";
import SettingIcon from "images/icons/setting-icon.svg";
import NotificationIcon from "images/icons/notifications-icon.svg";
import WalletIcon from "images/icons/wallet-icon.svg";
import ReviewedProductsIcon from "images/icons/reviewedProducts-icon.svg";
import ReviewsIcon from "images/icons/reviews-icon.svg";
import HelpIcon from "images/icons/help-icon.svg";
import LogOutIcon from "images/icons/log-out-icon.svg";

const Menu = () => {
  const isMobile = useMediaQuery(768);
  const router = useRouter();

  const menuList = useMemo(
    () => [
      {
        id: 0,
        name: "My orders",
        icon: <OrdersIcon />,
        link: "/orders",
      },
      {
        id: 1,
        name: "My ads",
        icon: <AdsIcon />,
        link: "/my-ads",
      },
      {
        id: 2,
        name: "Wallet",
        icon: <WalletIcon />,
        link: "/wallet",
      },
      {
        id: 3,
        name: "Reviews",
        icon: <ReviewsIcon />,
        link: "/reviews",
      },
      {
        id: 4,
        name: "Reviewed products",
        icon: <ReviewedProductsIcon />,
        link: "/reviwes-products",
      },
      {
        id: 5,
        name: "Notifications",
        icon: <NotificationIcon />,
        link: "/notification",
        isNew: 5,
      },
      {
        id: 6,
        name: "Settings",
        icon: <SettingIcon />,
        link: "/account-settings",
      },
      {
        id: 7,
        name: "Help",
        icon: <HelpIcon />,
        link: "/help",
      },
    ],
    []
  );

  return (
    <div className={styles.block}>
      {menuList.map(({ id, name, icon, link, isNew }) => {
        return (
          <Link
            href={link}
            key={id}
            className={cn(
              styles.item,
              router.pathname == link && [styles.active]
            )}
          >
            <span className={styles.icon}>{icon}</span>
            {name}
            {isNew > 0 && <span className={styles.num}>{isNew}</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
