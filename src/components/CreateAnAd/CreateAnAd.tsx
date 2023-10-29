import { useMemo, FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./create-an-ad.module.scss";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import bannerImg from "images/create-an-add/hero-banner.jpg";
import bannerEditImg from "images/create-an-add/hero-banner-edit.jpg";
import Create from "./Create/Create";

interface IProps {
  isCurrentAd?: any;
}

const CreateAnAd: FC<IProps> = ({ isCurrentAd }) => {
  const isMobile = useMediaQuery(768);

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: "Home",
        url: "/",
      },
      {
        id: 0,
        title: "Create an add",
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
                src={isCurrentAd ? bannerEditImg.src : bannerImg.src}
                alt=""
              />
            </div>
          </div>
        </section>
      )}
      <Create isCurrentAd={isCurrentAd} />
    </>
  );
};

export default CreateAnAd;
