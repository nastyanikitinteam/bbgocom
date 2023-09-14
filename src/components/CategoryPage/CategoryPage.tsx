import useMediaQuery from "src/utils/useMediaQuery";
import Hero from "./Hero/Hero";
import Tags from "./Tags/Tags";
import SubCategory from "./SubCategory/SubCategory";
import styles from "./category-page.module.scss";

const CategoryPage = () => {
  const SmallLaptop = useMediaQuery(768);
  const isTablet = useMediaQuery(998);
  return (
    <>
      <Hero />
      <Tags />
      <SubCategory />
    </>
  );
};

export default CategoryPage;
