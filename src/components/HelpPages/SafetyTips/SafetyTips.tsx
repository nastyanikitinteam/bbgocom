import { useMemo } from "react";
import Layout from "../Layout/Layout";
import { safetyTipsList } from "./config";

const SafetyTips = () => {
  const infoContent = {
    title: "Questions left? 💬",
    text: "Write us your question and we will try to solve it as soon as possible.",
    button: {
      name: "Message",
      link: "/",
    },
  };

  return (
    <Layout
      list={safetyTipsList}
      title="Safety tips"
      infoContent={infoContent}
      isBlocktype
    />
  );
};

export default SafetyTips;
