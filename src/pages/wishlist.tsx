import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import WishPage from "components/WishPage/WishPage";

const AdvertiseWithUs: NextPage = () => {
  return (
    <Layout title="Wishlists" withoutSearchBar mobileWithoutSearchBar>
      <WishPage />
    </Layout>
  );
};

export default AdvertiseWithUs;
