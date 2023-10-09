import { useEffect, useMemo, useState } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Main from "./Main/Main";
import Map from "components/Map/Map";
import Filter from "./Filter/Filter";
import styles from "./category-filter-page.module.scss";
import cn from "classnames";

const CategoryFilterPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);

  const SmallLaptop = useMediaQuery(768);
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    !isMobile && setIsOpenFilter(false);
  }, [isMobile]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {(!isMobile || isOpenFilter) && (
            <div className={styles.info}>
              <Filter />
            </div>
          )}
          {!isOpenFilter && (
            <div className={cn(styles.main, { [styles.open]: isOpenMap })}>
              <Main
                title="Buy a home"
                openFilter={() => setIsOpenFilter(true)}
                isOpenMap={isOpenMap}
                setIsOpenMap={setIsOpenMap}
              />
            </div>
          )}
          {isOpenMap && (
            <div className={styles.map}>
              <div className={styles.mapBlock}>
                <Map />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilterPage;
