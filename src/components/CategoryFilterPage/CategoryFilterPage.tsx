import useMediaQuery from "src/utils/useMediaQuery";
import Main from "./Main/Main";
import Filter from "./Filter/Filter";
import styles from "./category-filter-page.module.scss";

const CategoryFilterPage = () => {
  const SmallLaptop = useMediaQuery(768);
  const isTablet = useMediaQuery(998);
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.info}>
            <Filter />
          </div>
          <div className={styles.main}>
            <Main title="Buy a home" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilterPage;
