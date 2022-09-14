import { useState } from "react";

import Image from "next/image";
import Link from "next/link.js";

import CustomerReview from "../components/CustomerReview.jsx";
import Layout from "../components/layout/Layout.jsx";
import Button from "../components/ui/Button.jsx";
import PageSection from "../components/ui/PageSection.jsx";
import customerReviews from "../data/customer-reviews";
import logo from "../public/images/logo.svg";

export default function Home() {
  const [userInput, setUserInput] = useState({ carSize: [] });

  return (
    <Layout>
      <section className="bg-black">
        <PageSection>
          <div className="w-3/4 max-w-sm mx-auto">
            <Image src={logo} alt="logo" />
          </div>

          <h1 className="mb-12 text-5xl font-semibold text-center text-white uppercase font-heading">
            Striving To Be the Best Detailers in the City!
          </h1>

          <p className="mb-12 text-2xl text-center text-white capitalize">
            We Hustle To Provide The Best Service You Can Get!
          </p>

          <div className="mb-12 text-center">
            <Link href="/get-a-quote">
              <Button>Get A Quote!</Button>
            </Link>
          </div>
        </PageSection>
      </section>

      <PageSection>
        <h2 className="page-heading">Our Reviews</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
    </Layout>
  );
}
