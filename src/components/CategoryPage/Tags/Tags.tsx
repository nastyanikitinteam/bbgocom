import { useState, useEffect } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import { tagsList } from "./config";
import styles from "./tags.module.scss";

import ArrowSvg from "images/icons/drop.svg";

const Tags = () => {
  const [isCount, setIsCount] = useState(tagsList.length);
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    isMobile ? setIsCount(15) : setIsCount(tagsList.length);
  }, [isMobile]);

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2
          className={cn("title", styles.title)}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Real Estate
        </h2>
        <div
          className={styles.tags}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {tagsList.slice(0, isCount).map(({ id, title }) => {
            return (
              <div className={cn("tag", styles.tag)} key={id}>
                {title}
              </div>
            );
          })}
        </div>

        <div className={styles.show}>
          Show 1,258 348 offers
          <span className={styles.icon}>
            <ArrowSvg />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Tags;
