import { useMemo, useState, useEffect, useRef, FC } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./wish-list-page.module.scss";
import DropMenu from "components/DropMenu/DropMenu";
import Modal from "components/Modal/Modal";
import NewWishList from "components/WishPage/NewWishList/NewWishList";
import Share from "components/Share/Share";
import CardProduct from "components/CardProduct/CardProduct";
import { wishlistArr } from "components/WishPage/Lists/config";
import { IWishlist, initialWishlist } from "src/interfaces/wishlists";
import cn from "classnames";

import ArrowIcon from "images/icons/drop.svg";
import ShareIcon from "images/icons/share.svg";
import EditIcon from "images/icons/edit.svg";
import DelIcon from "images/icons/delete.svg";
import MapIcon from "images/icons/map-icon.svg";

interface IProps {
  activeSlug: string | string[];
}

const WishListPage: FC<IProps> = ({ activeSlug }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [isCurrentList, setIsCurrentList] =
    useState<IWishlist>(initialWishlist);
  const router = useRouter();
  const blockRef = useRef(null);
  const [isMapWidth, setIsMapWidth] = useState(null);
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const width = blockRef.current.getBoundingClientRect().width;
        setIsMapWidth((window.innerWidth - width - 7) / 2);
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
                {isMobile && (
                  <div className={cn(styles.back, "back")} onClick={back}>
                    <span className="arrow">
                      <ArrowIcon />
                    </span>
                    Back
                  </div>
                )}
                <h1 className={styles.title}>{isCurrentList.name}</h1>
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
            <div className={cn(styles.main, { [styles.open]: isOpenMap })}>
              {!isMobile && (
                <div className={cn(styles.back, "back")} onClick={back}>
                  <span className="arrow">
                    <ArrowIcon />
                  </span>
                  Back
                </div>
              )}

              <div className={styles.info}>
                {!isMobile && (
                  <div className={styles.top}>
                    <h1 className={styles.title}>{isCurrentList.name}</h1>
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
                <p className={styles.ads}>
                  {isCurrentList.items.length} ads
                  {isMobile && (
                    <div
                      className={styles.toMap}
                      onClick={() => setIsOpenMap(true)}
                    >
                      <span className={styles.icon}>
                        <MapIcon />
                      </span>
                      To map
                    </div>
                  )}
                </p>
                {isCurrentList.description && (
                  <p className={styles.description}>
                    {isCurrentList.description}
                  </p>
                )}
              </div>
              <div className={styles.list}>
                {isCurrentList.items.map(
                  ({ id, name, images, price, oldPrice, location }) => {
                    return (
                      <div
                        className={styles.block}
                        key={id}
                        data-aos-anchor-placement="top-bottom"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <CardProduct
                          title={name}
                          images={images}
                          price={price}
                          oldPrice={oldPrice}
                          location={location}
                          isWish={true}
                        ></CardProduct>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className={cn(styles.map, { [styles.open]: isOpenMap })}>
              <div
                className={styles.button}
                onClick={() => setIsOpenMap((prev) => !prev)}
              >
                <ArrowIcon />
              </div>
              <div
                className={styles.mapBlock}
                style={{
                  width: `calc(100% + ${isMapWidth}px)`,
                }}
              ></div>
            </div>
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
        >
          <Share isModal />
        </Modal>
      )}
    </>
  );
};

export default WishListPage;
