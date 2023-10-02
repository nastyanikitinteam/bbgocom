import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import WishListPage from "components/WishListPage/WishListPage";

const Wishlist: NextPage = () => {
  return (
    <Layout title="Wishlist" withoutSearchBar mobileWithoutSearchBar>
      <WishListPage />
    </Layout>
  );
};

export default Wishlist;
