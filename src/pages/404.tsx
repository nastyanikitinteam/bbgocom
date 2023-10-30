import type { NextPage } from "next";

import Layout from "components/Layout/Layout";
import ErrorPage from "components/ErrorPage/ErrorPage";

const Home: NextPage = () => {
  return <ErrorPage title="404"></ErrorPage>;
};

export default Home;
