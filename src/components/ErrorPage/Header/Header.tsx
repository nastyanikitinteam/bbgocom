import { FC } from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./header.module.scss";
import LogoSvg from "images/main/logo.svg";

interface IProps {
  isSecondHeader?: boolean;
  withoutSearchBar?: boolean;
}

const Header: FC<IProps> = ({ isSecondHeader, withoutSearchBar }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <div className="wrapper">
          <div className={styles.content}>
            <Link href="/" className={styles.logo}>
              <LogoSvg />
            </Link>
            <p className={styles.logoDescription}>{t(`headerDescription`)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
