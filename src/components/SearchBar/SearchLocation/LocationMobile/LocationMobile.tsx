import { FC, useState } from "react";
import { regionList } from "../LocationMain/config";
import PortalContainer from "components/PortalContainer/PortalContainer";
import styles from "./location-mobile.module.scss";
import cn from "classnames";
import MapIcon from "images/icons/map-icon.svg";
import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close.svg";
import LocationSearch from "../LocationSearch/LocationSearch";
import { useTranslation } from "react-i18next";

interface IProps {
  setIsSearchRegionQuery: (str: string) => void;
  isSearchRegionQuery: string;
  handleClickRegion: (key: string, value: string) => void;
  setDataRegion: (str: string) => void;
  dataRegion: any;
  setIsActiveChoice: (str: string) => void;
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
  const { t } = useTranslation();

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
      <h3 className={styles.title}>{t(`searchbar.location`)}</h3>
      <div
        className={cn(styles.input, {
          [styles.fill]: dataRegion.nameOfCity || dataRegion.nameOfRegion,
        })}
        onClick={openList}
      >
        <span className={styles.icon}>
          <MapIcon />
        </span>
        <p>
          {isSearchRegionQuery
            ? isSearchRegionQuery
            : t(`searchbar.allThailand`)}
        </p>
        <span className={styles.arrow}>
          <ArrowSvg />
        </span>
      </div>
      <PortalContainer>
        <div
          className={cn(styles.blockBg, { [styles.active]: isOpenList })}
          onClick={closeList}
        ></div>
        <div className={cn(styles.block, { [styles.active]: isOpenList })}>
          <h3 className={styles.subtitle}>{t(`searchbar.chooseRegion`)}</h3>
          <div className={styles.top}>
            <div
              className={cn(styles.input, {
                [styles.fill]: isSearchRegionQuery.length > 0,
              })}
            >
              <span className={styles.icon}>
                <MapIcon />
              </span>
              <input
                type="text"
                value={isInputValue}
                onChange={onChangeRegionInput}
                placeholder={t(`searchbar.search`)}
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
      </PortalContainer>
    </>
  );
};

export default LocationMobile;
