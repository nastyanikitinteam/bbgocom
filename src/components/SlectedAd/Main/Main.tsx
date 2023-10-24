import { FC, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShareModal from "../ShareModal/ShareModal";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import DetailedInformation from "./DetailedInformation/DetailedInformation";
import Description from "./Description/Description";
import Location from "./Location/Location";
import Modal from "components/Modal/Modal";
import Top from "./Top/Top";
import Info from "./Info/Info";
import Images from "./Images/Images";
import styles from "./main.module.scss";
import cn from "classnames";

import bannerImg from "images/main-page/banner.png";
import ArrowSvg from "images/icons/drop.svg";

interface IProps {
  isCurrentProduct: any;
}

const Main: FC<IProps> = ({ isCurrentProduct }) => {
  const [isShareModal, setIsShareModal] = useState(false);
  const [isOpenWishModal, setIsOpenWishModal] = useState(false);
  const router = useRouter();

  const handleShareModal = useCallback(() => {
    setIsShareModal((prev) => !prev);
  }, []);

  const handleWihlist = useCallback(() => {
    !isCurrentProduct.isWish ? setIsOpenWishModal(true) : console.log("delete");
  }, []);

  const back = () => {
    router.back();
  };

  return (
    <>
      <section>
        <div className="wrapper">
          <div className={styles.container}>
            <div className={styles.back} onClick={back}>
              <span className={styles.icon}>
                <ArrowSvg />
              </span>
              Back
            </div>
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
              <div className={styles.left}>
                <DetailedInformation isCurrentProduct={isCurrentProduct} />
                <Description isCurrentProduct={isCurrentProduct} />
              </div>
              <div className={styles.right}>
                <AdvertisingBanner bannerImg={bannerImg.src} noPadding />
                <Location isCurrentLocation={isCurrentProduct.location} />
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
