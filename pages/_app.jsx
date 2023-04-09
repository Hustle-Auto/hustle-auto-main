import * as cookies from "cookies-next";
import Script from "next/script";
import { ModalContainer, Reoverlay } from "reoverlay";
import "../styles/globals.css";

import CookieConsentModal from "../components/CookieConsentModal";
import Layout from "../components/layout/Layout";
import HUSTLE from "../data/hustle";
import Construction from "../pages/construction";

const cookieConsentKey = "cookie-consent";

function MyApp({ Component, pageProps }) {
  if (HUSTLE.SITE.UNDER_CONSTRUCTION) {
    return <Construction {...pageProps} />;
  }

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          // Define dataLayer and the gtag function.
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Default ad_storage to 'denied'.
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
          
          <!-- Google Tag Manager -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${HUSTLE.SITE.GOOGLE_TAG_MANAGER_ID}');
          <!-- End Google Tag Manager -->
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
