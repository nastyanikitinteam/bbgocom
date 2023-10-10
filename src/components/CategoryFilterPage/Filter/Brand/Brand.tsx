import { useState, FC } from "react";
import styles from "./brand.module.scss";
import cn from "classnames";

import Checkboxes from "../Checkboxes/Checkboxes";
import Alphabetical from "./Alphabetical/Alphabetical";
import Search from "./Search/Search";

import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  title: string;
  list: any;
}

const Brand: FC<IProps> = ({ title, list }) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [isSearchQuery, setIsSearchQuery] = useState<string>("");

  // TODO ALEX
  const searchResults = searchArray(list, isSearchQuery);

  // TODO ALEX
  function searchArray(array, query) {
    const results = [];
    const regex = new RegExp(query, "i");
    for (const item of array) {
      if (regex.test(item)) {
        results.push(item);
      }
    }
    return results;
  }

  // TODO MAP
  const filteredBrands = list.filter(
    (brand) => brand.charAt(0).toUpperCase() === selectedLetter
  );

  // TOOD CB
  const handleLetterSelect = (letter) => {
    setIsSearchQuery("");
    setSelectedLetter(letter);
  };

  // TODO CB
  const onChangeSearchInput = (event) => {
    setSelectedLetter("");
    setIsSearchQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top} onClick={() => setIsShow((prev) => !prev)}>
        <h3 className={styles.title}>{title}</h3>
        <span className={cn(styles.arrow, { [styles.open]: isShow })}>
          <ArrowIcon />
        </span>
      </div>
      {isShow && (
        <div className={styles.main}>
          <Search
            isSearchQuery={isSearchQuery}
            setIsSearchQuery={setIsSearchQuery}
            onChangeSearchInput={onChangeSearchInput}
          />
          <Alphabetical
            onLetterSelect={handleLetterSelect}
            carBrands={list}
            selectedLetter={selectedLetter}
          />
          <Checkboxes
            title="Car brand"
            list={
              selectedLetter
                ? filteredBrands
                : isSearchQuery
                ? searchResults
                : list
            }
          />
        </div>
      )}
    </div>
  );
};

export default Brand;
