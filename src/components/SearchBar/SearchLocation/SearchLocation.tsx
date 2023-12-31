import { FC, useState, useEffect } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import styles from "./search-location.module.scss";
import { useTranslation } from "react-i18next";
import SearchIcon from "images/icons/search-icon.svg";
import MapIcon from "images/icons/map-icon.svg";
import FilterIcon from "images/icons/filter-icon.svg";
import CloseIcon from "images/icons/close.svg";

interface IProps {
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
  dataRegion: any;
  setIsSearchRegionQuery: (bool: string) => void;
  isSearchRegionQuery: string;
  setIsSearchQuery: (bool: string) => void;
  isSearchQuery: string;
  dataSearch: any;
  setDataSearch: (bool: string) => void;
  handleClickSeacrh: (key: string, value: string) => void;
}

const SearchLocation: FC<IProps> = ({
  setIsActiveChoice,
  isActiveChoice,
  dataRegion,
  setIsSearchRegionQuery,
  isSearchRegionQuery,
  setIsSearchQuery,
  isSearchQuery,
  dataSearch,
  setDataSearch,
  handleClickSeacrh,
}) => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery(768);

  const showActiveBlock = (value, nameSearch, nameMain) => {
    if (value) {
      if (value.length > 0) {
        setIsActiveChoice(nameSearch);
      } else {
        setIsActiveChoice(nameMain);
      }
    } else {
      setIsActiveChoice(nameMain);
    }
  };

  const onChangeRegionInput = (event) => {
    setIsSearchRegionQuery(event.target.value);
    showActiveBlock(event.target.value, "LocationSearch", "Location");
  };

  const onChangeSearchInput = (event) => {
    setIsSearchQuery(event.target.value);
    handleClickSeacrh("nameOfSearch", event.target.value);
    showActiveBlock(event.target.value, "Search", "SearchHistory");
  };

  const handleBlurRegion = (event) => {
    if (
      event.target.value != dataRegion.nameOfCity ||
      event.target.value != dataRegion.nameOfRegion
    ) {
      setIsSearchRegionQuery(
        dataRegion.nameOfCity
          ? dataRegion.nameOfCity
          : dataRegion.nameOfRegion
          ? dataRegion.nameOfRegion
          : ""
      );
    }
  };

  const cleanSearchInput = () => {
    setIsActiveChoice("SearchHistory");
    setIsSearchQuery("");
    console.log(12);
    let obj = dataSearch;
    delete obj.nameOfSearch;
    setDataSearch(obj);
  };

  useEffect(() => {
    setIsSearchRegionQuery(
      dataRegion.nameOfCity
        ? dataRegion.nameOfCity
        : dataRegion.nameOfRegion
        ? dataRegion.nameOfRegion
        : ""
    );
  }, [dataRegion]);

  useEffect(() => {
    setIsSearchQuery(dataSearch.nameOfSearch ? dataSearch.nameOfSearch : "");
  }, [dataSearch]);

  useEffect(() => {
    if (isActiveChoice != "Search" && isActiveChoice != "SearchHistory") {
      isSearchQuery != dataSearch.nameOfSearch &&
        setIsSearchQuery(
          dataSearch.nameOfSearch ? dataSearch.nameOfSearch : ""
        );
    }
    setIsActive(
      isActiveChoice === "Search" ||
        isActiveChoice === "Location" ||
        isActiveChoice === "SearchHistory" ||
        isActiveChoice === "LocationSearch"
    );
  }, [isActiveChoice]);

  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]: isActive,
          [styles.fill]:
            isSearchQuery.length > 0 && isSearchRegionQuery.length > 0,
        })}
      >
        <div
          className={styles.item}
          onClick={() => showActiveBlock(null, "Search", "SearchHistory")}
        >
          <span
            className={cn(styles.icon, {
              [styles.fill]: isSearchQuery.length > 0,
            })}
          >
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder={t(`searchbar.iSearch`)}
            value={isSearchQuery}
            onChange={onChangeSearchInput}
          />
        </div>

        <div
          className={cn(styles.close, {
            [styles.active]: isSearchQuery.length > 0 && isActive,
          })}
          onClick={cleanSearchInput}
        >
          <CloseIcon />
        </div>
        {isMobile && (
          <div className={styles.filter}>
            <FilterIcon onClick={() => setIsActiveChoice("Filter")} />
          </div>
        )}
        {!isMobile && (
          <div
            className={styles.item}
            onClick={() => showActiveBlock(null, "LocationSearch", "Location")}
          >
            <span
              className={cn(styles.icon, {
                [styles.fill]: isSearchRegionQuery.length > 0,
              })}
            >
              <MapIcon />
            </span>
            <input
              type="text"
              value={isSearchRegionQuery}
              onChange={onChangeRegionInput}
              placeholder={t(`searchbar.allThailand`)}
              onBlur={handleBlurRegion}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchLocation;
