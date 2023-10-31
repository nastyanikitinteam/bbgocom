import { FC, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";
import ShareProduct from "components/Modal/ShareProduct/ShareProduct";
import AddToWishList from "components/Modal/AddToWishList/AddToWishList";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import DetailedInformation from "./DetailedInformation/DetailedInformation";
import Description from "./Description/Description";
import Location from "./Location/Location";
import Modal from "components/Modal/Modal";
// import FixedMobileBlock from "./FixedMobileBlock/FixedMobileBlock";
import Top from "./Top/Top";
import Info from "./Info/Info";
import Sliders from "./Sliders/Sliders";
import SliderMobile from "./Sliders/SliderMobile";
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
  const isMobile = useMediaQuery(768);
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
              {!isMobile && "Back"}
            </div>
            {isMobile && (
              <SliderMobile isCurrentProductImages={isCurrentProduct.images} />
            )}
            <Top
              isCurrentProduct={isCurrentProduct}
              handleShareModal={handleShareModal}
              handleWihlist={handleWihlist}
            />
            <div className={styles.content}>
              {!isMobile && (
                <div className={styles.left}>
                  <Sliders isCurrentProductImages={isCurrentProduct.images} />
                </div>
              )}
              {isMobile && (
                <div className={styles.price}>
                  <h2 className={styles.mainPrice}>{isCurrentProduct.price}</h2>
                  {isCurrentProduct.oldPrice && (
                    <p className={styles.oldPrice}>
                      {isCurrentProduct.oldPrice}
                    </p>
                  )}
                </div>
              )}
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
        <Modal
          closeModal={handleShareModal}
          type="successful"
          mobileIsBottom
          otherCloseIcon
        >
          <ShareProduct
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
