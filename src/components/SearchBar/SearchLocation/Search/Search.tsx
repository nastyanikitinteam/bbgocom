import { FC, useEffect } from "react";
import { productList } from "components/MainPage/Recommend/config";
import { useTranslation } from "react-i18next";
import NoResult from "../NoResult/NoResults";

import styles from "./search.module.scss";
import SearchIcon from "images/icons/search.svg";

interface IProps {
  isSearchQuery: string;
  handleClickSeacrh: (key: string, value: string) => void;
  setIsActiveChoice;
}

const Search: FC<IProps> = ({
  isSearchQuery,
  handleClickSeacrh,
  setIsActiveChoice,
}) => {
  const searchResults = searchArray(productList, isSearchQuery);
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

  const chooseSearchResult = (item) => {
    handleClickSeacrh("nameOfSearch", item.name);
    setIsActiveChoice("");
  };

  return (
    <div className={styles.container}>
      {searchResults.length > 0 ? (
        <div className={styles.list}>
          {searchResults
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((item, key) => {
              return (
                <div
                  className={styles.item}
                  onClick={() => chooseSearchResult(item)}
                  key={key}
                >
                  <span className={styles.icon}>
                    <SearchIcon />
                  </span>
                  <p className={styles.text}>{item.name}</p>
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

export default Search;
