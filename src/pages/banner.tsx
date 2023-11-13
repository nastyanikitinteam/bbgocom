import type { NextPage } from "next";

import ProfilePage from "components/ProfilePage/ProfilePage";
import useMediaQuery from "src/utils/useMediaQuery";
import Banner from "components/ProfilePage/Banner/Banner";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="profile.banners" withoutInfoBlock isBanner>
      <Banner />
    </ProfilePage>
  );
};

export default MyWallet;
