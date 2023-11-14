import { useState, FC, useEffect, useRef } from "react";
import Link from "next/link";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import LogOutIcon from "images/icons/log-out-icon.svg";
import styles from "./menu.module.scss";
import useMediaQuery from "src/utils/useMediaQuery";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import { accountMenu } from "config/menu";
import { useRouter } from "next/router";
import AvatarIcon from "images/icons/avatar.svg";
import ArrowIcon from "images/icons/drop.svg";
import avatar from "images/main/avatar.png";

interface IProps {
  isNewMessages: number;
  isTopPosition: number;
  isLeftPosition: number;
  setIsOpenMenu: (bool: boolean) => void;
  isSearchBarTop: boolean;
}

const Menu: FC<IProps> = ({
  isNewMessages,
  isTopPosition,
  isLeftPosition,
  setIsOpenMenu,
  isSearchBarTop,
}) => {
  const [isActiveLogOutModal, setIsActiveLogOutModal] = useState(false);
  const [isAvatar, setIsAvatar] = useState(false);
  const isMobile = useMediaQuery(768);
  const containerRef = useRef(null);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    const onClick = (e) =>
      containerRef?.current.contains(e.target) || setIsOpenMenu(false);
    document.addEventListener("click", onClick);
    return () => !isMobile && document.removeEventListener("click", onClick);
  }, [isMobile]);

  return (
    <>
      <div
        className={cn(styles.main, { [styles.searhTop]: isSearchBarTop })}
        style={{ top: `${isTopPosition}px`, left: `${isLeftPosition}px` }}
        ref={containerRef}
      >
        <Link href="/account-settings" className={styles.account}>
          <div className={cn(styles.avatar, { [styles.noAvatar]: !isAvatar })}>
            {isAvatar ? <img src={avatar.src} alt="" /> : <AvatarIcon />}
          </div>
          <div className={styles.info}>
            <p className={styles.name}>Alex1236</p>
            <p className={styles.date}> {t(`general.from`)} April 2023</p>
          </div>
          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
        </Link>
        <div className={styles.list}>
          {accountMenu.map(({ id, icon, name, link }) => {
            return (
              <Link
                href={link}
                className={cn(
                  styles.item,
                  router.pathname === link && styles.active
                )}
              >
                <span className={styles.icon}>{icon}</span>
                {t(name)}
              </Link>
            );
          })}
        </div>
        <div
          className={cn(styles.item, styles.logout)}
          onClick={() => setIsActiveLogOutModal(true)}
        >
          <span className={styles.icon}>
            <LogOutIcon />
          </span>
          {t(`general.logOut`)}
        </div>
      </div>
      {isActiveLogOutModal && (
        <Modal
          closeModal={() => setIsActiveLogOutModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={() => setIsActiveLogOutModal(false)}
            event={t(`general.logOut`)}
            description={t(`profile.confirmLogOut`)}
            title={t(`general.logOut`)}
            icon={<LogOutIcon />}
          />
        </Modal>
      )}
    </>
  );
};

export default Menu;
