import { useMemo } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./selected-ad.module.scss";
// import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
// import bannerImg from "images/create-an-add/hero-banner.jpg";

const SelectedAd = () => {
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
  return <>123</>;
};

export default SelectedAd;
