import Link from "next/link";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./bottom.module.scss";
import ShowNumber from "./ShowNumber/ShowNumber";

import ArrowIcon from "images/icons/drop.svg";

const Bottom = () => {
  const isMobile = useMediaQuery(768);
  return (
    <div className={styles.container}>
      {!isMobile && <ShowNumber />}
      <Link href="/" className={styles.link}>
        All ads by the author
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      </Link>
    </div>
  );
};

export default Bottom;
