import { useMemo, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./create-an-ad.module.scss";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import bannerImg from "images/create-an-add/hero-banner.jpg";
import bannerEditImg from "images/create-an-add/hero-banner-edit.jpg";
import Create from "./Create/Create";
import { useTranslation } from "react-i18next";

interface IProps {
  currentAdInfo?: any;
}

const CreateAnAd: FC<IProps> = ({ currentAdInfo }) => {
  const isMobile = useMediaQuery(768);
  const { t } = useTranslation();

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: `general.profile`,
        url: "/",
      },
      {
        id: 0,
        title: "general.createButton",
      },
    ],
    []
  );
  return (
    <>
      {!isMobile && (
        <section>
          <div className="wrapper">
            <BreadCrumbs crumbs={breadCrumbs} />
            <div className={styles.banner}>
              <img
                src={currentAdInfo ? bannerEditImg.src : bannerImg.src}
                alt=""
              />
            </div>
          </div>
        </section>
      )}
      <Create currentAdInfo={currentAdInfo} />
    </>
  );
};

export default CreateAnAd;
