import type { NextPage } from "next";

import ProfilePage from "components/ProfilePage/ProfilePage";
import useMediaQuery from "src/utils/useMediaQuery";
import Settings from "components/ProfilePage/Settings/Settings";

const MySettings: NextPage = () => {
  return (
    <ProfilePage title="Account settings" showDeleteButton>
      <Settings />
    </ProfilePage>
  );
};

export default MySettings;
