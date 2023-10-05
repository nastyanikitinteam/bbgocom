import type { NextPage } from "next";

import ProfilePage from "components/ProfilePage/ProfilePage";
import Notifications from "components/ProfilePage/Notifications/Notifications";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="Notifications" isShortMenu>
      <Notifications />
    </ProfilePage>
  );
};

export default MyWallet;
