import { useMemo, useRef, FC, useEffect, useState } from "react";
import { regionList } from "../LocationMain/config";
import styles from "./location-mobile.module.scss";
import cn from "classnames";
import MapIcon from "images/icons/map-icon.svg";
import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close.svg";
import LocationSearch from "../LocationSearch/LocationSearch";

interface IProps {
  setIsSearchRegionQuery: (bool: string) => void;
  isSearchRegionQuery: string;
  handleClickRegion: (key: string, value: string) => void;
  setDataRegion: (bool: string) => void;
  dataRegion: any;
  setIsActiveChoice: (bool: string) => void;
}

const LocationMobile: FC<IProps> = ({
  setIsSearchRegionQuery,
  isSearchRegionQuery,
  handleClickRegion,
  setDataRegion,
  dataRegion,
  setIsActiveChoice,
}) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isInputValue, setIsInputValue] = useState("");
  const [isOpenSearchBlock, setIsOpenSearchBlock] = useState(false);

  const onChangeRegionInput = (event) => {
    setIsSearchRegionQuery(event.target.value);
    setIsInputValue(event.target.value);
    if (event.target.value.length > 0) {
      setIsOpenSearchBlock(true);
    } else {
      setIsOpenSearchBlock(false);
    }
  };

  const chooseCity = (name, region) => {
    if (name) {
      handleClickRegion("nameOfCity", name);
    } else {
      if (dataRegion.nameOfCity) {
        let obj = dataRegion;
        delete obj.nameOfCity;
        setDataRegion(obj);
      }
      handleClickRegion("nameOfRegion", region);
    }
    setIsOpenList(false);
    setIsActiveChoice("Filter");
    setIsInputValue("");
  };

  const closeList = () => {
    setIsOpenList(false);
    setIsInputValue("");
    setIsOpenSearchBlock(false);
    setIsSearchRegionQuery(
      dataRegion.nameOfCity
        ? dataRegion.nameOfCity
        : dataRegion.nameOfRegion
        ? dataRegion.nameOfRegion
        : ""
    );
  };
  const openList = () => {
    setIsOpenList(true);
    setIsSearchRegionQuery("");
  };

  return (
    <>
      <h3 className={styles.title}>Location:</h3>
      <div
        className={cn(styles.input, {
          [styles.fill]: dataRegion.nameOfCity || dataRegion.nameOfRegion,
        })}
        onClick={openList}
      >
        <span className={styles.icon}>
          <MapIcon />
        </span>
        <p>{isSearchRegionQuery ? isSearchRegionQuery : "All Thailand"}</p>
        <span className={styles.arrow}>
          <ArrowSvg />
        </span>
      </div>
      <div
        className={cn(styles.blockBg, { [styles.active]: isOpenList })}
        onClick={closeList}
      ></div>
      <div className={cn(styles.block, { [styles.active]: isOpenList })}>
        <h3 className={styles.subtitle}>Choose region</h3>
        <div className={styles.top}>
          <div className={styles.input}>
            <span
              className={cn(styles.icon, {
                [styles.fill]: isSearchRegionQuery.length > 0,
              })}
            >
              <MapIcon />
            </span>
            <input
              type="text"
              value={isInputValue}
              onChange={onChangeRegionInput}
              placeholder="Search"
            />
          </div>
        </div>
        <div className={styles.close} onClick={closeList}>
          <CloseIcon />
        </div>
        {isOpenSearchBlock ? (
          <LocationSearch
            isSearchRegionQuery={isSearchRegionQuery}
            handleClickRegion={handleClickRegion}
            setIsActiveChoice={setIsActiveChoice}
            dataRegion={dataRegion}
            isMobile
            closeList={closeList}
          />
        ) : (
          <div className={styles.main}>
            <div className={styles.list}>
              {regionList.map(({ id, name, items }) => {
                return (
                  <>
                    <div
                      key={id}
                      className={cn(styles.region)}
                      onClick={() => chooseCity(null, name)}
                    >
                      {name}
                    </div>

                    {items.map(({ id, name }) => {
                      return (
                        <div
                          key={id}
                          className={cn(styles.city)}
                          onClick={() => chooseCity(name, null)}
                        >
                          {name}
                        </div>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LocationMobile;
