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

  // useEffect(() => {
  //   const currentItem = categoriesList.filter(
  //     ({ slug }) => slug === router.query.slug
  //   );

  //   // @ts-ignore
  //   setIsCurrentList(currentItem[0] || initialCategory);
  // }, [router.query.slug]);

  useEffect(() => {
    const currentItem = categoriesList.filter(
      ({ slug }) => slug === router.query.slug
    );

    if (currentItem.length === 0) {
      // Якщо не знайдено співпадіння в categoriesList, перевіряємо subcategories

      const matchingSubcategory = categoriesList.reduce(
        (matchingCategory, category) => {
          if (!matchingCategory) {
            const subcategory = category.subcategories.find(
              ({ slug }) => slug === ""
            );

            console.log(subcategory, "subcategory", router.query.slug);
            if (subcategory) {
              return { ...category, ...subcategory };
            }
          }
          return matchingCategory;
        },
        null
      );
      // @ts-ignore
      setIsCurrentList(matchingSubcategory);
    } else {
      // @ts-ignore
      setIsCurrentList(currentItem[0]);
    }
  }, [router.query.slug]);

  console.log(isCurrentList.title);
  return (
    // <Layout title={isCurrentList.title} isSecondHeader>
    //   123123
    // </Layout>
    <Layout title="Category filter" isSecondHeader>
      <CategoryFilterPage />
    </Layout>
  );
};

export default Product;
