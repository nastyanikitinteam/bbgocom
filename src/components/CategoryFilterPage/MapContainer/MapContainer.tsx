import { FC } from "react";
import Map from "components/Map/Map";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./map-container.module.scss";
import cn from "classnames";

import ArrowIcon from "images/icons/drop.svg";
import CloseIcon from "images/icons/modal-close.svg";
import FilterIcon from "images/icons/filter-icon.svg";

interface IProps {
  setIsOpenFullMap: (bool: any) => void;
  setIsOpenMap: (bool: boolean) => void;
  handleFilter: (bool: boolean) => void;
  isOpenFullMap: boolean;
  isOpenMap: boolean;
  isMapWidth: string;
}

const MapContainer: FC<IProps> = ({
  setIsOpenFullMap,
  handleFilter,
  setIsOpenMap,
  isOpenFullMap,
  isOpenMap,
  isMapWidth,
}) => {
  const isMobile = useMediaQuery(768);

  const closeMap = () => {
    setIsOpenMap(false);
    setIsOpenFullMap(false);
  };

  const openFilter = () => {
    closeMap();
    handleFilter(true);
  };

  return (
    <>
      <div className={cn(styles.container, { [styles.full]: isOpenFullMap })}>
        {isMobile && (
          <div className={styles.top}>
            {isMobile && (
              <div className={cn(styles.back, "back")} onClick={closeMap}>
                <span className="arrow">
                  <ArrowIcon />
                </span>
                Back
              </div>
            )}
            <h1 className={styles.title}>Map</h1>
            <div className={styles.actions}>
              <button className={styles.filter} onClick={openFilter}>
                <FilterIcon />
              </button>
            </div>
          </div>
        )}
        {!isMobile && (
          <div
            className={styles.button}
            onClick={() => setIsOpenFullMap((prev) => !prev)}
          >
            <ArrowIcon />
          </div>
        )}

        <div
          className={styles.mapBlock}
          style={{
            width: `calc(100% + ${isMapWidth}px)`,
          }}
        >
          {isOpenMap && !isMobile && (
            <div className={styles.closeMap} onClick={closeMap}></div>
          )}
          <Map />
        </div>
      </div>
    </>
  );
};

export default MapContainer;
