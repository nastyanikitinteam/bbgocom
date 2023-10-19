import { FC, useCallback, useEffect, useState } from "react";
import styles from "./main.module.scss";
import ShareModal from "../ShareModal/ShareModal";
import Modal from "components/Modal/Modal";

import StarIcon from "images/icons/star.svg";
import ShareIcon from "images/icons/share.svg";

interface IProps {
  isCurrentProduct: any;
}

const Main: FC<IProps> = ({ isCurrentProduct }) => {
  const [isShareModal, setIsShareModal] = useState(false);

  const handleShareModal = useCallback(() => {
    setIsShareModal((prev) => !prev);
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className="wrapper">
          <div className={styles.top}>
            <h2 className={styles.title}>{isCurrentProduct.name}</h2>
            <div className={styles.actions}>
              <div className={styles.action}>
                <StarIcon />
              </div>
              <div className={styles.action} onClick={handleShareModal}>
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isShareModal && (
        <Modal closeModal={handleShareModal} type="successful">
          <ShareModal
            closeModal={handleShareModal}
            isCurrentProduct={isCurrentProduct}
          />
        </Modal>
      )}
    </>
  );
};

export default Main;
