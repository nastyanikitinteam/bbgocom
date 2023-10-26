import { FC, useEffect, useMemo } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Hero from "./Hero/Hero";
import Tags from "./Tags/Tags";
import SubCategory from "./SubCategory/SubCategory";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import GreenCards from "components/ProductCards/GreenCards/GreenCards";

import { latestLst } from "components/ProductCards/config";

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
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <SubCategory isCurrentList={isCurrentList} />
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <AdvertisingBanner bannerImg={isCurrentList.bannerImg} />
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <GreenCards title="Latest deals" productsList={latestLst} />
      </div>
    </>
  );
};

export default CategoryPage;
