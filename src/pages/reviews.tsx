import type { NextPage } from "next";
import ProfilePage from "components/ProfilePage/ProfilePage";
import Reviews from "components/ProfilePage/Reviews/Reviews";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="profile.reviews" isShortMenu>
      <Reviews />
    </ProfilePage>
  );
};

export default MyWallet;
