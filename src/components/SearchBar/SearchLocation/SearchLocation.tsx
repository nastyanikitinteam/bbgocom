import { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./search-location.module.scss";

import SearchIcon from "images/icons/search-icon.svg";
import MapIcon from "images/icons/map-icon.svg";
import CloseIcon from "images/icons/close.svg";

interface IProps {
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
  dataRegion: any;
}

const SearchLocation: FC<IProps> = ({
  setIsActiveChoice,
  isActiveChoice,
  dataRegion,
}) => {
  useEffect(() => {
    console.log(dataRegion);
  }, [dataRegion]);

  return (
    <>
      <div
        className={cn(styles.block, {
          [styles.active]:
            isActiveChoice === "Search" || isActiveChoice === "Location",
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

        <span
          className={cn(styles.close, {
            [styles.active]:
              isActiveChoice === "Search" || isActiveChoice === "Location",
          })}
          onClick={() => setIsActiveChoice("")}
        >
          <CloseIcon />
        </span>
        <div
          className={styles.item}
          onClick={() =>
            setIsActiveChoice(isActiveChoice === "Location" ? "" : "Location")
          }
        >
          <span className={styles.icon}>
            <MapIcon />
          </span>
          <p>
            {dataRegion.nameOfCity
              ? dataRegion.nameOfCity
              : dataRegion.nameOfRegion
              ? dataRegion.nameOfRegion
              : "All Thailand"}
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchLocation;
