import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import ProfilePage from "components/ProfilePage/ProfilePage";
import useMediaQuery from "src/utils/useMediaQuery";
import Banner from "components/ProfilePage/Banner/Banner";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="Banners" withoutInfoBlock isBanner>
      <Banner />
    </ProfilePage>
  );
};

export default MyWallet;
