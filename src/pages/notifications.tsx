import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import ProfilePage from "components/ProfilePage/ProfilePage";
import useMediaQuery from "src/utils/useMediaQuery";
import Notifications from "components/ProfilePage/Notifications/Notifications";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="Notifications" isShortMenu>
      <Notifications />
    </ProfilePage>
  );
};

export default MyWallet;
