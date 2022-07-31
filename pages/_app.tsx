import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio of D.G.</title>
        <link rel="icon" type="image/icon" sizes="16x16" href="/D.svg" />
        <meta name="description" content="Webdev portfolio of D.G." />
        <meta name="author" content="D.G." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
