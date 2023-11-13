import { useMemo, useState, FC, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";
import { useTranslation } from "react-i18next";
import { menuList, mobileMenuList } from "./config";

import cn from "classnames";
import styles from "./menu.module.scss";

const Menu = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(768);
  const [isMenuList, setIsMenuList] = useState(
    isMobile ? mobileMenuList : menuList
  );
  const router = useRouter();

  useEffect(() => {
    setIsMenuList(isMobile ? mobileMenuList : menuList);
  }, [isMobile]);

  return (
    <div className={styles.block}>
      {isMenuList.map(({ id, name, icon, link, isNew }) => {
        return (
          <Link
            href={link}
            key={id}
            className={cn(
              styles.item,
              router.pathname == link && [styles.active]
            )}
          >
            <span className={styles.icon}>{icon}</span>
            {t(name)}
            {isNew > 0 && <span className={styles.num}>{isNew}</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
