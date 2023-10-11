import { FC } from "react";
import Map from "components/Map/Map";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./map-container.module.scss";
import cn from "classnames";

import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  setIsOpenFullMap: (bool: any) => void;
  setIsOpenMap: (bool: boolean) => void;
  isOpenFullMap: boolean;
  isOpenMap: boolean;
  isMapWidth: string;
  isWishList?: boolean;
  productList?: any;
}

const MapContainer: FC<IProps> = ({
  setIsOpenFullMap,
  setIsOpenMap,
  isOpenFullMap,
  isOpenMap,
  isMapWidth,
  productList,
}) => {
  const isMobile = useMediaQuery(768);

  const closeMap = () => {
    setIsOpenMap(false);
    setIsOpenFullMap(false);
  };

  return (
    <div className={cn(styles.container, { [styles.full]: isOpenFullMap })}>
      {/* {isMobile && (
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
          <div className={styles.actions}></div>
        </div>
      )} */}
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
        <Map isWishlist productList={productList} />
      </div>
    </div>
  );
};

export default MapContainer;
