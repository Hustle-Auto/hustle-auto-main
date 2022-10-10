import Script from "next/script";
import { ModalContainer } from "reoverlay";
import "../styles/globals.css";

import Layout from "../components/layout/Layout";
import HUS from "../data/hus";
import Construction from "../pages/construction";

function MyApp({ Component, pageProps }) {
  if (HUS.UNDER_CONSTRUCTION) {
    return <Construction {...pageProps} />;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ModalContainer />
    </>
  );
}

export default MyApp;
