import Head from "next/head";

import Icon from "../components/icon";
import PageSection from "../components/ui/PageSection";
import HUS from "../data/hus";

const gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta
          name="description"
          content="You can contact Hustle Automotive using the form"
        />
      </Head>
      <main>
        <PageSection>
          <h2 className="page-heading">Gallery</h2>

          <div className="mt-5 space-y-3 text-center">
            <div className="flex justify-center">
              <Icon.WrenchScrewDriver className="w-10 h-10" />
            </div>
            <div className="font-bold">Currently Under Construction</div>
            <p>
              Please have a look at our{" "}
              <a
                href={`${HUS.HUSTLE_AUTO_SOCIAL_LINKS.FACEBOOK}`}
                target="blank"
                className="text-accent"
              >
                Facebook
              </a>
              ,{" "}
              <a
                href={`${HUS.HUSTLE_AUTO_SOCIAL_LINKS.INSTAGRAM}`}
                target="blank"
                className="text-accent"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href={`${HUS.HUSTLE_AUTO_SOCIAL_LINKS.LINKEDIN}`}
                target="blank"
                className="text-accent"
              >
                LinkedIn
              </a>
              , and{" "}
              <a
                href={`${HUS.HUSTLE_AUTO_SOCIAL_LINKS.GOOGLE}`}
                target="blank"
                className="text-accent"
              >
                Google
              </a>{" "}
              pages for pictures.
            </p>
          </div>
        </PageSection>
      </main>
    </>
  );
};

export default gallery;
