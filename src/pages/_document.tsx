import { useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/fonts/GolosText/stylesheet.css" />
      </Head>
      <body id="portal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
