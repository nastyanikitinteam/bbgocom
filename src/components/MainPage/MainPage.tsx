import Hero from "./Hero/Hero";
import PopularCategory from "./PopularCategory/PopularCategory";
import Recommend from "./Recommend/Recommend";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import LatestDeals from "./LatestDeals/LatestDeals";
import PopularSearches from "./PopularSearches/PopularSearches";

import styles from "./main-page.module.scss";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <PopularCategory />
      <Recommend />
      <AdvertisingBanner />
      <LatestDeals />
      <PopularSearches />
    </div>
  );
};

export default MainPage;
