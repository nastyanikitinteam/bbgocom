import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import HelpPage from "components/HelpPages/HelpPage/HelpPage";

const Help: NextPage = () => {
  return (
    <Layout title="Help" withoutSearchBar mobileWithoutHeader>
      <HelpPage />
    </Layout>
  );
};

export default Help;
