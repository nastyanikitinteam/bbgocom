import CreateAdIcon from "images/icons/Greate-Ad-mobile.svg";
import HomeIcon from "images/icons/Home-mobile.svg";
import MessageIcon from "images/icons/Message-mobile.svg";
import ProfileIcon from "images/icons/Profile-mobile.svg";
import WishlistIcon from "images/icons/Wishlist-mobile.svg";
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
