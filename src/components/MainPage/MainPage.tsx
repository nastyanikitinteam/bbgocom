import Hero from "./Hero/Hero";
import PopularCategory from "./PopularCategory/PopularCategory";
import Recommend from "./Recommend/Recommend";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import LatestDeals from "./LatestDeals/LatestDeals";

import styles from "./main-page.module.scss";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <PopularCategory />
      <Recommend />
      <AdvertisingBanner />
      <LatestDeals />
    </div>
  );
};

export default MainPage;
