import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Main from "./Main/Main";
import Info from "./Info/Info";
import MessagesIcon from "images/icons/messages-big.svg";
import styles from "./chat.module.scss";
import useMediaQuery from "src/utils/useMediaQuery";

import { chatLists, sellChatList } from "./config";
import { useTranslation } from "react-i18next";

import ArrowSvg from "images/icons/drop.svg";

const Chat = () => {
  const { t } = useTranslation();
  const [isActiveChat, setIsActiveChat] = useState(false);
  const [isActiveChatID, setIsActiveChatID] = useState();
  const [isActiveChatList, setIsActiveChatList] = useState(chatLists);
  const [isActiveCategory, setIsActiveCategory] = useState("Buy");

  const isSmallLaptop = useMediaQuery(1200);
  const isMobile = useMediaQuery(768);

  const router = useRouter();

  const back = () => {
    router.back();
  };

  useEffect(() => {
    if (isActiveCategory === "Buy") {
      setIsActiveChatList(chatLists);
    } else {
      setIsActiveChatList(sellChatList);
    }
  }, [isActiveCategory]);

  return (
    <div className={styles.container}>
      {isMobile && !isActiveChat && (
        <div className={styles.top}>
          <div className="back" onClick={back}>
            <span className="arrow">
              <ArrowSvg />
            </span>
            {t(`general.back`)}
          </div>
          <h3 className={styles.title}>My Messages</h3>
        </div>
      )}
      {isSmallLaptop ? (
        <>
          {isActiveChat ? (
            <div className={styles.main}>
              <Main
                isActiveChatID={isActiveChatID}
                chatLists={isActiveChatList}
                setIsActiveChat={setIsActiveChat}
              />
            </div>
          ) : (
            <div className={styles.info}>
              <Info
                setIsActiveChat={setIsActiveChat}
                setIsActiveChatID={setIsActiveChatID}
                chatLists={isActiveChatList}
                isActiveChatID={isActiveChatID}
                setIsActiveCategory={setIsActiveCategory}
                isActiveCategory={isActiveCategory}
              />
            </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.main}>
            {isActiveChat ? (
              <Main
                isActiveChatID={isActiveChatID}
                chatLists={isActiveChatList}
              />
            ) : (
              <div className={styles.empty}>
                <div className={styles.image}>
                  <MessagesIcon />
                </div>
                <h3 className={styles.subtitle}>Select a message to read it</h3>
              </div>
            )}
          </div>
          <div className={styles.info}>
            <Info
              setIsActiveChat={setIsActiveChat}
              setIsActiveChatID={setIsActiveChatID}
              chatLists={isActiveChatList}
              isActiveChatID={isActiveChatID}
              setIsActiveCategory={setIsActiveCategory}
              isActiveCategory={isActiveCategory}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
