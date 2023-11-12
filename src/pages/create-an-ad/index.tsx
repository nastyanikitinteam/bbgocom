import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import CreateAnAd from "components/CreateAnAd/CreateAnAd";
import Layout from "components/Layout/Layout";

const CreateAnAdPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Layout
      title={t(`general.createButton`)}
      isSecondHeader
      mobileWithoutSearchBar
    >
      <CreateAnAd />
    </Layout>
  );
};

export default CreateAnAdPage;
