import { FC } from "react";
import styles from "./sub-category.module.scss";
import Blocks from "components/SearchBar/Category/CategoryMain/Blocks/Blocks";

interface IProps {
  isCurrentList: any;
}

const SubCategory: FC<IProps> = ({ isCurrentList }) => {
  console.log(isCurrentList.subcategories, "d");
  return (
    <section className={styles.container}>
      <div className="wrapper">
        <Blocks
          currentSubcategories={isCurrentList.subcategories}
          isSearchBarTop={true}
          isCategoryPage
        />
      </div>
    </section>
  );
};

export default SubCategory;
