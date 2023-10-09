import { FC, useState, useMemo } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import CardProduct from "components/CardProduct/CardProduct";
import SortBy from "components/SearchBar/Price/PriceMain/SortBy/SortBy";
import { productLst } from "components/MainPage/Recommend/config";
import styles from "./main.module.scss";
import cn from "classnames";

import HorizonalIcon from "images/icons/typeOfShow-2.svg";
import BlocksIcon from "images/icons/typeOfShow-1.svg";
import ArrowSvg from "images/icons/drop.svg";
import MapIcon from "images/icons/map-icon.svg";
interface IProps {
  title: string;
  openFilter: () => void;
  setIsOpenMap: (bool: any) => void;
  isOpenMap?: boolean;
}

const Main: FC<IProps> = ({ title, openFilter, setIsOpenMap, isOpenMap }) => {
  const [isHorizontalShow, setIsHorizontalShow] = useState(false);
  const [dataPrice, setDataPrice] = useState({});
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(5);

  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);

  const handleClickPrice = (key, value) => {
    setDataPrice((prev) => ({ ...prev, [key]: value }));
  };

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: "Home",
        url: "/",
      },
      {
        id: 0,
        title: "Child and Adolescent Therapy",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <BreadCrumbs crumbs={breadCrumbs} />
      <h2 className={styles.title}>{title}</h2>
      <div
        className={styles.toMap}
        onClick={() => setIsOpenMap((prev) => !prev)}
      >
        <span className={styles.icon}>
          <MapIcon />
        </span>
        To map
      </div>
      <div className={styles.info}>
        <p className={styles.description}>12,215 units avaliable</p>

        {/* {isMobile && (
          <div className={styles.toMap} onClick={() => setIsOpenMap(true)}>
            <span className={styles.icon}>
              <MapIcon />
            </span>
            To map
          </div>
        )} */}
        {!isMobile && (
          <div className={styles.filter}>
            {!isTablet && (
              <>
                <div
                  className={cn(styles.filterButton, {
                    [styles.active]: !isHorizontalShow,
                  })}
                  onClick={() => setIsHorizontalShow(false)}
                >
                  <BlocksIcon />
                </div>
                <div
                  className={cn(styles.filterButton, {
                    [styles.active]: isHorizontalShow,
                  })}
                  onClick={() => setIsHorizontalShow(true)}
                >
                  <HorizonalIcon />
                </div>
              </>
            )}

            <div className={styles.sort}>
              <SortBy
                dataPrice={dataPrice}
                handleClickPrice={handleClickPrice}
                withoutLabel
              />
            </div>
          </div>
        )}
      </div>
      {isMobile && (
        <div className={styles.filterOpen} onClick={openFilter}>
          <span className={styles.icon}>
            <MapIcon />
          </span>
          Filter
          <span className={styles.arrow}>
            <ArrowSvg />
          </span>
        </div>
      )}
      <div
        className={cn(
          styles.main,
          {
            [styles.isHorizontal]: isHorizontalShow,
          },
          { [styles.openMap]: isOpenMap }
        )}
      >
        {productLst.map(
          ({ id, name, images, price, oldPrice, location, isWish }) => {
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
                  location={location.name}
                  isWish={isWish}
                  isHorizontal={isHorizontalShow}
                ></CardProduct>
              </div>
            );
          }
        )}
      </div>
      <div
        className={styles.all}
        onClick={() => setIsViewAll((prev) => !prev)}
        data-aos-anchor-placement="center-bottom"
        data-aos="fade"
        data-aos-delay="300"
      >
        {/* {isViewAll ? "Hide latest deals" : "View all latest deals"} */}
        View more
        <span className={cn(styles.icon, { [styles.open]: isViewAll })}>
          <ArrowSvg />
        </span>
      </div>
    </div>
  );
};

export default Main;
