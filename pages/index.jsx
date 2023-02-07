import Head from "next/head";
import Link from "next/link.js";

import CustomerReview from "../components/CustomerReview.jsx";
import Icon from "../components/icon/index.js";
import Button from "../components/ui/Button.jsx";
import PageSection from "../components/ui/PageSection.jsx";
import customerReviews from "../data/customer-reviews";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hustle Automotive Services</title>
        <meta
          name="description"
          content="You can contact Hustle Automotive using the form"
        />
      </Head>
      <main>
        <section className="bg-black ">
          <PageSection>
            <div className="w-3/4 max-w-sm mx-auto shadow-2xl brightness-200 contrast-200">
              <Icon.HustleLogo />
            </div>

            <h1 className="mb-12 text-5xl font-semibold text-center text-white uppercase font-heading">
              Striving To Be the Best Detailers in the City!
            </h1>

            <p className="mb-12 text-3xl text-center text-white capitalize font-heading">
              We Hustle To Provide The Best Service You Can Get!
            </p>

            <div className="mb-12 text-center">
              <Link href="/get-a-quote">
                <a>
                  <Button>Get A Quote!</Button>
                </a>
              </Link>
            </div>
          </PageSection>
        </section>
        <PageSection>
          <h2 className="page-heading">Our Reviews</h2>
          <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-2 lg:grid-cols-3">
            {customerReviews.map((review) => (
              <CustomerReview
                key={review.customerName}
                imageSrc={review.imageSrc}
                imageWidth={review.imageWidth}
                imageHeight={review.imageHeight}
                customerName={review.customerName}
                description={review.description}
              />
            ))}
          </div>
        </PageSection>
      </main>
    </>
  );
}
