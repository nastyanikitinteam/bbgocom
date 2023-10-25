import Hero from "./Hero/Hero";
import PopularCategory from "./PopularCategory/PopularCategory";
import Recommend from "./Recommend/Recommend";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import GreenCards from "components/ProductCards/GreenCards/GreenCards";
import PopularSearches from "./PopularSearches/PopularSearches";
import WantSell from "./WantSell/WantSell";
import Testimonials from "./Testimonials/Testimonials";
import Who from "./Who/Who";
import useMediaQuery from "src/utils/useMediaQuery";

import { latestLst } from "components/ProductCards/config";

import SearchBar from "components/SearchBar/SearchBar";

import { useTranslation } from "react-i18next";

import styles from "./main-page.module.scss";

import bannerImg from "images/main-page/banner.png";

const MainPage = () => {
  const SmallLaptop = useMediaQuery(768);
  const isTablet = useMediaQuery(998);
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      {!isTablet && <SearchBar />}
      <PopularCategory />
      <Recommend />
      <AdvertisingBanner bannerImg={bannerImg.src} />
      <GreenCards title="Latest deals" productsList={latestLst} />
      <PopularSearches />
      <WantSell />
      <Testimonials />
      <Who />
    </>
  );
};

export default MainPage;
