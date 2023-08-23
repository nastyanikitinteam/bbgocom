import { useState, FC, useRef, useEffect } from "react";
import PortalContainer from "components/PortalContainer/PortalContainer";
import cn from "classnames";
import Menu from "./Menu/Menu";
import styles from "./account.module.scss";

import avatar from "images/main/avatar.png";
import AvatarIcon from "images/icons/avatar.svg";
import LoginIcon from "images/icons/login.svg";

interface IProps {
  isSearchBarTop: boolean;
}

const Account: FC<IProps> = ({ isSearchBarTop }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAvatar, setIsAvatar] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isNewMessages, setIsNewMessages] = useState(3);

  const [isPosition, setPosition] = useState(null);
  const [isTopPosition, setTopPosition] = useState(null);
  const [isLeftPosition, setIsLeftPosition] = useState(0);

  const accountRef = useRef();

  useEffect(() => {
    // @ts-ignore
    setPosition(accountRef.current.getBoundingClientRect());
  }, [isOpenMenu, isSearchBarTop]);

  useEffect(() => {
    setTopPosition(isPosition?.top + isPosition?.height + 10);
    setIsLeftPosition(isPosition?.left - 147);
  }, [isPosition]);

  useEffect(() => {
    const handleWindowResize = () => {
      // @ts-ignore
      setPosition(accountRef.current.getBoundingClientRect());
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={styles.container}>
      {isNewMessages > 0 && <span className={styles.num}>{isNewMessages}</span>}
      <div
        className={cn(styles.avatar, { [styles.noAvatar]: !isAvatar })}
        onClick={() => setIsOpenMenu((prev) => !prev)}
        ref={accountRef}
      >
        {isLogin ? (
          isAvatar ? (
            <img src={avatar.src} alt="" />
          ) : (
            <AvatarIcon />
          )
        ) : (
          <LoginIcon />
        )}
      </div>
      {isOpenMenu && (
        <PortalContainer>
          <Menu
            isNewMessages={isNewMessages}
            isTopPosition={isTopPosition}
            isLeftPosition={isLeftPosition}
            setIsOpenMenu={setIsOpenMenu}
          />
          {/* <div
          className={cn(
            styles.content,
            { [styles.active]: isOpenMenu },
            { [styles.small]: isHeaderActive }
          )}
        >
          <Menu isNewMessages={isNewMessages} />
        </div> */}
        </PortalContainer>
      )}
    </div>
  );
};

export default Account;
