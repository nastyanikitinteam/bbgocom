import { useState, FC } from "react";
import styles from "./select-search.module.scss";
import cn from "classnames";
import SearchIcon from "images/icons/search.svg";
import NoResult from "components/SearchBar/SearchLocation/NoResult/NoResults";

interface IProps {
  list: any;
  handleListChange: (bool: any) => void;
  isChooseOption: string;
}

const SelectSearch: FC<IProps> = ({
  list,
  handleListChange,
  isChooseOption,
}) => {
  const [isSearchQuery, setIsSearchQuery] = useState("");
  const searchResults = searchArray(list, isSearchQuery);

  const onChangeSearchInput = (event) => {
    setIsSearchQuery(event.target.value);
  };

  function searchArray(array, query) {
    const results = [];
    const regex = new RegExp(query, "i");

    for (const item of array) {
      if (regex.test(item.value)) {
        results.push(item);
      }

      if (item.items) {
        const nestedResults = searchArray(item.items, query);
        results.push(...nestedResults);
      }
    }

    return results;
  }

  return (
    <div>
      <div className={styles.top}>
        <div
          className={cn(styles.input, {
            [styles.fill]: isSearchQuery.length > 0,
          })}
        >
          <span className={styles.icon}>
            <SearchIcon />
          </span>
          <input
            type="text"
            value={isSearchQuery}
            onChange={onChangeSearchInput}
            placeholder="Search"
          />
        </div>
      </div>
      <div className={styles.list}>
        {searchResults.length > 0 ? (
          searchResults.map((item) => {
            return (
              <div
                key={item.value}
                className={cn(styles.item, {
                  [styles.active]: item.value === isChooseOption,
                })}
                onClick={() => handleListChange(item)}
              >
                {item.label}
              </div>
            );
          })
        ) : (
          <NoResult title="You haven't searched yet" />
        )}
      </div>
    </div>
  );
};

export default SelectSearch;
