import { useMemo, useState, useEffect, useRef, FC } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./wish-list-page.module.scss";
import DropMenu from "components/DropMenu/DropMenu";
import MapContainer from "./MapContainer/MapContainer";
import Main from "./Main/Main";
import Modal from "components/Modal/Modal";
import NewWishList from "components/Modal/NewWishList/NewWishList";
import Share from "components/Share/Share";
import Confirm from "components/Modal/Confirm/Confirm";
import { wishlistArr } from "components/WishPage/Lists/config";
import { IWishlist, initialWishlist } from "src/interfaces/wishlists";
import cn from "classnames";

import ArrowIcon from "images/icons/drop.svg";
import ShareIcon from "images/icons/share.svg";
import EditIcon from "images/icons/edit.svg";
import DelIcon from "images/icons/delete.svg";
import StarIcon from "images/icons/delete-star.svg";

interface IProps {
  activeSlug: string | string[];
}

const WishListPage: FC<IProps> = ({ activeSlug }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);
  const [isOpenFullMap, setIsOpenFullMap] = useState(false);
  const [isCurrentList, setIsCurrentList] =
    useState<IWishlist>(initialWishlist);
  const router = useRouter();
  const blockRef = useRef(null);
  const [isMapWidth, setIsMapWidth] = useState(null);
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const buttonIsVisible = window.visualViewport.width < window.innerWidth;
        const width = blockRef.current.getBoundingClientRect().width;
        buttonIsVisible
          ? setIsMapWidth((window.innerWidth - width - 7) / 2)
          : setIsMapWidth((window.innerWidth - width) / 2);
      }
    };
    if (!isMobile) {
      handleResize();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const back = () => {
    if (isOpenMap && isMobile) {
      setIsOpenMap(false);
    } else {
      router.back();
    }
  };

  const dropMenuList = useMemo(
    () => [
      {
        id: 0,
        title: "Edit",
        icon: <EditIcon />,
        fn: () => setIsOpenEdit(true),
      },
      {
        id: 1,
        title: "Delete",
        icon: <DelIcon />,
        fn: () => setIsOpenDel(true),
      },
    ],
    []
  );

  useEffect(() => {
    const currentItem = wishlistArr.filter(({ slug }) => slug === activeSlug);
    // @ts-ignore
    setIsCurrentList(currentItem[0] || initialWishlist);
  }, [activeSlug]);

  return (
    <>
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.content} ref={blockRef}>
            {isMobile && (
              <div className={styles.top}>
                <div className={cn(styles.back, "back")} onClick={back}>
                  <span className="arrow">
                    <ArrowIcon />
                  </span>
                  Back
                </div>
                <h1 className={styles.title}>
                  {isOpenMap ? "Map" : isCurrentList.name}
                </h1>
                <div className={styles.actions}>
                  <button
                    className={styles.share}
                    onClick={() => setIsOpenShare(true)}
                  >
                    <ShareIcon />
                  </button>
                  <DropMenu list={dropMenuList} />
                </div>
              </div>
            )}
            {!isMobile && (
              <>
                <Main
                  isOpenFullMap={isOpenFullMap}
                  back={back}
                  isCurrentList={isCurrentList}
                  setIsOpenShare={() => setIsOpenShare(true)}
                  setIsOpenMap={() => setIsOpenMap(true)}
                  dropMenuList={dropMenuList}
                />
                <MapContainer
                  setIsOpenFullMap={setIsOpenFullMap}
                  isOpenFullMap={isOpenFullMap}
                  setIsOpenMap={setIsOpenMap}
                  isMapWidth={isMapWidth}
                  isOpenMap={isOpenMap}
                  isWishList
                  productList={isCurrentList.items}
                />
              </>
            )}

            {isMobile && (
              <>
                {!isOpenMap && (
                  <Main
                    isOpenFullMap={isOpenFullMap}
                    back={back}
                    isCurrentList={isCurrentList}
                    setIsOpenShare={() => setIsOpenShare(true)}
                    setIsOpenMap={() => setIsOpenMap(true)}
                    dropMenuList={dropMenuList}
                  />
                )}
                {isOpenMap && (
                  <MapContainer
                    setIsOpenFullMap={setIsOpenFullMap}
                    isOpenFullMap={isOpenFullMap}
                    setIsOpenMap={setIsOpenMap}
                    isMapWidth={isMapWidth}
                    isOpenMap={isOpenMap}
                    isWishList
                    productList={isCurrentList.items}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </section>
      {isOpenEdit && (
        <Modal
          closeModal={() => setIsOpenEdit(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <NewWishList
            cancel={() => setIsOpenEdit(false)}
            item={isCurrentList}
          />
        </Modal>
      )}
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
      {isOpenDel && (
        <Modal
          closeModal={() => setIsOpenDel(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={() => setIsOpenDel(false)}
            event="Delete"
            description={`Do you want to delete wishlist <span> ${isCurrentList?.name}? </span>`}
            title="Delete Wishlist"
            icon={<StarIcon />}
          />
        </Modal>
      )}
    </>
  );
};

export default WishListPage;
