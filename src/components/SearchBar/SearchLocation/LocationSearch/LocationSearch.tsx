import { FC, useEffect, useState } from "react";
import { regionList } from "../LocationMain/config";
import styles from "./location-search.module.scss";

import MapIcon from "images/icons/map-icon.svg";

interface IProps {
  isSearchRegionQuery: string;
  setIsActiveChoice: (bool: string) => void;
  handleClickRegion: (key: string, value: string) => void;
  dataRegion: any;
}

const LocationSearch: FC<IProps> = ({
  isSearchRegionQuery,
  setIsActiveChoice,
  handleClickRegion,
  dataRegion,
}) => {
  const searchResults = searchArray(regionList, isSearchRegionQuery);

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
    setIsActiveChoice("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {searchResults
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((item, key) => {
            return (
              <div className={styles.item} onClick={() => chooseCity(item)}>
                <span className={styles.icon}>
                  <MapIcon />
                </span>
                {item.name}
                {findParentOf(item) && (
                  <span className={styles.region}>
                    {findParentOf(item).name}
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LocationSearch;
