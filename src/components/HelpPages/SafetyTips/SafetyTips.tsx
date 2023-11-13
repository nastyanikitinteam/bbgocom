import Layout from "../Layout/Layout";
import { useTranslation } from "react-i18next";

const SafetyTips = () => {
  const { t } = useTranslation();
  const content = t("rules.safetyTipsList", { returnObjects: true });

  const infoContent = {
    title: "rules.questionsLeft",
    text: "rules.writeUsYourQuestion",
    button: {
      name: "help.message",
      link: "/",
    },
  };

  return (
    <Layout
      list={Array.isArray(content) && content}
      title="rules.safetyTips"
      infoContent={infoContent}
      isBlocktype
    />
  );
};

export default SafetyTips;
