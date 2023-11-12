import { FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Main from "./Main/Main";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import GreenCards from "components/ProductCards/GreenCards/GreenCards";
import { latestLst } from "components/ProductCards/config";
import { productList } from "components/MainPage/Recommend/config";
import { useTranslation } from "react-i18next";
import bannerImg from "images/main-page/banner.png";
interface IProps {
  isCurrentProduct: any;
}

const SelectedAd: FC<IProps> = ({ isCurrentProduct }) => {
  const { t } = useTranslation();
  return (
    <>
      <Main isCurrentProduct={isCurrentProduct} />
      <AdvertisingBanner bannerImg={bannerImg.src} />
      <GreenCards
        title={t(`selectedad.allAdsByAuthor`)}
        productsList={productList}
        showButtonWithouTitle
      />
      <GreenCards
        title={t(`selectedad.recommendedForYou`)}
        productsList={latestLst}
        showButtonWithouTitle
      />
    </>
  );
};

export default SelectedAd;
