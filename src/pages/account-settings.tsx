import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import ProfilePage from "components/ProfilePage/ProfilePage";
import Settings from "components/ProfilePage/Settings/Settings";

const MySettings: NextPage = () => {
  return (
    <Layout title="Account settings" isSecondHeader isProfile>
      <Settings />
    </Layout>
  );
};

export default MySettings;
