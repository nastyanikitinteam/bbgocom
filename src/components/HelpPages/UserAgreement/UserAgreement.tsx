import { useMemo } from "react";
import Layout from "../Layout/Layout";
import { userAgreementList } from "./config";
import BookIcon from "images/icons/book-icon.svg";

const UserAgreement = () => {
  const infoContent = {
    title: "Welcome to BBGO! 👋",
    text: "Read the User Agreement on the website or download the document",
    image: <BookIcon />,
    button: {
      link: "/",
      name: "Download",
    },
  };

  return (
    <Layout
      list={userAgreementList}
      title="User Agreement"
      infoContent={infoContent}
      isUserArgeement
    />
  );
};

export default UserAgreement;
