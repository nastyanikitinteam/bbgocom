import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import CreateAnAd from "components/CreateAnAd/CreateAnAd";
import Layout from "components/Layout/Layout";

import { adList } from "components/ProfilePage/MyAds/config";
import { IAd, initialAd } from "src/interfaces/adProduct";

const CreateAnAdPage: NextPage = () => {
  const router = useRouter();

  const [currentAdInfo, setCurrentAdInfo] = useState<IAd>(initialAd);

  useEffect(() => {
    const currentAd = adList.filter(({ slug }) => slug === router.query.slug);
    // @ts-ignore
    setCurrentAdInfo(currentAd[0] || initialAd);
  }, [router.query.slug]);

  return (
    <Layout title="Create an ad" isSecondHeader mobileWithoutSearchBar>
      {currentAdInfo !== initialAd && (
        <CreateAnAd currentAdInfo={currentAdInfo} />
      )}
    </Layout>
  );
};

export default CreateAnAdPage;
