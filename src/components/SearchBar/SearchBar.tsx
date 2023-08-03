import { useRef, useContext, useEffect, useState } from "react";
import ThemeContext from "src/context";
import cn from "classnames";
import styles from "./search-bar.module.scss";

import ArrowIcon from "images/icons/drop.svg";
import CatalogIcon from "images/icons/catalog-icon.svg";
import PriceIcon from "images/icons/price-icon.svg";
import SearchIcon from "images/icons/search.svg";

const SearchBar = () => {
  const containerRef = useRef(null as null | HTMLDivElement);
  const { height, setHeight } = useContext(ThemeContext);

  const [scrollTop, setScrollTop] = useState(0);
  const [isSearchBarTop, setIsSearchBarTop] = useState(false);

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

  return (
    <div
      className={cn(styles.container, { [styles.top]: isSearchBarTop })}
      ref={containerRef}
    >
      <div className={styles.blocks}>
        <div className={styles.block}>
          <span className={styles.icon}>
            <CatalogIcon />
          </span>
          <p>All</p>
          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
        </div>
        <div className={styles.block}>
          <span className={styles.icon}>
            <PriceIcon />
          </span>
          <p>USD 500 - 10500</p>
          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
        </div>
        <button className={cn(styles.button, "default-button onlyIcon")}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
