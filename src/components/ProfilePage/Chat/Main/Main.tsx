import { FC, useRef, useEffect, useState } from "react";
import cn from "classnames";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./main.module.scss";
import Message from "../Message/Message";
import Modal from "components/Modal/Modal";
import DeleteChat from "./DeleteChat/DeleteChat";
import BlockChat from "./BlockChat/BlockChat";
import Ad from "./Ad/Ad";
import Bottom from "./Bottom/Bottom";

import BlockIcon from "images/icons/block.svg";
import DeleteIcon from "images/icons/delete.svg";
import ArrowSvg from "images/icons/drop.svg";

interface IProps {
  isActiveChatID: number;
  chatLists: any;
  setIsActiveChat?: (bool: boolean) => void;
}
const Main: FC<IProps> = ({ isActiveChatID, chatLists, setIsActiveChat }) => {
  const [isOpenDel, setIsOpenDel] = useState(false);
  const [isOpenBlockModal, setIsOpenBlockModal] = useState(false);
  const [isCurrentChat, setIsCurrent] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const isMobile = useMediaQuery(768);
  const containerRef = useRef();

  const back = () => {
    setIsActiveChat(false);
  };

  useEffect(() => {
    if (containerRef.current) {
      //@ts-ignore
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [isActiveChatID]);

  useEffect(() => {
    setIsCurrent(chatLists.filter(({ id }) => id === isActiveChatID));
  }, [isActiveChatID]);

  return (
    <>
      {isCurrentChat &&
        //@ts-ignore
        isCurrentChat.map(
          ({ id, name, avatar, timeOnline, title, cover, messages, isNew }) => {
            return (
              <div
                className={cn(styles.container, {
                  [styles.withFiles]: selectedFiles.length !== 0,
                })}
                key={id}
              >
                <div className={styles.top}>
                  {isMobile && (
                    <div className={cn("back", styles.back)} onClick={back}>
                      <span className="arrow">
                        <ArrowSvg />
                      </span>
                      Back
                    </div>
                  )}
                  {!isMobile && (
                    <div className={styles.avatar}>
                      <img src={avatar} alt="" />
                    </div>
                  )}
                  <div className={styles.info}>
                    <p className={styles.name}> {name}</p>
                    {!isMobile && (
                      <p className={styles.onlineStatus}>
                        Online:{" "}
                        <span className={styles.onlineTime}>{timeOnline}</span>
                      </p>
                    )}
                  </div>
                  <div className={styles.buttons}>
                    <div
                      className={cn(
                        "default-button border onlyIcon",
                        styles.button
                      )}
                      onClick={() => setIsOpenBlockModal(true)}
                    >
                      <BlockIcon />
                    </div>
                    <div
                      className={cn(
                        "default-button border onlyIcon",
                        styles.button
                      )}
                      onClick={() => setIsOpenDel(true)}
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                </div>

                <div className={styles.main}>
                  <Ad cover={cover} title={title} />
                  <div className={styles.list} ref={containerRef}>
                    {messages.map((item, id) => {
                      return (
                        <Message
                          key={id}
                          userIsSender={item.userIsSender}
                          text={item.text}
                          time={item.time}
                          date={item.date}
                          name={name}
                          images={item.images}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className={styles.bottom}>
                  <Bottom
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                  />
                </div>
              </div>
            );
          }
        )}

      {isOpenDel && (
        <Modal
          closeModal={() => setIsOpenDel(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <DeleteChat
            cancel={() => setIsOpenDel(false)}
            item={isCurrentChat[0]}
          />
        </Modal>
      )}
      {isOpenBlockModal && (
        <Modal
          closeModal={() => setIsOpenBlockModal(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <BlockChat
            cancel={() => setIsOpenBlockModal(false)}
            item={isCurrentChat[0]}
          />
        </Modal>
      )}
    </>
  );
};

export default Main;
