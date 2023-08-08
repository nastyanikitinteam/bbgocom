import { useState, useEffect } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import { searchList } from "./config";

import styles from "./popular-searches.module.scss";

const PopularSearches = () => {
  const [isCount, setIsCount] = useState(searchList.length);
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    isMobile ? setIsCount(12) : setIsCount(searchList.length);
  }, [isMobile]);

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>The most popular searches</h2>
        <div className={styles.tags}>
          {searchList.slice(0, isCount).map(({ id, title }) => {
            return (
              <a href="#" className={cn("tag", styles.tag)} key={id}>
                {title}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
