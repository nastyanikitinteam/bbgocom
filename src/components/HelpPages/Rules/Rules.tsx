import { useMemo } from "react";
import Layout from "../Layout/Layout";
import { rulesList } from "./config";
import BookIcon from "images/icons/book-icon.svg";

const Rules = () => {
  const infoContent = {
    title: "Welcome to BBGO! 👋",
    text: "We're glad you're here. Settle in and have a good time, but follow our set of rules.",
    image: <BookIcon />,
  };

  return <Layout list={rulesList} title="Rules" infoContent={infoContent} />;
};

export default Rules;
