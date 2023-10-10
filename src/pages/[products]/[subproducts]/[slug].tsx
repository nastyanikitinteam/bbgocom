import type { NextPage } from "next";
import { useState, useEffect, useMemo } from "react";
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
  const [isbaseUrl, setIsBaseUrl] = useState("");

  const [isCurrentList, setIsCurrentList] =
    useState<ICategory>(initialCategory);

  const [isSubcategories, setIsSubcategories] =
    useState<ISubcategories>(initialSubcategories);

  const [isSubcategoryItem, setIsSubcategoryItem] =
    useState<ISubcategories>(initialSubcategories);

  useEffect(() => {
    const currentItem = categoriesList.filter(
      ({ slug }) => slug === router.query.products
    );
    // @ts-ignore
    setIsCurrentList(currentItem[0] || initialCategory);
  }, [router.query.producs]);

  useEffect(() => {
    const subcategories = isCurrentList.subcategories.filter(
      ({ slug }) => slug === router.query.subproducts
    );
    // @ts-ignore
    setIsSubcategories(subcategories[0] || initialSubcategories);
  }, [isCurrentList]);

  useEffect(() => {
    const subcategoryItem = isSubcategories.items.filter(
      ({ slug }) => slug === router.query.slug
    );
    // @ts-ignore
    setIsSubcategoryItem(subcategoryItem[0] || initialSubcategoryItem);
  }, [isSubcategories]);

  useEffect(() => {
    setIsBaseUrl(window.location.origin);
  }, []);

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: "Home",
        url: "/",
      },
      {
        id: 1,
        title: isCurrentList.title,
        url: `${isbaseUrl}/categories/${isCurrentList.slug}`,
      },
      {
        id: 2,
        title: isSubcategories.title,
        url: `${isbaseUrl}/categories/${isCurrentList.slug}/${isSubcategories.slug}`,
      },
      {
        id: 3,
        title: isSubcategoryItem.title,
      },
    ],
    [isSubcategoryItem]
  );

  return (
    <Layout title="Category filter" isSecondHeader mobileWithoutBottomMenu>
      <CategoryFilterPage
        isCurrentList={isCurrentList}
        isSubcategories={isSubcategories}
        isSubcategoryItem={isSubcategoryItem}
        breadCrumbs={breadCrumbs}
      />
    </Layout>
  );
};

export default Product;
