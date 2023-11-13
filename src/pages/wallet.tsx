import type { NextPage } from "next";
import ProfilePage from "components/ProfilePage/ProfilePage";
import Wallet from "components/ProfilePage/Wallet/Wallet";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="profile.wallet">
      <Wallet />
    </ProfilePage>
  );
};

export default MyWallet;
