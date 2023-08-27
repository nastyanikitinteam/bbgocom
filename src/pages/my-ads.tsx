import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import ProfilePage from "components/ProfilePage/ProfilePage";
import Settings from "components/ProfilePage/Settings/Settings";

const ADS: NextPage = () => {
  return (
    <Layout title="My ADS" isSecondHeader isProfile>
      My ADS
    </Layout>
  );
};

export default ADS;
