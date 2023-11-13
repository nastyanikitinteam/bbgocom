import { useMemo } from "react";
import Layout from "../Layout/Layout";
import { safetyTipsList } from "./config";

const SafetyTips = () => {
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
      list={safetyTipsList}
      title="rules.safetyTips"
      infoContent={infoContent}
      isBlocktype
    />
  );
};

export default SafetyTips;
