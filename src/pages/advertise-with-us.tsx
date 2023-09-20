import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import CategoryPage from "components/CategoryPage/CategoryPage";
import AdvertiseWithUsPage from "components/AdvertiseWithUsPage/AdvertiseWithUsPage";

const AdvertiseWithUs: NextPage = () => {
  return (
    <Layout title="Advertise with us" withoutSearchBar mobileWithoutHeader>
      <AdvertiseWithUsPage />
    </Layout>
  );
};

export default AdvertiseWithUs;
