import Layout from "../Layout/Layout";
import BookIcon from "images/icons/book-icon.svg";
import { useTranslation } from "react-i18next";

const Rules = () => {
  const { t } = useTranslation();
  const content = t("rules.rulesList", { returnObjects: true });

  const infoContent = {
    title: "rules.welcomeToBBGO",
    text: "rules.gladYouAreHere",
    image: <BookIcon />,
  };

  return (
    <Layout
      list={Array.isArray(content) && content}
      title="general.rules"
      infoContent={infoContent}
    />
  );
};

export default Rules;
