import { useEffect, useMemo, useState, useRef, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Main from "./Main/Main";
import MapContainer from "./MapContainer/MapContainer";
import Filter from "./Filter/Filter";
import styles from "./category-filter-page.module.scss";
import cn from "classnames";

import { useDispatch } from "react-redux";
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
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [isOpenFullMap, setIsOpenFullMap] = useState(false);
  const [isMapWidth, setIsMapWidth] = useState(null);
  const blockRef = useRef(null);
  const isMobile = useMediaQuery(768);
  const isLaptop = useMediaQuery(1400);

  useEffect(() => {
    !isMobile && setIsOpenFilter(false);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const width = blockRef.current.getBoundingClientRect().width;
        setIsMapWidth((window.innerWidth - width - 7) / 2);
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

  const handleFooterHeader = (val) => {
    handleHeaderState(val);
    handleFooterState(val);
  };

  useEffect(() => {
    if (isMobile) {
      setIsOpenFilter(false);
      isOpenMap ? handleFooterHeader(true) : handleFooterHeader(false);
    }
  }, [isOpenMap]);

  useEffect(() => {
    if (isMobile) {
      isOpenFilter ? handleFooterState(true) : handleFooterState(false);
    }
  }, [isOpenFilter]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content} ref={blockRef}>
          {(!isMobile || isOpenFilter) && (
            <div className={styles.info}>
              <Filter addWidth={isMapWidth} setIsOpenFilter={setIsOpenFilter} />
            </div>
          )}
          {!isOpenFilter && (
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
                    ? isSubcategoryItem.title
                    : isSubcategories
                    ? isSubcategories.title
                    : isCurrentList.title
                }
                openFilter={() => setIsOpenFilter(true)}
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
              setIsOpenFilter={setIsOpenFilter}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilterPage;
