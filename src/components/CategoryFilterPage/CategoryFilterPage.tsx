import { useEffect, useMemo, useState, useRef, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Main from "./Main/Main";
import MapContainer from "./MapContainer/MapContainer";
import Map from "components/Map/Map";
import Filter from "./Filter/Filter";
import styles from "./category-filter-page.module.scss";
import cn from "classnames";

import ArrowIcon from "images/icons/drop.svg";
import CloseIcon from "images/icons/modal-close.svg";

interface IProps {
  isCurrentList?: any;
  isSubcategories?: any;
  isSubcategoryItem?: any;
}

const CategoryFilterPage: FC<IProps> = ({
  isCurrentList,
  isSubcategories,
  isSubcategoryItem,
}) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [isOpenFullMap, setIsOpenFullMap] = useState(false);
  const [isMapWidth, setIsMapWidth] = useState(null);
  const blockRef = useRef(null);
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    !isMobile && setIsOpenFilter(false);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (blockRef.current) {
        const width = blockRef.current.getBoundingClientRect().width;
        setIsMapWidth((window.innerWidth - width) / 2);
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

  useEffect(() => {
    isMobile && setIsOpenFilter(false);
  }, [isOpenMap]);

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
