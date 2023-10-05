import type { NextPage } from "next";

import ProfilePage from "components/ProfilePage/ProfilePage";
import MyAds from "components/ProfilePage/MyAds/MyAds";
import useMediaQuery from "src/utils/useMediaQuery";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="My Ads" isShortMenu withoutInfoBlock>
      <MyAds />
    </ProfilePage>
  );
};

export default MyWallet;
