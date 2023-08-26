import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import ProfilePage from "components/ProfilePage/ProfilePage";

const Home: NextPage = () => {
  return (
    <Layout title="Profile">
      <ProfilePage />
    </Layout>
  );
};

export default Home;
