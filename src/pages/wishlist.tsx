import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Layout from "components/Layout/Layout";
import WishPage from "components/WishPage/WishPage";

const Wishlist: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Layout
      title={t(`wishlist.wishlists`)}
      withoutSearchBar
      mobileWithoutSearchBar
      mobileWithoutFooter
    >
      <WishPage />
    </Layout>
  );
};

export default Wishlist;
