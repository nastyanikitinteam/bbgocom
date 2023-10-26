import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";
import SelectedAd from "components/SlectedAd/SlectedAd";
import FixedMobileBlock from "components/SlectedAd/Main/FixedMobileBlock/FixedMobileBlock";

import { productList } from "components/MainPage/Recommend/config";

import { IProduct, initialProduct } from "src/interfaces/product";
import Layout from "components/Layout/Layout";

const SelectedAdPage: NextPage = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(768);

  const [isCurrentProduct, setIsCurrentProduct] =
    useState<IProduct>(initialProduct);

  useEffect(() => {
    const currentItem = productList.filter(
      ({ slug }) => slug === router.query.slug
    );
    // @ts-ignore
    setIsCurrentProduct(currentItem[0] || initialProduct);
  }, [router.query.slug]);

  return (
    <>
      <Layout title={isCurrentProduct.name} isSecondHeader mobileWithoutHeader>
        {isCurrentProduct.name.length > 0 && (
          <SelectedAd isCurrentProduct={isCurrentProduct} />
        )}
      </Layout>
      {isMobile && <FixedMobileBlock isCurrentProduct={isCurrentProduct} />}
    </>
  );
};

export default SelectedAdPage;
