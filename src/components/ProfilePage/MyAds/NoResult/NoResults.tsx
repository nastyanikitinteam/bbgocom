import { FC } from "react";
import Link from "next/link";
import styles from "./noresult.module.scss";
import cn from "classnames";
import ListIcon from "images/icons/list-icon.svg";
import { useTranslation } from "react-i18next";

interface IProps {
  isActiveCategory: string;
}

const NoResult: FC<IProps> = ({ isActiveCategory }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <ListIcon />
      </div>
      {isActiveCategory == "Rejected" && (
        <>
          <h3 className={styles.subtitle}>
            {t(`profile.adsRejectedAfterModeration`)}
          </h3>
          <p className={styles.text}>{t(`profile.editAndActivate`)}</p>
        </>
      )}
      {isActiveCategory != "Rejected" && (
        <h3 className={styles.subtitle}>{t(`general.empty`)}</h3>
      )}

      <Link
        href="/create-an-ad"
        className={cn("default-button sm", styles.button)}
      >
        {t(`general.createButton`)}
      </Link>
    </div>
  );
};

export default NoResult;
