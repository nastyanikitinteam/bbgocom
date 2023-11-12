import { FC, useState, useEffect } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import CardProduct from "components/CardProduct/CardProduct";
import SortBy from "components/SearchBar/Price/PriceMain/SortBy/SortBy";
import { productList } from "components/MainPage/Recommend/config";
import styles from "./main.module.scss";
import { useTranslation } from "react-i18next";
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
  breadCrumbs: any;
}

const Main: FC<IProps> = ({
  title,
  openFilter,
  setIsOpenMap,
  isOpenMap,
  breadCrumbs,
}) => {
  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);
  const [isHorizontalShow, setIsHorizontalShow] = useState(false);
  const [isShowProducts, setIsShowProducts] = useState(6);
  const [isCount, setIsCount] = useState(6);
  const [dataSort, setDataSort] = useState({});
  const { t } = useTranslation();

  const handleClickSort = (key, value) => {
    setDataSort((prev) => ({ ...prev, [key]: value }));
  };

  const handleShowProducts = () => {
    if (isShowProducts + isCount <= productList.length) {
      setIsShowProducts(isShowProducts + isCount);
    } else {
      setIsShowProducts(productList.length);
    }
  };

  useEffect(() => {
    setIsCount(4);
  }, [isTablet]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <BreadCrumbs crumbs={breadCrumbs} />

        {!isOpenMap && !isMobile && (
          <div
            className={cn(styles.toMap, "link")}
            onClick={() => setIsOpenMap(true)}
          >
            <span className={styles.icon}>
              <MapIcon />
            </span>
            {t(`general.showOnMap`)}
          </div>
        )}
      </div>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.info}>
        <p className={styles.description}>
          12,215 {t(`category.unitsAvailable`)}
        </p>
        {isMobile && (
          <div
            className={cn(styles.toMap, "link")}
            onClick={() => setIsOpenMap(true)}
          >
            <span className={styles.icon}>
              <MapIcon />
            </span>
            {t(`general.showOnMap`)}
          </div>
        )}
        {!isMobile && (
          <div className={styles.filter}>
            {!isTablet && !isOpenMap && (
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
                dataPrice={dataSort}
                handleClickPrice={handleClickSort}
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
          {t(`searchbar.filter`)}
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
        {productList
          .slice(0, isShowProducts)
          .map(
            ({ id, name, slug, images, price, oldPrice, location, isWish }) => {
              return (
                <div className={styles.block} key={id}>
                  <CardProduct
                    id={id}
                    title={name}
                    slug={slug}
                    images={images}
                    price={price}
                    oldPrice={oldPrice}
                    location={location}
                    isWish={isWish}
                    isHorizontal={isHorizontalShow}
                    isOpenMap={isOpenMap}
                  ></CardProduct>
                </div>
              );
            }
          )}
      </div>

      {isShowProducts !== productList.length && (
        <div className={styles.all} onClick={handleShowProducts}>
          {t(`general.viewMore`)}
          <span className={styles.icon}>
            <ArrowSvg />
          </span>
        </div>
      )}
    </div>
  );
};

export default Main;
