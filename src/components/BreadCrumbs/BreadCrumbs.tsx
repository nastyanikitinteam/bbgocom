import React from "react";
import Link from "next/link";
import isString from "lodash/isString";
import isEmpty from "lodash/isEmpty";
import ArrowIcon from "images/icons/drop.svg";
import { useTranslation } from "react-i18next";
import styles from "./bread-crumbs.module.scss";

interface IProps {
  crumbs: Array<any>;
}

const BreadCrumbs: React.FC<IProps> = ({ crumbs = [] }) => {
  // TODO: return

  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      {!isEmpty(crumbs) &&
        !isString(crumbs) &&
        crumbs.map(({ url, title }, index) => {
          const isLastCrumb = index === crumbs.length - 1;
          if (isLastCrumb) {
            return (
              <div key={url + title} className={styles.noLink}>
                {t(title)}
              </div>
            );
          }
          return (
            <div key={url + title} className={styles.item}>
              <Link href={url} className={styles.link}>
                {t(title)}
              </Link>
              <span className={styles.icon}>
                <ArrowIcon />
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default BreadCrumbs;
