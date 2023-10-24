import { useMemo, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Main from "./Main/Main";
import AdvertisingBanner from "components/AdvertisingBanner/AdvertisingBanner";
import GreenCards from "components/ProductCards/GreenCards/GreenCards";
import styles from "./selected-ad.module.scss";

import { latestLst } from "components/ProductCards/config";
import { productList } from "components/MainPage/Recommend/config";

import bannerImg from "images/main-page/banner.png";
interface IProps {
  isCurrentProduct: any;
}

const SelectedAd: FC<IProps> = ({ isCurrentProduct }) => {
  const isMobile = useMediaQuery(768);

  // const breadCrumbs = useMemo(
  //   () => [
  //     {
  //       id: 0,
  //       title: "Home",
  //       url: "/",
  //     },
  //     {
  //       id: 0,
  //       title: "Create an add",
  //     },
  //   ],
  //   []
  // );
  return (
    <>
      <Main isCurrentProduct={isCurrentProduct} />
      <AdvertisingBanner bannerImg={bannerImg.src} />
      <GreenCards
        title="All ads by the author"
        productsList={productList}
        showButtonWithouTitle
      />
      <GreenCards
        title="Recommended for your"
        productsList={latestLst}
        showButtonWithouTitle
      />
    </>
  );
};

export default SelectedAd;
