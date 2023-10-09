import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout/Layout";
import CategoryFilterPage from "components/CategoryFilterPage/CategoryFilterPage";

import { categoriesList } from "components/Category/config";
import {
  ICategory,
  ISubcategories,
  initialCategory,
  initialSubcategories,
  ISubcategoriesItem,
  initialSubcategoryItem,
} from "src/interfaces/category";

const Product: NextPage = () => {
  const router = useRouter();

  const [isCurrentList, setIsCurrentList] =
    useState<ICategory>(initialCategory);

  const [isSubcategories, setIsSubcategories] =
    useState<ISubcategories>(initialSubcategories);

  const [isSubcategoryItem, setIsSubcategoryItem] =
    useState<ISubcategories>(initialSubcategories);

  useEffect(() => {
    const currentItem = categoriesList.filter(
      ({ slug }) => slug === router.query.product
    );

    // @ts-ignore
    setIsCurrentList(currentItem[0] || initialCategory);
  }, [router.query.slug]);

  useEffect(() => {
    const subcategoriesItems = isCurrentList.items.filter(
      ({ slug }) => slug === router.query.slug
    );

    // @ts-ignore
    setIsSubcategories(subcategoriesItems[0] || initialSubcategories);
  }, [isCurrentList]);

  useEffect(() => {
    const subcategoriesItem = isCurrentList.items.filter(
      ({ slug }) => slug === router.query.slug
    );

    // @ts-ignore
    setIsSubcategoryItem(subcategoriesItem[0] || initialSubcategoryItem);
  }, [isSubcategoryItem]);

  return (
    <Layout title="Category filter" isSecondHeader mobileWithoutBottomMenu>
      <CategoryFilterPage
        isCurrentList={isCurrentList}
        isSubcategories={isSubcategories}
        isSubcategoryItem={isSubcategoryItem}
      />
    </Layout>
  );
};

export default Product;
