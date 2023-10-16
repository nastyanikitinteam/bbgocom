import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import ThemeContext from "../context";
import storeWrapper from "../store";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [height, setHeight] = useState(0);

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
