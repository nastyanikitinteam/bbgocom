import React, { ReactNode, FC, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import HeaderMobile from "components/Header/HeaderMobile/HeaderMobile";
import Footer from "components/Footer/Footer";
import Modal from "components/Modal/Modal";
import Authorization from "components/Authorization/Authorization";
import cn from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { ILayoutReducer } from "./reducer";
import { IFilterReducer } from "components/CategoryFilterPage/reducer";
import { IReducer } from "../../reducers";

import styles from "./layout.module.scss";

interface IProps {
  title: string;
  children: ReactNode;
  isSecondHeader?: boolean;
  withoutSearchBar?: boolean;
  mobileWithoutHeader?: boolean;
  mobileWithoutSearchBar?: boolean;
  mobileWithoutFooter?: boolean;
  mobileWithoutBottomMenu?: boolean;
}

const Layout: FC<IProps> = ({
  title = "Page",
  children,
  isSecondHeader,
  withoutSearchBar,
  mobileWithoutHeader,
  mobileWithoutSearchBar,
  mobileWithoutFooter,
  mobileWithoutBottomMenu,
}) => {
  // const dispatch = useDispatch();
  const [isOpenAuthorization, setIsOpenAuthorization] = useState(false);
  const isMobile = useMediaQuery(768);
  const { isHeaderHidden, isFooterHidden } = useSelector<
    IReducer,
    ILayoutReducer
  >((state) => state.layout);

  const { isCategoryFilterOpen } = useSelector<IReducer, IFilterReducer>(
    (state) => state.categoryFilter
  );

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles["app"]}>
      <Head>
        <title>{title}</title>
      </Head>
      {isMobile ? (
        !mobileWithoutHeader &&
        !isHeaderHidden && (
          <HeaderMobile
            mobileWithoutSearchBar={mobileWithoutSearchBar}
            mobileWithoutBottomMenu={mobileWithoutBottomMenu}
          />
        )
      ) : (
        <Header
          isSecondHeader={isSecondHeader}
          withoutSearchBar={withoutSearchBar}
        />
      )}
      <div
        className={cn(styles.container, {
          [styles.withoutHeder]: mobileWithoutHeader || mobileWithoutSearchBar,
        })}
      >
        {children}
      </div>
      {(isMobile && mobileWithoutFooter) ||
      isFooterHidden ||
      isCategoryFilterOpen ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
