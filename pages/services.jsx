import Head from "next/head";

import ExteriorServices from "../components/services/ExteriorServices";
import InteriorServices from "../components/services/InteriorServices";
import PaintCorrectionService from "../components/services/PaintCorrectionService";
import ProtectiveCoatingService from "../components/services/ProtectiveCoatingService";
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
        <h2 className="pb-5 page-heading">Services</h2>
        <PageSection>
          <ProtectiveCoatingService />
        </PageSection>

        <PageSection>
          <InteriorServices />
        </PageSection>

        <PageSection>
          <PaintCorrectionService />
        </PageSection>

        <PageSection>
          <div className="relative">
            <div className="absolute flex items-center justify-center w-full h-full">
              <div className="z-10 max-w-lg px-5 py-8 bg-white border border-black opacity-100">
                We have temporarily suspended our Exterior Detailing Services
                due to a change in bylaws. We thank you for your patience.
              </div>
            </div>
            <div className="pointer-events-none blur-sm">
              <ExteriorServices />
            </div>
          </div>
        </PageSection>
      </main>
    </>
  );
};

export default services;
