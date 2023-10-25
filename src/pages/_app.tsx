import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import ThemeContext from "../context";
import storeWrapper from "../store";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/I18n";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [height, setHeight] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const { pathname, query, asPath } = router;

    const currentLanguage = i18n.language;
    const desiredLanguage = query.lang as string;

    if (desiredLanguage && desiredLanguage !== currentLanguage) {
      if (desiredLanguage !== "en") {
        const basePath = pathname.replace(`/${currentLanguage}`, "");
        const newURL = `/${desiredLanguage}${basePath}${asPath}`;
        console.log(newURL);
        router.push(pathname, newURL, { locale: desiredLanguage });
      }
    } else {
      const supportedLanguages = ["ca", "kz"];
      if (supportedLanguages.includes(currentLanguage)) {
        const newURL = `/${currentLanguage}${pathname}${asPath}`;
        router.push(pathname, newURL, { locale: currentLanguage });
      }
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(router.locale);

    const { route, asPath, query } = router;
    router.push({ pathname: route, query }, asPath, {
      locale: router.locale,
    });
  }, [router.locale]);

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  return (
    <ThemeContext.Provider value={{ height, setHeight }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

// export default MyApp;

export default storeWrapper.withRedux(MyApp);
