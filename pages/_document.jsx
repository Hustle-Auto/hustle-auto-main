import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Hustle Automotive is a mobile detailing service based in Calgary. We provides quality and affordable car detailing services. Our services include: Interior and Exterior Detailing, Paint Correction, and more!"
          />
          <meta name="robots" content="index, follow" />

          {/* Open Graph meta tags for linkedIn, Facebook, Instagram */}
          <meta property="og:title" content="Hustle Automotive Services" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Hustle Automotive is a mobile/in-house detailing service based in Calgary. We provides quality and affordable car detailing services. Our services include: Interior and Exterior Detailing, Paint Correction, and more!"
          />
          <meta
            property="og:url"
            content="https://hustleauto.com/"
          />
          <meta
            property="og:image"
            content="https://hustleauto.com/images/logo.png"
          />
           {/* Sitemap */}
          <meta name="google-site-verification" content="1uRoJkepZNIJe_a-tC5oPrYv_-KQ_2pg4Z5Ul5-tpNc" />
         </Head>

        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
