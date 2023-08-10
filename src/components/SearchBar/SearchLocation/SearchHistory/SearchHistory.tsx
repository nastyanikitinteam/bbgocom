import { FC } from "react";
import styles from "./search-history.module.scss";

import DelIcon from "images/icons/del.svg";
import SearchIcon from "images/icons/search.svg";

interface IProps {
  handleClickSeacrh: (key: string, value: string) => void;
  setIsActiveChoice;
}

const SearchHistory: FC<IProps> = ({
  handleClickSeacrh,
  setIsActiveChoice,
}) => {
  const serachList = [
    {
      id: 0,
      name: "Intel Core i7 soccet 11000",
    },
    {
      id: 1,
      name: "AMD Ryzen 7 7800x3d",
    },
    {
      id: 2,
      name: "Asus Prime H310M-K R2.0",
    },
    {
      id: 3,
      name: "Metal holder 'Spider' ELIMA SP-03 for a microphone",
    },
    {
      id: 4,
      name: "Router Xiaomi Mi Router AX9000",
    },
    {
      id: 5,
      name: "Sony PlayStation 5 White 825Gb Digital Edition",
    },
  ];

  const chooseSearchResult = (name) => {
    handleClickSeacrh("nameOfSearch", name);
    setIsActiveChoice("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3>Search history:</h3>
        <div className={styles.clear}>
          <span className={styles.icon}>
            <DelIcon />
          </span>
          Clean All
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.list}>
          {serachList.map(({ id, name }) => {
            return (
              <div
                className={styles.item}
                key={id}
                onClick={() => chooseSearchResult(name)}
              >
                <span className={styles.icon}>
                  <SearchIcon />
                </span>
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;
