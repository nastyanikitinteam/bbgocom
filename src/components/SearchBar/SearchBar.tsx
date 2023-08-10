import { useRef, useContext, useEffect, useState } from "react";
import ThemeContext from "src/context";
import cn from "classnames";
import Category from "./Category/Category";
import Price from "./Price/Price";
import SearchLocation from "./SearchLocation/SearchLocation";

import CategoryMain from "./Category/CategoryMain/CategoryMain";
import PriceMain from "./Price/PriceMain/PriceMain";
import LocationMain from "./SearchLocation/LocationMain/LocationMain";
import LocationSearch from "./SearchLocation/LocationSearch/LocationSearch";
import SearchHistory from "./SearchLocation/SearchHistory/SearchHistory";
import Search from "./SearchLocation/Search/Search";

import styles from "./search-bar.module.scss";

import SearchIcon from "images/icons/search.svg";

const SearchBar = () => {
  const containerRef = useRef(null as null | HTMLDivElement);
  const { height, setHeight } = useContext(ThemeContext);

  const [scrollTop, setScrollTop] = useState(0);
  const [isSearchBarTop, setIsSearchBarTop] = useState(false);
  const [isActiveChoice, setIsActiveChoice] = useState("");

  const [isActiveCategory, setIsActiveCategory] = useState(null);

  const [dataCategory, setDataCategory] = useState({});
  const [dataRegion, setDataRegion] = useState({});
  const [dataSearch, setDataSearch] = useState({});

  const [isSearchRegionQuery, setIsSearchRegionQuery] = useState("");
  const [isSearchQuery, setIsSearchQuery] = useState("");

  useEffect(() => {
    setHeight(containerRef?.current?.offsetTop);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTop > height) {
      setIsSearchBarTop(true);
    } else {
      setIsSearchBarTop(false);
    }
  }, [scrollTop]);

  const handleClickCategory = (key, value) => {
    setDataCategory((prev) => ({ ...prev, [key]: value }));
  };

  const handleClickRegion = (key, value) => {
    setDataRegion((prev) => ({ ...prev, [key]: value }));
  };
  const handleClickSeacrh = (key, value) => {
    setDataSearch((prev) => ({ ...prev, [key]: value }));
  };

  const send = () => {
    console.log(dataCategory, dataRegion, dataSearch);
  };

  useEffect(() => {
    const onClick = (e) =>
      containerRef.current.contains(e.target) || setIsActiveChoice("");
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // useEffect(() => {
  //   console.log(dataSearch);
  // }, [dataSearch]);

  return (
    <div
      className={cn(
        styles.container,
        { [styles.top]: isSearchBarTop },
        { [styles.active]: isActiveChoice }
      )}
      ref={containerRef}
    >
      <div className={styles.blocks}>
        <Category
          setIsActiveChoice={setIsActiveChoice}
          isActiveChoice={isActiveChoice}
          isActiveCategory={isActiveCategory}
        />
        <SearchLocation
          setIsActiveChoice={setIsActiveChoice}
          isActiveChoice={isActiveChoice}
          dataRegion={dataRegion}
          setIsSearchRegionQuery={setIsSearchRegionQuery}
          isSearchRegionQuery={isSearchRegionQuery}
          setIsSearchQuery={setIsSearchQuery}
          isSearchQuery={isSearchQuery}
          dataSearch={dataSearch}
          setDataSearch={setDataSearch}
        />
        <Price
          setIsActiveChoice={setIsActiveChoice}
          isActiveChoice={isActiveChoice}
        />
        <button
          className={cn(styles.button, "default-button onlyIcon")}
          onClick={send}
        >
          <SearchIcon />
        </button>
      </div>
      {isActiveChoice && (
        <div className={styles.main}>
          {isActiveChoice == "Category" && (
            <CategoryMain
              isSearchBarTop={isSearchBarTop}
              isActiveCategory={isActiveCategory}
              setIsActiveCategory={setIsActiveCategory}
              handleClick={handleClickCategory}
              setIsActiveChoice={setIsActiveChoice}
            />
          )}
          {isActiveChoice == "Price" && (
            <PriceMain isSearchBarTop={isSearchBarTop} />
          )}
          {isActiveChoice == "SearchHistory" && (
            <SearchHistory
              handleClickSeacrh={handleClickSeacrh}
              setIsActiveChoice={setIsActiveChoice}
            />
          )}
          {isActiveChoice == "Location" && (
            <LocationMain
              handleClickRegion={handleClickRegion}
              setIsActiveChoice={setIsActiveChoice}
              dataRegion={dataRegion}
              setDataRegion={setDataRegion}
            />
          )}
          {isActiveChoice == "LocationSearch" && (
            <LocationSearch
              isSearchRegionQuery={isSearchRegionQuery}
              handleClickRegion={handleClickRegion}
              setIsActiveChoice={setIsActiveChoice}
              dataRegion={dataRegion}
            />
          )}
          {isActiveChoice == "Search" && (
            <Search
              isSearchQuery={isSearchQuery}
              handleClickSeacrh={handleClickSeacrh}
              setIsActiveChoice={setIsActiveChoice}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
