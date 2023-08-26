import Hero from "./Hero/Hero";
import PopularCategory from "./PopularCategory/PopularCategory";
import Recommend from "./Recommend/Recommend";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import LatestDeals from "./LatestDeals/LatestDeals";
import PopularSearches from "./PopularSearches/PopularSearches";
import WantSell from "./WantSell/WantSell";
import Testimonials from "./Testimonials/Testimonials";
import Who from "./Who/Who";
import useMediaQuery from "src/utils/useMediaQuery";

import SearchBar from "components/SearchBar/SearchBar";

import styles from "./main-page.module.scss";

const MainPage = () => {
  const SmallLaptop = useMediaQuery(768);
  const isTablet = useMediaQuery(998);
  return (
    <>
      <Hero />
      {!isTablet && <SearchBar />}
      <PopularCategory />
      <Recommend />
      <AdvertisingBanner />
      <LatestDeals />
      <PopularSearches />
      <WantSell />
      <Testimonials />
      <Who />
    </>
  );
};

export default MainPage;
