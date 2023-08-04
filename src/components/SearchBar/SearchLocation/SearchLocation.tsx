import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./search-location.module.scss";

import SearchIcon from "images/icons/search-icon.svg";
import MapIcon from "images/icons/map-icon.svg";

interface IProps {
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
}

const SearchLocation: FC<IProps> = ({ setIsActiveChoice, isActiveChoice }) => {
  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]: isActiveChoice === ("Search" || "Location"),
        })}
      >
        <div
          className={styles.item}
          onClick={() =>
            setIsActiveChoice(isActiveChoice === "Search" ? "" : "Search")
          }
        >
          <span className={styles.icon}>
            <SearchIcon />
          </span>
          <p>I’m search</p>
        </div>
        <div
          className={styles.item}
          onClick={() =>
            setIsActiveChoice(isActiveChoice === "Location" ? "" : "Location")
          }
        >
          <span className={styles.icon}>
            <MapIcon />
          </span>
          <p>All Thailand</p>
        </div>
      </div>
    </>
  );
};

export default SearchLocation;
