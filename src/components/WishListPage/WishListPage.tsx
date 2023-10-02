import { useMemo, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./wish-list-page.module.scss";
import DropMenu from "components/DropMenu/DropMenu";
import Modal from "components/Modal/Modal";
import NewWishList from "components/WishPage/NewWishList/NewWishList";
import Share from "components/Share/Share";
import CardProduct from "components/CardProduct/CardProduct";
import { wishlistArr } from "components/WishPage/Lists/config";
import cn from "classnames";

import ArrowIcon from "images/icons/drop.svg";
import ShareIcon from "images/icons/share.svg";
import EditIcon from "images/icons/edit.svg";
import DelIcon from "images/icons/delete.svg";
import MapIcon from "images/icons/map-icon.svg";

const WishListPage = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);
  const router = useRouter();
  const blockRef = useRef(null);
  const [isMapWidth, setIsMapWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const width = blockRef.current.getBoundingClientRect().width;
        setIsMapWidth((window.innerWidth - width) / 2);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const back = () => {
    router.back();
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

  return (
    <>
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.content} ref={blockRef}>
            <div className={styles.main}>
              {!isOpenMap && (
                <div
                  className={cn("link", styles.showMap)}
                  onClick={() => setIsOpenMap((prev) => !prev)}
                >
                  <span className={cn("icon", styles.icon)}>
                    <MapIcon />
                  </span>
                  Show to map
                </div>
              )}

              <div className={cn(styles.back, "back")} onClick={back}>
                <span className="arrow">
                  <ArrowIcon />
                </span>
                Back
              </div>
              <div className={styles.info}>
                <div className={styles.top}>
                  <h1 className={styles.title}>{wishlistArr[0].name}</h1>
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
                <p className={styles.ads}>{wishlistArr[0].items.length} ads</p>
                <p className={styles.description}>
                  {wishlistArr[0].description}
                </p>
              </div>
              <div className={styles.list}>
                {wishlistArr[0].items.map(
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
                        ></CardProduct>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            {isOpenMap && (
              <div className={styles.map}>
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
            )}
          </div>
        </div>
      </section>
      {isOpenEdit && (
        <Modal
          closeModal={() => setIsOpenEdit(false)}
          type="successful"
          otherCloseIcon
        >
          <NewWishList
            cancel={() => setIsOpenEdit(false)}
            item={wishlistArr[0]}
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
