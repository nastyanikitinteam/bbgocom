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
    fn: () => handleProfileMenu(),
  },
];
