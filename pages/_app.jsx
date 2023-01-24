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

  let cookieConsent = false;

  // Reoverlay.showModal(CookieConsentModal, {
  //   onAccept: () => {
  //     cookieConsent = true;
  //     cookies.setCookie(cookieConsentKey, cookieConsent);
  //   },
  //   onDecline: () => {
  //     cookieConsent = false;
  //     cookies.setCookie(cookieConsentKey, cookieConsent);
  //   },
  // });

  // if (!cookies.hasCookie(cookieConsentKey)) {
  //   console.log(`no cookie found for ${cookieConsentKey}`);
  //   // get cookie consent from user
  //   Reoverlay.showModal(CookieConsentModal, {
  //     onAccept: () => {
  //       cookieConsent = true;
  //       cookies.setCookie(cookieConsentKey, cookieConsent);
  //     },
  //     onDecline: () => {
  //       cookieConsent = false;
  //       cookies.setCookie(cookieConsentKey, cookieConsent);
  //     },
  //   });

  //   // set cookie consent
  //   cookieConsent = true;
  // }
  // else {
  //   // get cookie consent from cookie

  //   // set cookie consent
  //   cookieConsent = cookies.getCookie("cookieConsent");
  // }

  return (
    <>
      <Script id="disable-google-analytics">
        {`
          window['ga-disable-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'] = false;
        `}
      </Script>
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
