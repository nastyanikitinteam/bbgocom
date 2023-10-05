import type { NextPage } from "next";

import Layout from "components/Layout/Layout";
import ProfilePage from "components/ProfilePage/ProfilePage";
import useMediaQuery from "src/utils/useMediaQuery";
import Reviews from "components/ProfilePage/Reviews/Reviews";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="Reviews" isShortMenu>
      <Reviews />
    </ProfilePage>
  );
};

export default MyWallet;
