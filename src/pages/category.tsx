import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
// import MainPage from "components/MainPage/MainPage";
import CategoryPage from "components/CategoryPage/CategoryPage";

const Category: NextPage = () => {
  return (
    <Layout title="Category" isSecondHeader>
      <CategoryPage />
    </Layout>
  );
};

export default Category;
