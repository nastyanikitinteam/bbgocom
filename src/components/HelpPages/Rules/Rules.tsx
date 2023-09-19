import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { scrollSpy } from "react-scroll";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./rules.module.scss";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Terms from "./Terms";
import Info from "./Info/Info";
import cn from "classnames";
import { rulesList } from "./config";

const Rules = () => {
  const [isActiveRules, setIsActiveRules] = useState(null);
  const isMobile = useMediaQuery(768);

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: "Home",
        url: "/",
      },
      {
        id: 0,
        title: "Rules",
      },
    ],
    []
  );

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const blockRefs = rulesList.map((_, id) =>
      document.getElementById(`section${id}`)
    );

    let activeBlockId = null;

    for (let i = 0; i < blockRefs.length; i++) {
      const block = blockRefs[i];
      if (block) {
        const blockTop = block.getBoundingClientRect().top + scrollY;
        const blockBottom = block.getBoundingClientRect().bottom + scrollY;
        if (scrollY >= blockTop - 100 && scrollY < blockBottom - 100) {
          activeBlockId = i;
          break;
        }
      }
    }
    setIsActiveRules(activeBlockId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className="wrapper">
        <BreadCrumbs crumbs={breadCrumbs} />
        <h1 className={styles.title}>Rules</h1>
        <div className={styles.content}>
          {isMobile && <Info />}
          <div className={styles.info}>
            <ul className={styles.list}>
              {rulesList.map((item, id) => (
                <li
                  key={id}
                  className={cn({
                    [styles.active]: id === isActiveRules,
                  })}
                >
                  <Link href={`#section${id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.main}>
            {!isMobile && <Info />}
            <div className={styles.description}>
              {rulesList.map((item, id) => {
                return (
                  <div id={`section${id}`} className={styles.block} key={id}>
                    <h3>
                      {id + 1}. {item.title}
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
