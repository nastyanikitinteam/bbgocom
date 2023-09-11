import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import Rules from "components/HelpPages/Rules/Rules";

const RulesPage: NextPage = () => {
  return (
    <Layout title="Rules">
      <Rules />
    </Layout>
  );
};

export default RulesPage;
