import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Icon from "../components/icon";
import Card from "../components/ui/Card";
import PageSection from "../components/ui/PageSection";

const interiorServices = [
  [
    "Thoroughly vacuum the interior carpets, mats, seats and truck space",
    "Clean and sanitize all interior panels",
    "Clean both exterior & interior windows",
    "Steam clean the vents",
    "Wash the rubber mats",
  ],
  [
    "Shampoo of mats, carpets of the vehicle and if vehicle is equipped with cloths seats, that will be shampooed as well",
    "Clean and condition leather seats",
    "Clean and condition vinyl and plastics",
    "Remove any spots",
    "Cleaning of door jams",
  ],
  [
    "Cleaning of the headliner",
    "Steam and clean of seat belts",
    "Protection Coating to all Plastic, Vinyl and Rubber surfaces from stains and dirt",
    "Protection Coating to all Leather Surfaces",
    "Protection Coating to all fabric surfaces",
  ],
];

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
          <h2 className="page-heading">Services</h2>

          <section className="my-10">
            <div className="px-4 py-3">
              <div className="md:flex">
                <div className="w-3/4">
                  <Image
                    src="/images/services/interior.jpg"
                    alt="Interior Picture"
                    width={960}
                    height={640}
                    layout="responsive"
                    className="rounded"
                  />
                </div>
                <div className="w-full pt-5 md:px-5">
                  <p className="mb-4 text-2xl font-bold">Interior Services</p>
                  <p>
                    Our car detailing company offers a range of interior
                    services to help you maintain the cleanliness and appearance
                    of your vehicle&apos;s interior. We understand that your car
                    is more than just a means of transportation, it&apos;s an
                    extension of your personal style and a reflection of your
                    lifestyle. That&apos;s why we take great pride in providing
                    exceptional interior detailing services that will leave your
                    vehicle looking and feeling like new.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-4">
            <table id="services-table">
              <thead>
                <tr>
                  <th>Interior Services</th>
                  <th>Regular Interior</th>
                  <th>Enhanced Interior</th>
                  <th>Elite Interior</th>
                </tr>
              </thead>
              <tbody>
                {interiorServices[0].map((service, index) => (
                  <tr key={index}>
                    <td>{service}</td>
                    {Array(3)
                      .fill()
                      .map((_, i) => (
                        <td key={i}>
                          <div className="flex justify-center">
                            <Icon.Check className="w-5 h-5 text-accent" />
                          </div>
                        </td>
                      ))}
                  </tr>
                ))}

                {interiorServices[1].map((service, index) => (
                  <tr key={index}>
                    <td>{service}</td>
                    {Array(1)
                      .fill()
                      .map((_, i) => (
                        <td key={i}></td>
                      ))}
                    {Array(2)
                      .fill()
                      .map((_, i) => (
                        <td key={i}>
                          <div className="flex justify-center">
                            <Icon.Check className="w-5 h-5 text-accent" />
                          </div>
                        </td>
                      ))}
                  </tr>
                ))}

                {interiorServices[2].map((service, index) => (
                  <tr key={index}>
                    <td>{service}</td>
                    {Array(2)
                      .fill()
                      .map((_, i) => (
                        <td key={i}></td>
                      ))}
                    {Array(1)
                      .fill()
                      .map((_, i) => (
                        <td key={i}>
                          <div className="flex justify-center">
                            <Icon.Check className="w-5 h-5 text-accent" />
                          </div>
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </PageSection>
      </main>
    </>
  );
};

export default services;
