import type { NextPage } from "next";

import ErrorPage from "components/ErrorPage/ErrorPage";

const Home: NextPage = () => {
  return <ErrorPage title="404"></ErrorPage>;
};

export default Home;
