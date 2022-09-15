import Script from "next/script";
import { ModalContainer } from "reoverlay";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config',  '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}' );
        `}
      </Script>

      <Component {...pageProps} />
      <ModalContainer />
    </>
  );
}

export default MyApp;
