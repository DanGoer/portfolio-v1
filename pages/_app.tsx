import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio from David Goergens</title>
        <link rel="icon" type="image/icon" sizes="16x16" href="/D.svg" />
        <meta name="description" content="Webdev portfolio of David Goergens" />
        <meta name="author" content="David Goergens" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
