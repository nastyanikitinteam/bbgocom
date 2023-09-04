import { FC } from "react";
import styles from "./message.module.scss";

interface IProps {
  userIsSender: boolean;
  text: string;
  time: string;
  date: string;
}

const Message: FC<IProps> = ({ userIsSender, text, time, date }) => {
  return <div className={styles.container}>{text}</div>;
};

export default Message;
