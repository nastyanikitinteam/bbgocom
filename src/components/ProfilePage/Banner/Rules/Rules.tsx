import { FC } from "react";
import styles from "./rules.module.scss";
import { useTranslation } from "react-i18next";
interface IProps {
  setIsOpenRules?: (bool: boolean) => void;
}

const Rules: FC<IProps> = ({ setIsOpenRules }) => {
  const { t } = useTranslation();
  const items = t("rules.itemsBanners", { returnObjects: true });
  console.log(items);
  return (
    Array.isArray(items) &&
    items.length > 0 && (
      <div className={styles.container}>
        <h3 className={styles.title}>{t(`rules.rulesAndRequirements`)}</h3>
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    )
  );
};

export default Rules;
