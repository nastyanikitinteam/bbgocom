import CreateAdIcon from "images/icons/Greate-Ad-mobile.svg";
import HomeIcon from "images/icons/Home-mobile.svg";
import MessageIcon from "images/icons/Message-mobile.svg";
import ProfileIcon from "images/icons/Profile-mobile.svg";
import WishlistIcon from "images/icons/Wishlist-mobile.svg";
import AdsIcon from "images/icons/ads-icon.svg";
import SettingIcon from "images/icons/setting-icon.svg";
import React from "react";

export const mobileMenu = [
  {
    id: 0,
    icon: <HomeIcon />,
    link: "/",
  },
  {
    id: 1,
    icon: <WishlistIcon />,
    link: "/wishlist",
  },
  {
    id: 2,
    icon: <CreateAdIcon />,
    link: "/create-an-ad",
  },
  {
    id: 3,
    icon: <MessageIcon />,
    link: "/my-messages",
  },
  {
    id: 4,
    icon: <ProfileIcon />,
    fn: true,
  },
];

export const helpMenu = [
  {
    id: 0,
    name: "general.help",
    link: "/help",
  },
  {
    id: 1,
    name: "general.advertiseWithUs",
    link: "/advertise-with-us",
  },
  {
    id: 2,
    name: "general.rules",
    link: "/rules",
  },
];

export const accountMenu = [
  {
    id: 0,
    icon: <AdsIcon />,
    link: "/my-ads",
    name: "profile.myAds",
  },
  {
    id: 1,
    icon: <MessageIcon />,
    link: "/my-messages",
    name: "profile.myMessages",
  },
  {
    id: 2,
    icon: <SettingIcon />,
    link: "/account-settings",
    name: "profile.settings",
  },
];
