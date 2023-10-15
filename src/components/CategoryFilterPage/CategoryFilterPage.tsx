import { useEffect, useMemo, useState, useRef, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Main from "./Main/Main";
import MapContainer from "./MapContainer/MapContainer";
import Filter from "./Filter/Filter";
import styles from "./category-filter-page.module.scss";
import cn from "classnames";
import { productLst } from "components/MainPage/Recommend/config";

import { useDispatch, useSelector } from "react-redux";
import { IFilterReducer, setIsCategoryFilterOpen } from "./reducer";
import { IReducer } from "../../reducers";
import { setHeaderHidden, setFooterHidden } from "components/Layout/reducer";

interface IProps {
  isCurrentList?: any;
  isSubcategories?: any;
  isSubcategoryItem?: any;
  breadCrumbs?: any;
}

const CategoryFilterPage: FC<IProps> = ({
  isCurrentList,
  isSubcategories,
  isSubcategoryItem,
  breadCrumbs,
}) => {
  const dispatch = useDispatch();
  const { isCategoryFilterOpen } = useSelector<IReducer, IFilterReducer>(
    (state) => state.categoryFilter
  );
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [isOpenFullMap, setIsOpenFullMap] = useState(false);
  const [isMapWidth, setIsMapWidth] = useState(null);
  const blockRef = useRef(null);
  const isMobile = useMediaQuery(768);
  const isLaptop = useMediaQuery(1400);

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
    if (!isLaptop) {
      handleResize();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHeaderState = (val) => {
    dispatch(setHeaderHidden(val));
  };

  const handleFooterState = (val) => {
    dispatch(setFooterHidden(val));
  };

  const handleFilterState = (val) => {
    dispatch(setIsCategoryFilterOpen(val));
  };

  const handleFilter = (val) => {
    handleFilterState(val);
  };

  const handleFooterHeader = (val) => {
    handleHeaderState(val);
    handleFooterState(val);
  };

  useEffect(() => {
    if (isMobile) {
      isOpenMap ? handleFooterHeader(true) : handleFooterHeader(false);
    }
  }, [isOpenMap]);

  useEffect(() => {
    !isMobile && handleFilter(false);
  }, [isMobile]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content} ref={blockRef}>
          {(!isMobile || isCategoryFilterOpen) && (
            <div className={styles.info}>
              <Filter addWidth={isMapWidth} />
            </div>
          )}
          {!isCategoryFilterOpen && (
            <div
              className={cn(
                styles.main,
                { [styles.open]: isOpenMap },
                { [styles.hidden]: isOpenFullMap }
              )}
            >
              <Main
                title={
                  isSubcategoryItem
                    ? isSubcategoryItem?.title
                    : isSubcategories
                    ? isSubcategories?.title
                    : isCurrentList?.title
                }
                openFilter={() => handleFilter(true)}
                isOpenMap={isOpenMap}
                setIsOpenMap={setIsOpenMap}
                breadCrumbs={breadCrumbs}
              />
            </div>
          )}
          {isOpenMap && (
            <MapContainer
              setIsOpenFullMap={setIsOpenFullMap}
              isOpenFullMap={isOpenFullMap}
              setIsOpenMap={setIsOpenMap}
              isMapWidth={isMapWidth}
              isOpenMap={isOpenMap}
              handleFilter={handleFilter}
              productList={productLst}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilterPage;
