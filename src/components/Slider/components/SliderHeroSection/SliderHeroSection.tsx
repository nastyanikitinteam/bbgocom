import { FC } from "react";
import Link from "next/link";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./slide-hero-section.module.scss";

interface IProps {
  param: any;
}

// interface IProp {
//   name: string;
//   link: string;
// }
// backgroundMobile;

const Slide: FC<IProps> = ({ param }) => {
  const isMobile = useMediaQuery(400);
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage:
          isMobile && param.backgroundMobile
            ? `url(${param.backgroundMobile})`
            : `url(${param.background})`,
      }}
    >
      {param.button && (
        <div className={styles.button}>
          <Link href={param.button.link} className="default-button">
            {param.button.name}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Slide;
