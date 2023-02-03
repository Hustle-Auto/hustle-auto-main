import Head from "next/head";
import Link from "next/link";

import Icon from "../components/icon";
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
          <h2 className="page-heading">Services</h2>

          <section className="my-10">
            <p className="heading">Interior Services</p>
            <table id="services-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Regular Interior</th>
                  <th>Enhanced Interior</th>
                  <th>Elite Interior</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Thoroughly vacuum the interior carpets, mats, seats and
                    truck space
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Clean and sanitize all interior panels</td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Clean both exterior & interior windows </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Steam clean the vents</td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Wash the rubber mats </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Shampoo of mats, carpets of the vehicle and if vehicle is
                    equipped with cloths seats, that will be shampooed as well
                  </td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Clean and condition leather seats</td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Clean and condition vinyl and plastics</td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Remove any spots</td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Cleaning of door jams</td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Cleaning of the headliner</td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Steam and clean of seat belts</td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Protection Coating to all Plastic, Vinyl and Rubber surfaces
                    from stains and dirt
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Protection Coating to all Leather Surfaces </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Protection Coating to all fabric surfaces</td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="flex justify-center">
                      <Icon.Check className="w-6 h-6 text-accent" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </PageSection>
      </main>
    </>
  );
};

export default services;
