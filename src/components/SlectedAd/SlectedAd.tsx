import { useMemo, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Main from "./Main/Main";
import styles from "./selected-ad.module.scss";

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
  return <Main isCurrentProduct={isCurrentProduct} />;
};

export default SelectedAd;
