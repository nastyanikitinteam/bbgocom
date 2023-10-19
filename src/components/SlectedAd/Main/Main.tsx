import { FC, useCallback, useEffect, useState } from "react";
import styles from "./main.module.scss";
import ShareModal from "../ShareModal/ShareModal";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import Modal from "components/Modal/Modal";
import Top from "./Top/Top";
import Images from "./Images/Images";
import cn from "classnames";

interface IProps {
  isCurrentProduct: any;
}

const Main: FC<IProps> = ({ isCurrentProduct }) => {
  const [isShareModal, setIsShareModal] = useState(false);
  const [isOpenWishModal, setIsOpenWishModal] = useState(false);

  const handleShareModal = useCallback(() => {
    setIsShareModal((prev) => !prev);
  }, []);

  const handleWihlist = useCallback(() => {
    !isCurrentProduct.isWish ? setIsOpenWishModal(true) : console.log("delete");
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className="wrapper">
          <Top
            isCurrentProduct={isCurrentProduct}
            handleShareModal={handleShareModal}
            handleWihlist={handleWihlist}
          />
          <div className={styles.content}>
            <div className={styles.left}>
              <Images isCurrentProduct={isCurrentProduct} />
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
      {isOpenWishModal && (
        <Modal
          closeModal={() => setIsOpenWishModal(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          {!isCurrentProduct.isWish && (
            <AddToWishList cancel={() => setIsOpenWishModal(false)} />
          )}
        </Modal>
      )}
    </>
  );
};

export default Main;
