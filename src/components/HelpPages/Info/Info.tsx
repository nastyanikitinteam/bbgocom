import { FC } from "react";
import Link from "next/link";
import styles from "./info.module.scss";
import BookIcon from "images/icons/book-icon.svg";
import cn from "classnames";
import { useTranslation } from "react-i18next";

interface IProps {
  content: any;
}

const Info: FC<IProps> = ({ content }) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        styles.container,
        { [styles.withIcon]: content.image && !content.button },
        { [styles.withButton]: content.button && !content.image },
        { [styles.withButtonImage]: content.button && content.image }
      )}
    >
      {content.image && (
        <div className={styles.image}>
          <BookIcon />
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{t(content.title)}</h3>
        <p className={styles.text}>{t(content.text)}</p>
      </div>
      {content.button && (
        <Link
          href={content.button.link}
          className={cn("default-button sm", styles.button)}
        >
          {t(content.button.name)}
        </Link>
      )}
    </div>
  );
};

export default Info;
