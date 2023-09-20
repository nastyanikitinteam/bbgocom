import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import AdvertiseWithUsPage from "components/HelpPages/AdvertiseWithUsPage/AdvertiseWithUsPage";

const AdvertiseWithUs: NextPage = () => {
  return (
    <Layout title="Advertise with us" withoutSearchBar mobileWithoutHeader>
      <AdvertiseWithUsPage />
    </Layout>
  );
};

export default AdvertiseWithUs;
