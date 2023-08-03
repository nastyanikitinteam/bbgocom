import { useState } from "react";
import type { AppProps } from "next/app";
import ThemeContext from "../context";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [height, setHeight] = useState(0);

  return (
    <ThemeContext.Provider value={{ height, setHeight }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
