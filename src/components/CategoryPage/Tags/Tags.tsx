import { useState, useEffect, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import { tagsList } from "./config";
import styles from "./tags.module.scss";

import ArrowSvg from "images/icons/drop.svg";

interface IProps {
  isCurrentList: any;
}

const Tags: FC<IProps> = ({ isCurrentList }) => {
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
          {isCurrentList.title}
        </h2>
        <div
          className={styles.tags}
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {isCurrentList
            ? isCurrentList.tags.slice(0, isCount).map(({ id, name }) => {
                return (
                  <div className={cn("tag", styles.tag)} key={id}>
                    {name}
                  </div>
                );
              })
            : tagsList.slice(0, isCount).map(({ id, title }) => {
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
