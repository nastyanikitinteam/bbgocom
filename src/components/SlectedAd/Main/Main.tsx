import { FC, useCallback, useEffect, useState } from "react";
import styles from "./main.module.scss";
import ShareModal from "../ShareModal/ShareModal";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import Modal from "components/Modal/Modal";
import Top from "./Top/Top";
import Info from "./Info/Info";
import Images from "./Images/Images";
import cn from "classnames";

import bannerImg from "images/main-page/banner.png";

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
              <Images isCurrentProductImages={isCurrentProduct.images} />
            </div>
            <div className={styles.right}>
              <Info isCurrentProduct={isCurrentProduct} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <AdvertisingBanner bannerImg={bannerImg.src} noPadding />
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
