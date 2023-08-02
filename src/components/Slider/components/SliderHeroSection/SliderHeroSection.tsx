import { url } from "inspector";
import { FC } from "react";
import styles from "./slide-hero-section.module.scss";

interface IProps {
  param: any;
}

// interface IProp {
//   name: string;
//   link: string;
// }

const Slide: FC<IProps> = ({ param }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${param.background})`,
      }}
    >
      {param.button && (
        <div className={styles.button}>
          <a href={param.button.link} className="default-button">
            {param.button.name}
          </a>
        </div>
      )}
    </div>
  );
};

export default Slide;
