import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import CategoryPage from "components/CategoryPage/CategoryPage";
import CategoryFilterPage from "components/CategoryFilterPage/CategoryFilterPage";

const Category: NextPage = () => {
  return (
    <Layout title="Category filter" isSecondHeader>
      <CategoryFilterPage />
    </Layout>
  );
};

export default Category;
