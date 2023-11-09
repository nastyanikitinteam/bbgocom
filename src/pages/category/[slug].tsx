import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout/Layout";
import CategoryPage from "components/CategoryPage/CategoryPage";

import { categoriesList } from "config/categoriesList";
import { ICategory, initialCategory } from "src/interfaces/category";

const Category: NextPage = () => {
  const router = useRouter();

  const [isCurrentList, setIsCurrentList] =
    useState<ICategory>(initialCategory);

  useEffect(() => {
    const currentItem = categoriesList.filter(
      ({ slug }) => slug === router.query.slug
    );
    // @ts-ignore
    setIsCurrentList(currentItem[0] || initialCategory);
  }, [router.query.slug]);

  return (
    <Layout title={isCurrentList.title} isSecondHeader>
      <CategoryPage isCurrentList={isCurrentList} />
    </Layout>
  );
};

export default Category;
