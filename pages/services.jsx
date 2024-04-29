import Head from "next/head";

import ExteriorServices from "../components/services/ExteriorServices";
import InteriorServices from "../components/services/InteriorServices";
import PaintCorrectionService from "../components/services/PaintCorrectionService";
import PageSection from "../components/ui/PageSection";

const services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="You can view all teh services we offer at Hustle Automotive"
        />
      </Head>
      <main>
        <PageSection>
          <h2 className="pb-5 page-heading">Services</h2>

          <InteriorServices />
        </PageSection>

        <PageSection>
          <PaintCorrectionService />
        </PageSection>

        <PageSection>
          <ExteriorServices />
        </PageSection>
      </main>
    </>
  );
};

export default services;
