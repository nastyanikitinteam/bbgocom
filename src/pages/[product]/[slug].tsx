import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout/Layout";
import CategoryFilterPage from "components/CategoryFilterPage/CategoryFilterPage";

import { categoriesList } from "components/Category/config";
import { ICategory, initialCategory } from "src/interfaces/category";

const Product: NextPage = () => {
  const router = useRouter();

  const [isCurrentList, setIsCurrentList] =
    useState<ICategory>(initialCategory);

  useEffect(() => {
    const currentItem = categoriesList.filter(
      ({ slug }) => slug === router.query.slug
    );

    // @ts-ignore
    setIsCurrentList(currentItem[0] || initialCategory);
    console.log(router.query.product);
  }, [router.query.slug]);

  return (
    <Layout title="Category filter" isSecondHeader mobileWithoutBottomMenu>
      <CategoryFilterPage />
    </Layout>
  );
};

export default Product;
