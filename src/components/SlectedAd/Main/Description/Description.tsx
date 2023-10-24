import { FC, useState } from "react";
import styles from "./description.module.scss";
import { description } from "./config";
import cn from "classnames";

import ComplainIcon from "images/icons/сomplain.svg";
import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  isCurrentProduct: any;
}

const Description: FC<IProps> = ({ isCurrentProduct }) => {
  const [isShowDescription, setIsShowDescription] = useState(false);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Description</h3>
      <div className={styles.block}>
        <p className={styles.info}>ID: 685012401</p>
        <p className={styles.info}>Views: 1011</p>
        <div className={styles.complain}>
          <span className={styles.icon}>
            <ComplainIcon />
          </span>
          Complain
        </div>
      </div>
      <div
        className={cn(styles.description, {
          [styles.show]: isShowDescription,
        })}
      >
        {description.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.text}</p>;
          } else if (item.type === "header") {
            return <h4 key={index}>{item.text}</h4>;
          } else if (item.type === "list") {
            return (
              <ol key={index}>
                {item.items.map((listItem, listIndex) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ol>
            );
          }
          return null;
        })}
      </div>
      <div
        className={cn(styles.more, { [styles.show]: isShowDescription })}
        onClick={() => setIsShowDescription((prev) => !prev)}
      >
        {isShowDescription ? "Less" : "More"} Show
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      </div>
    </div>
  );
};

export default Description;
