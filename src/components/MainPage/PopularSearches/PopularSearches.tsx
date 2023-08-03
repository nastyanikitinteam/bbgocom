import cn from "classnames";
import { searchList } from "./config";

import styles from "./popular-searches.module.scss";

const PopularSearches = () => {
  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>The most popular searches</h2>
        <div className={styles.tags}>
          {searchList.map(({ id, title }) => {
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
