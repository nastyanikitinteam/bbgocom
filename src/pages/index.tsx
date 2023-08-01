import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import MainPage from "components/MainPage/MainPage";

const Home: NextPage = () => {
  return (
    <Layout title="Main">
      <MainPage />
    </Layout>
  );
};

export default Home;
