import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Icon from "../components/icon";
import Button, { KIND, TYPE } from "../components/ui/Button";
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

          <Button>Basic Button</Button>
          <Button kind={KIND.primary}>Primary Button</Button>
          <Button kind={KIND.secondary}>Secondary Button</Button>
          <Button kind={KIND.tertiary}>Tertiary Button</Button>
          <Button type={TYPE.button}>Type Button</Button>
          <Button type={TYPE.submit}>Type Submit</Button>
          <Button type={TYPE.reset}>Type Reset</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading kind={KIND.secondary}>
            Should be loading
          </Button>

          <section className="my-10">
            <Card className="p-6">
              <div className="md:flex">
                <div className="w-full md:w-3/5">
                  <Image
                    src="/images/services/interior.jpg"
                    alt="Interior Picture"
                    width={960}
                    height={640}
                    layout="responsive"
                    className="rounded"
                  />
                </div>
                <div className="w-full pt-5 md:px-10">
                  <p className="mb-4 text-2xl font-bold">Interior Services</p>
                  <p className="">
                    Our car detailing company offers a range of interior
                    services to help you maintain the cleanliness and appearance
                    of your vehicle&apos;s interior. We understand that your car
                    is more than just a means of transportation, it&apos;s an
                    extension of your personal style and a reflection of your
                    lifestyle. That&apos;s why we take great pride in providing
                    exceptional interior detailing services that will leave your
                    vehicle looking and feeling like new.
                  </p>
                  <Button className="mt-4">asc</Button>
                </div>
              </div>
            </Card>
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
