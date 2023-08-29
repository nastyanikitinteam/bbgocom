import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import ProfilePage from "components/ProfilePage/ProfilePage";
import useMediaQuery from "src/utils/useMediaQuery";
import Wallet from "components/ProfilePage/Wallet/Wallet";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="Wallet">
      <Wallet />
    </ProfilePage>
  );
};

export default MyWallet;
