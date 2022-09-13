import Script from "next/script";
import { ModalContainer } from "reoverlay";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="gtag-load" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function etag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <Component {...pageProps} />
      <ModalContainer />
    </>
  );
}

export default MyApp;
