import type { NextPage } from "next";

import ProfilePage from "components/ProfilePage/ProfilePage";
import useMediaQuery from "src/utils/useMediaQuery";
import Chat from "components/ProfilePage/Chat/Chat";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="profile.myMessages" withoutInfoBlock>
      <Chat />
    </ProfilePage>
  );
};

export default MyWallet;
