import Layout from "../Layout/Layout";
import BookIcon from "images/icons/book-icon.svg";
import { useTranslation } from "react-i18next";

const UserAgreement = () => {
  const { t } = useTranslation();
  const content = t("rules.userArgeementList", { returnObjects: true });

  const infoContent = {
    title: "rules.welcomeToBBGO",
    text: "rules.readUserAgreement",
    image: <BookIcon />,
    button: {
      link: "/",
      name: "rules.download",
    },
  };
  return (
    <Layout
      list={Array.isArray(content) && content}
      title="rules.userAgreement"
      infoContent={infoContent}
      isUserArgeement
    />
  );
};

export default UserAgreement;
