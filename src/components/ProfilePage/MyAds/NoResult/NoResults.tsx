import { FC } from "react";
import Link from "next/link";
import styles from "./noresult.module.scss";
import cn from "classnames";
import ListIcon from "images/icons/list-icon.svg";

interface IProps {
  isActiveCategory: string;
}

const NoResult: FC<IProps> = ({ isActiveCategory }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <ListIcon />
      </div>
      {isActiveCategory == "Rejected" && (
        <>
          <h3 className={styles.subtitle}>
            Ads rejected after moderation are displayed here
          </h3>
          <p className={styles.text}>
            Depending on why the ad was rejected, you can still edit it and try
            to activate it again.
          </p>
        </>
      )}
      {isActiveCategory != "Rejected" && (
        <h3 className={styles.subtitle}>Empty</h3>
      )}

      <Link
        href="/create-an-ad"
        className={cn("default-button sm", styles.button)}
      >
        Create an Ad
      </Link>
    </div>
  );
};

export default NoResult;
