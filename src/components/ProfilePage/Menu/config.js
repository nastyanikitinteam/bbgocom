import OrdersIcon from "images/icons/orders-icon.svg";
import AdsIcon from "images/icons/ads-icon.svg";
import MessagesIcon from "images/icons/messages-icon.svg";
import SettingIcon from "images/icons/setting-icon.svg";
import NotificationIcon from "images/icons/notifications-icon.svg";
import WalletIcon from "images/icons/wallet-icon.svg";
import ReviewedProductsIcon from "images/icons/reviewedProducts-icon.svg";
import ReviewsIcon from "images/icons/reviews-icon.svg";
import HelpIcon from "images/icons/help-icon.svg";

export const menuList = [
  // {
  //   id: 0,
  //   name: "My orders",
  //   icon: <OrdersIcon />,
  //   link: "/orders",
  // },
  {
    id: 1,
    name: "profile.myAds",
    icon: <AdsIcon />,
    link: "/my-ads",
  },
  {
    id: 10,
    name: "profile.myMessages",
    icon: <MessagesIcon />,
    link: "/my-messages",
    isNew: 2,
  },
  {
    id: 2,
    name: "profile.wallet",
    icon: <WalletIcon />,
    link: "/wallet",
  },
  {
    id: 3,
    name: "profile.reviews",
    icon: <ReviewsIcon />,
    link: "/reviews",
  },
  {
    id: 4,
    name: "profile.reviewedProducts",
    icon: <ReviewedProductsIcon />,
    link: "/reviewed-products",
  },
  {
    id: 5,
    name: "profile.notifications",
    icon: <NotificationIcon />,
    link: "/notifications",
    isNew: 5,
  },
  {
    id: 6,
    name: "profile.settings",
    icon: <SettingIcon />,
    link: "/account-settings",
  },
  // {
  //   id: 7,
  //   name: "Help",
  //   icon: <HelpIcon />,
  //   link: "/help",
  // },
];
export const mobileMenuList = [
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
    link: "/reviewed-products",
  },
  {
    id: 5,
    name: "Notifications",
    icon: <NotificationIcon />,
    link: "/notifications",
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
];
