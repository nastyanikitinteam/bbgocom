import { useState } from "react";
import styles from "./brand.module.scss";
import cn from "classnames";
import { carBrands } from "../config";

import Checkboxes from "../Checkboxes/Checkboxes";
import Alphabetical from "./Alphabetical/Alphabetical";
import Search from "./Search/Search";

import ArrowIcon from "images/icons/drop.svg";

const Brand = () => {
  const [isShow, setIsShow] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [isSearchQuery, setIsSearchQuery] = useState("");

  const searchResults = searchArray(carBrands, isSearchQuery);

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

  const filteredBrands = carBrands.filter(
    (brand) => brand.charAt(0).toUpperCase() === selectedLetter
  );

  const handleLetterSelect = (letter) => {
    setIsSearchQuery("");
    setSelectedLetter(letter);
  };

  const onChangeSearchInput = (event) => {
    setSelectedLetter("");
    setIsSearchQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top} onClick={() => setIsShow((prev) => !prev)}>
        <h3 className={styles.title}>Car brand</h3>
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
            carBrands={carBrands}
            selectedLetter={selectedLetter}
          />
          <Checkboxes
            title="Car brand"
            list={
              selectedLetter
                ? filteredBrands
                : isSearchQuery
                ? searchResults
                : carBrands
            }
          />
        </div>
      )}
    </div>
  );
};

export default Brand;
