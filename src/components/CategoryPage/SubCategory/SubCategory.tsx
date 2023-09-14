import styles from "./sub-category.module.scss";
import Blocks from "components/SearchBar/Category/CategoryMain/Blocks/Blocks";

const SubCategory = () => {
  return (
    <section className={styles.container}>
      <div className="wrapper">
        <Blocks isActiveCategory={0} isSearchBarTop={true} isCategoryPage />
      </div>
    </section>
  );
};

export default SubCategory;
