import { useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import useMediaQuery from "src/utils/useMediaQuery";
import Block from "./Block/Block";
import AccountBlock from "../InfoBlock/AccountBlock/AccountBlock";
import styles from "./settings.module.scss";

import { AccountInfo } from "./config";

import ArrowSvg from "images/icons/drop.svg";
import LogOutIcon from "images/icons/log-out-icon.svg";
import DeleteIcon from "images/icons/delete.svg";

const Settings = () => {
  const isMobile = useMediaQuery(768);
  const [isActiveItem, setIsActiveItem] = useState(0);
  const [isOpenParam, setIsOpenParam] = useState(false);

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
              Back
            </div>
            <h3 className={styles.title}>
              {isOpenParam
                ? AccountInfo[isActiveItem].title
                : "Account settings"}
            </h3>
          </div>
          {isOpenParam ? (
            AccountInfo.filter(({ id }) => id === isActiveItem).map(
              ({ id, title, items }) => {
                return (
                  <Block
                    key={id}
                    items={items}
                    title={title}
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
                      <h3 className={styles.subtitle}>{title}</h3>
                      <span className={styles.arrow}>
                        <ArrowSvg />
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className={styles.logOut}>
                <span className={styles.icon}>
                  <LogOutIcon />
                </span>
                Log Out
              </div>
              <div className={styles.del}>
                <span className={styles.icon}>
                  <DeleteIcon />
                </span>
                Delete account
              </div>
            </>
          )}
        </>
      ) : (
        AccountInfo.map(({ id, title, items }) => {
          return <Block title={title} items={items} key={id} />;
        })
      )}
    </div>
  );
};

export default Settings;
