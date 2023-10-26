import { useState, useEffect, FC, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  IFilterReducer,
  setIsCategoryFilterOpen,
} from "components/CategoryFilterPage/reducer";
import { IReducer } from "../../../reducers";
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
  mobileWithoutBottomMenu?: boolean;
}

const HeaderMobile: FC<IProps> = ({
  mobileWithoutSearchBar,
  mobileWithoutBottomMenu,
}) => {
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
  const [isNoLogin, setIsNoLogin] = useState(true);
  const { isCategoryFilterOpen } = useSelector<IReducer, IFilterReducer>(
    (state) => state.categoryFilter
  );
  const router = useRouter();

  useEffect(() => {
    if (isOpenProfileMenu) {
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
    return () => {
      document.body.classList.remove("hidden");
    };
  }, [isOpenProfileMenu]);

  const handleProfileMenu = () => {
    setIsOpenProfileMenu((prev) => !prev);
  };

  const mobileMenu = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className={styles.container}>
      <div className="wrapper">
        {!mobileWithoutBottomMenu && !isCategoryFilterOpen && (
          <div
            className={cn(styles.menu, {
              [styles.openMenu]: isOpenProfileMenu,
            })}
          >
            {mobileMenu.map(({ id, icon, link, fn }) => {
              return !fn ? (
                <Link
                  href={link}
                  className={cn(
                    styles.item,
                    router.pathname == link &&
                      !isOpenProfileMenu && [styles.active]
                  )}
                  key={id}
                  onClick={isOpenProfileMenu && handleProfileMenu}
                >
                  {icon}
                </Link>
              ) : (
                <div
                  className={cn(styles.item, {
                    [styles.active]: isOpenProfileMenu,
                  })}
                  key={id}
                  onClick={fn}
                >
                  {icon}
                </div>
              );
            })}
          </div>
        )}

        {isOpenProfileMenu &&
          (!isNoLogin ? (
            <MobileMenu />
          ) : (
            <Authorization setIsNoLogin={() => setIsNoLogin(false)} />
          ))}
        {!mobileWithoutSearchBar && <SearchBar />}
      </div>
    </div>
  );
};

export default HeaderMobile;
