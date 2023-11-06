import { useState, useEffect, FC } from "react";
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
import { mobileMenu } from "config/menu";

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
              return fn ? (
                <div
                  className={cn(styles.item, {
                    [styles.active]: isOpenProfileMenu,
                  })}
                  key={id}
                  onClick={handleProfileMenu}
                >
                  {icon}
                </div>
              ) : (
                <Link
                  href={link}
                  className={cn(
                    styles.item,
                    router.pathname == link &&
                      !isOpenProfileMenu &&
                      styles.active
                  )}
                  key={id}
                  onClick={isOpenProfileMenu && handleProfileMenu}
                >
                  {icon}
                </Link>
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
