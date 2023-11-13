import type { NextPage } from "next";

import Layout from "components/Layout/Layout";
import ProfilePage from "components/ProfilePage/ProfilePage";
import useMediaQuery from "src/utils/useMediaQuery";
import ReviewedProducts from "components/ProfilePage/ReviewedProducts/ReviewedProducts";

const MyWallet: NextPage = () => {
  return (
    <ProfilePage title="profile.reviewedProducts" isShortMenu withoutInfoBlock>
      <ReviewedProducts />
    </ProfilePage>
  );
};

export default MyWallet;
