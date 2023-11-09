import { FC, useEffect, useState } from "react";
import { regionList } from "../LocationMain/config";
import { useTranslation } from "react-i18next";
import NoResult from "../NoResult/NoResults";
import styles from "./location-search.module.scss";

import MapIcon from "images/icons/map-icon.svg";

interface IProps {
  isSearchRegionQuery: string;
  setIsActiveChoice?: (bool: string) => void;
  handleClickRegion: (key: string, value: string) => void;
  dataRegion: any;
  isMobile?: boolean;
  closeList?: () => void;
}

const LocationSearch: FC<IProps> = ({
  isSearchRegionQuery,
  setIsActiveChoice,
  handleClickRegion,
  dataRegion,
  isMobile,
  closeList,
}) => {
  const searchResults = searchArray(regionList, isSearchRegionQuery);
  const { t } = useTranslation();

  function searchArray(array, query) {
    const results = [];
    const regex = new RegExp(query, "i");

    for (const item of array) {
      if (regex.test(item.name)) {
        results.push(item);
      }

      if (item.items) {
        const nestedResults = searchArray(item.items, query);
        results.push(...nestedResults);
      }
    }

    return results;
  }

  let needle = regionList[3].items[0];

  function findParentOf(node) {
    function f(acc, el) {
      if (acc) return acc;
      if (el.items && el.items.some((item) => item === node)) return el;
      if (el.items) return el.items.reduce(f, acc);
      return acc;
    }
    return regionList.reduce(f, null);
  }

  let result = findParentOf(needle).name;

  const chooseCity = (item) => {
    if (findParentOf(item)) {
      handleClickRegion("nameOfCity", item.name);
      handleClickRegion("nameOfRegion", findParentOf(item).name);
    } else {
      handleClickRegion("nameOfRegion", item.name);
      delete dataRegion.nameOfCity;
    }
    isMobile ? closeList() : setIsActiveChoice("");
  };

  return (
    <div className={styles.container}>
      {searchResults.length > 0 ? (
        <div className={styles.list}>
          {searchResults
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((item, key) => {
              return (
                <div className={styles.item} onClick={() => chooseCity(item)}>
                  <span className={styles.icon}>
                    <MapIcon />
                  </span>
                  <span className={styles.city}>{item.name}</span>
                  {findParentOf(item) && (
                    <span className={styles.region}>
                      {findParentOf(item).name}
                    </span>
                  )}
                </div>
              );
            })}
        </div>
      ) : (
        <NoResult
          title={t(`searchbar.noSearchResult`)}
          description={t(`searchbar.noSearchResultDescription`)}
        />
      )}
    </div>
  );
};

export default LocationSearch;
