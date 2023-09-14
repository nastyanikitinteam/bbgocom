import useMediaQuery from "src/utils/useMediaQuery";
import Hero from "./Hero/Hero";
import Tags from "./Tags/Tags";
import SubCategory from "./SubCategory/SubCategory";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import LatestDeals from "components/MainPage/LatestDeals/LatestDeals";
import styles from "./category-page.module.scss";

import bannerImg from "images/category-page/real-estate-banner.jpg";

const CategoryPage = () => {
  const SmallLaptop = useMediaQuery(768);
  const isTablet = useMediaQuery(998);
  return (
    <>
      <Hero />
      <Tags />
      <SubCategory />
      <AdvertisingBanner bannerImg={bannerImg.src} />
      <LatestDeals />
    </>
  );
};

export default CategoryPage;
