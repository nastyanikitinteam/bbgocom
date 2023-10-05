import { FC, useEffect, useState } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Hero from "./Hero/Hero";
import Tags from "./Tags/Tags";
import SubCategory from "./SubCategory/SubCategory";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import LatestDeals from "components/MainPage/LatestDeals/LatestDeals";

import bannerImg from "images/category-page/real-estate-banner.jpg";

interface IProps {
  isCurrentList: any;
}

const CategoryPage: FC<IProps> = ({ isCurrentList }) => {
  const SmallLaptop = useMediaQuery(768);
  const isTablet = useMediaQuery(998);

  return (
    <>
      <Hero isCurrentList={isCurrentList} />
      <Tags isCurrentList={isCurrentList} />
      <SubCategory isCurrentList={isCurrentList} />
      <AdvertisingBanner bannerImg={isCurrentList.bannerImg} />
      <LatestDeals />
    </>
  );
};

export default CategoryPage;
