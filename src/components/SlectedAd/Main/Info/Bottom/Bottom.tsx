import Link from "next/link";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./bottom.module.scss";
import ShowNumber from "./ShowNumber/ShowNumber";
import ArrowIcon from "images/icons/drop.svg";
import { useTranslation } from "react-i18next";

const Bottom = () => {
  const isMobile = useMediaQuery(768);
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      {!isMobile && <ShowNumber />}
      <Link href="/" className={styles.link}>
        {t(`selectedad.allAdsByAuthor`)}
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      </Link>
    </div>
  );
};

export default Bottom;
