import { FC } from "react";
import Hero from "./Hero/Hero";
import Tags from "./Tags/Tags";
import SubCategory from "./SubCategory/SubCategory";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import GreenCards from "components/ProductCards/GreenCards/GreenCards";

import { useTranslation } from "react-i18next";
import { latestLst } from "components/ProductCards/config";

interface IProps {
  isCurrentList: any;
}

const CategoryPage: FC<IProps> = ({ isCurrentList }) => {
  const { t } = useTranslation();
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
        <GreenCards title={t(`home.latestDeals`)} productsList={latestLst} />
      </div>
    </>
  );
};

export default CategoryPage;
