import type { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "components/Layout/Layout";
import WishListPage from "components/WishListPage/WishListPage";

const Wishlist: NextPage = () => {
  const router = useRouter();

  return (
    <Layout
      title="Wishlist"
      withoutSearchBar
      mobileWithoutHeader
      mobileWithoutFooter
    >
      <WishListPage activeSlug={router.query.slug} />
    </Layout>
  );
};

export default Wishlist;
