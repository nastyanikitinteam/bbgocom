import type { NextPage } from "next";

import CreateAnAdd from "components/CreateAnAdd/CreateAnAdd";
import Layout from "components/Layout/Layout";

const CreateAnAddPage: NextPage = () => {
  return (
    <Layout title="Create an add" isSecondHeader>
      <CreateAnAdd />
    </Layout>
  );
};

export default CreateAnAddPage;
