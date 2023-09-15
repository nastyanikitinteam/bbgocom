import { FC } from "react";
import styles from "./search.module.scss";
import cn from "classnames";

import SearchIcon from "images/icons/search.svg";
import CloseIcon from "images/icons/close.svg";

interface IProps {
  isSearchQuery: string;
  onChangeSearchInput: (bool: any) => void;
  setIsSearchQuery: (bool: string) => void;
}

const Search: FC<IProps> = ({
  isSearchQuery,
  onChangeSearchInput,
  setIsSearchQuery,
}) => {
  const cleanSearchInput = () => {
    setIsSearchQuery("");
  };
  return (
    <div className={styles.container}>
      <span
        className={cn(styles.icon, {
          [styles.fill]: isSearchQuery.length > 0,
        })}
      >
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search"
        value={isSearchQuery}
        onChange={onChangeSearchInput}
      />
      <div
        className={cn(styles.close, {
          [styles.active]: isSearchQuery.length > 0,
        })}
        onClick={cleanSearchInput}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default Search;
