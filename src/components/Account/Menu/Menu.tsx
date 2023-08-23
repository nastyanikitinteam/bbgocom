import { useMemo, useState } from "react";
import styles from "./menu.module.scss";
import cn from "classnames";

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
  const [isActive, setIsActive] = useState("");

  const menuList = useMemo(
    () => [
      {
        id: 0,
        name: "My orders",
        icon: <OrdersIcon />,
        link: "",
      },
      {
        id: 1,
        name: "My ads",
        icon: <AdsIcon />,
        link: "",
      },
      {
        id: 2,
        name: "Wallet",
        icon: <WalletIcon />,
        link: "",
      },
      {
        id: 3,
        name: "Reviews",
        icon: <ReviewsIcon />,
        link: "",
      },
      {
        id: 4,
        name: "Reviewed products",
        icon: <ReviewedProductsIcon />,
        link: "",
      },
      {
        id: 5,
        name: "Notifications",
        icon: <NotificationIcon />,
        link: "",
        isNew: 5,
      },
      {
        id: 6,
        name: "Settings",
        icon: <SettingIcon />,
        link: "",
      },
      {
        id: 7,
        name: "Help",
        icon: <HelpIcon />,
        link: "",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      {menuList.map(({ id, name, icon, link, isNew }) => {
        return (
          <div
            key={id}
            className={cn(styles.item, { [styles.active]: isActive === name })}
          >
            <span className={styles.icon}>{icon}</span>
            {name}
            {isNew > 0 && <span className={styles.num}>{isNew}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
