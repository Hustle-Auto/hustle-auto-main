import Link from "next/link";

import Icon from "../components/icon";
import Layout from "../components/layout/Layout";
import PageSection from "../components/ui/PageSection";

const services = () => {
  return (
    <Layout>
      <main>
        <PageSection>
          <h2 className="page-heading">Services</h2>

          <div className="mt-5 space-y-3 text-center">
            <div className="flex justify-center">
              <Icon.WrenchScrewDriver className="w-10 h-10" />
            </div>
            <div className="font-bold">Currently Under Construction</div>
            <p>
              For a brief summary, please visit the{" "}
              <Link href="/get-a-quote">
                <a className="text-accent">Get A Quote</a>
              </Link>{" "}
              Page.
            </p>
          </div>
        </PageSection>
      </main>
    </Layout>
  );
};

export default services;
