import { useState, useEffect } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./account-block.module.scss";
import Modal from "components/Modal/Modal";
import Share from "components/Share/Share";

import ShareIcon from "images/icons/share.svg";
import LogOutIcon from "images/icons/log-out-icon.svg";
import avatar from "images/main/avatar.png";
import AvatarIcon from "images/icons/avatar.svg";
import PhotoIcon from "images/icons/photo.svg";

const AccountBlock = () => {
  const [isAvatar, setIsAvatar] = useState(true);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const [isFile, setIsFile] = useState();
  const isMobile = useMediaQuery(768);

  const handleFile = (e) => {
    console.log(e);
  };

  // useEffect(() => {
  //   console.log(isFile);
  // }, [isFile]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.share} onClick={() => setIsOpenShare(true)}>
          <ShareIcon />
        </div>
        <div className={styles.avatar}>
          {isAvatar ? (
            <img src={avatar.src} alt="" />
          ) : (
            <span className={styles.avatarIcon}>
              <AvatarIcon />
            </span>
          )}
          <label className={styles.addPhoto}>
            <span className={styles.icon}>
              <PhotoIcon />
            </span>
            <input
              id="image-input"
              type="file"
              accept=".png,.jpg,.jpeg,.gif"
              onInput={(e) => {
                handleFile(e);
              }}
            />
          </label>
        </div>
        <h3 className={styles.name}>Kimhan Nakpradith</h3>
        <p className={styles.date}>From April 2023</p>
        {!isMobile && (
          <div className={styles.logOut}>
            <span className={styles.icon}>
              <LogOutIcon />
            </span>
            Log Out
          </div>
        )}
      </div>
      {isOpenShare && (
        <Modal
          closeModal={() => setIsOpenShare(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <Share isModal />
        </Modal>
      )}
    </>
  );
};

export default AccountBlock;
