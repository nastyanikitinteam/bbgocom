import { useState } from "react";
import cn from "classnames";
import Menu from "./Menu/Menu";
import styles from "./account.module.scss";

import avatar from "images/main/avatar.png";
import AvatarIcon from "images/icons/avatar.svg";
import LoginIcon from "images/icons/login.svg";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAvatar, setIsAvatar] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.container}>
      <div className={cn(styles.avatar, { [styles.noAvatar]: !isAvatar })}>
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
      <div className={cn(styles.content, { [styles.active]: isOpenMenu })}>
        <Menu />
      </div>
    </div>
  );
};

export default Account;
