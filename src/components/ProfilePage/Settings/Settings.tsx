import { useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import useMediaQuery from "src/utils/useMediaQuery";
import Block from "./Block/Block";
import AccountBlock from "../InfoBlock/AccountBlock/AccountBlock";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import styles from "./settings.module.scss";

import { AccountInfo } from "./config";
import { useTranslation } from "react-i18next";

import ArrowSvg from "images/icons/drop.svg";
import LogOutIcon from "images/icons/log-out-icon.svg";
import DeleteIcon from "images/icons/delete.svg";
import AvatarIcon from "images/icons/avatar.svg";

const Settings = () => {
  const isMobile = useMediaQuery(768);
  const [isActiveItem, setIsActiveItem] = useState(0);
  const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);
  const [isActiveLogOutModal, setIsActiveLogOutModal] = useState(false);
  const [isOpenParam, setIsOpenParam] = useState(false);
  const { t } = useTranslation();

  const router = useRouter();

  const handleParam = (id) => {
    setIsOpenParam(true);
    setIsActiveItem(id);
  };

  const back = () => {
    if (isOpenParam) {
      setIsOpenParam(false);
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.container}>
      {isMobile ? (
        <>
          <div className={styles.top}>
            <div className="back" onClick={back}>
              <span className="arrow">
                <ArrowSvg />
              </span>
              {t(`general.back`)}
            </div>
            <h3 className={styles.title}>
              {isOpenParam
                ? AccountInfo[isActiveItem].title
                : t(`profile.accountSettings`)}
            </h3>
          </div>
          <div className={styles.content}>
            {isOpenParam ? (
              AccountInfo.filter(({ id }) => id === isActiveItem).map(
                ({ id, title, items }) => {
                  return (
                    <Block
                      key={id}
                      items={items}
                      title={t(title)}
                      setIsOpenParam={setIsOpenParam}
                    />
                  );
                }
              )
            ) : (
              <>
                <AccountBlock />
                <div className={styles.main}>
                  {AccountInfo.map(({ id, title }) => {
                    return (
                      <div
                        className={styles.item}
                        key={id}
                        onClick={() => handleParam(id)}
                      >
                        <h3 className={styles.subtitle}>{t(title)}</h3>
                        <span className={styles.arrow}>
                          <ArrowSvg />
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div
                  className={styles.logOut}
                  onClick={() => setIsActiveLogOutModal(true)}
                >
                  <span className={styles.icon}>
                    <LogOutIcon />
                  </span>
                  {t(`general.logOut`)}
                </div>
                <div
                  className={styles.del}
                  onClick={() => setIsActiveDeleteModal(true)}
                >
                  <span className={styles.icon}>
                    <DeleteIcon />
                  </span>
                  {t(`general.deleteAccount`)}
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        AccountInfo.map(({ id, title, items }) => {
          return <Block title={t(title)} items={items} key={id} />;
        })
      )}
      {isActiveDeleteModal && (
        <Modal
          closeModal={() => setIsActiveDeleteModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={() => setIsActiveDeleteModal(false)}
            event={t(`general.delete`)}
            description="Are you sure you want to delete your account?"
            title={t(`general.delete`)}
            icon={<AvatarIcon />}
          />
        </Modal>
      )}
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
    </div>
  );
};

export default Settings;
