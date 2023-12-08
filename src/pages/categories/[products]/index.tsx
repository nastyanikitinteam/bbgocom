import type { NextPage } from "next";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout/Layout";
import CategoryFilterPage from "components/CategoryFilterPage/CategoryFilterPage";
import { useTranslation } from "react-i18next";
import { categoriesList } from "config/categoriesList";
import { ICategory, initialCategory } from "src/interfaces/category";

const Product: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [isCurrentList, setIsCurrentList] =
    useState<ICategory>(initialCategory);

  useEffect(() => {
    const currentItem = categoriesList.filter(
      ({ slug }) => slug === router.query.products
    );
    // @ts-ignore
    setIsCurrentList(currentItem[0] || initialCategory);
  }, [router.query.products]);

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: `general.home`,
        url: "/",
      },
      {
        id: 1,
        title: isCurrentList.title,
      },
    ],
    [isCurrentList]
  );

  return (
    <Layout title="Category filter" isSecondHeader>
      <CategoryFilterPage
        isCurrentList={isCurrentList}
        breadCrumbs={breadCrumbs}
      />
    </Layout>
  );
};

export default Product;
