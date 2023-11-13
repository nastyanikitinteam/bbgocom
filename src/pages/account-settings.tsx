import type { NextPage } from "next";
import ProfilePage from "components/ProfilePage/ProfilePage";
import Settings from "components/ProfilePage/Settings/Settings";
import { useTranslation } from "react-i18next";

const MySettings: NextPage = () => {
  const { t } = useTranslation();

  return (
    <ProfilePage title="profile.accountSettings" showDeleteButton>
      <Settings />
    </ProfilePage>
  );
};

export default MySettings;
