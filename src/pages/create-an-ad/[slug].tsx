import type { NextPage } from "next";

import CreateAnAd from "components/CreateAnAd/CreateAnAd";
import Layout from "components/Layout/Layout";

const CreateAnAdPage: NextPage = () => {
  return (
    <Layout title="Create an ad" isSecondHeader mobileWithoutSearchBar>
      <CreateAnAd />
    </Layout>
  );
};

export default CreateAnAdPage;
