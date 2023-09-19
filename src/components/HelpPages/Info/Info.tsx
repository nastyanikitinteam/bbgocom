import { FC } from "react";
import Link from "next/link";
import styles from "./info.module.scss";
import BookIcon from "images/icons/book-icon.svg";
import cn from "classnames";

interface IProps {
  content: any;
}

const Info: FC<IProps> = ({ content }) => {
  return (
    <div
      className={cn(
        styles.container,
        { [styles.withIcon]: content.image },
        { [styles.withButton]: content.button }
      )}
    >
      {content.image && (
        <div className={styles.image}>
          <BookIcon />
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{content.title}</h3>
        <p className={styles.text}>{content.text}</p>
      </div>
      {content.button && (
        <Link
          href={content.button.link}
          className={cn("default-button sm", styles.button)}
        >
          {content.button.name}
        </Link>
      )}
    </div>
  );
};

export default Info;
