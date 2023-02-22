import Image from "next/image";
import Link from "next/link";

import Icon from "../icon";
import Button, { SIZE } from "../ui/Button";
import Card from "../ui/Card";

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

const InteriorServices = () => {
  return (
    <Card>
      <section className="mt-10">
        <div className="p-6">
          <div className="lg:flex">
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/services/interior.jpg"
                alt="Interior Services Picture"
                width={960}
                height={640}
                layout="responsive"
                className="rounded"
              />
            </div>
            <div className="w-full mt-6 lg:px-10">
              <p className="mb-4 text-xl font-bold">Interior Services</p>
              <p className="">
                We offer a range of interior services to help you maintain the
                cleanliness and appearance of your vehicle&apos;s interior. We
                understand that your car is more than just a means of
                transportation, it&apos;s an extension of your personal style
                and a reflection of your lifestyle. That&apos;s why we take
                great pride in providing exceptional interior detailing services
                that will leave your vehicle looking and feeling like new.
              </p>
              <div className="flex justify-start mt-8">
                <Link href="/get-a-quote">
                  <a>
                    <Button size={SIZE.compact}>Book Now</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div>
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
        </div>
      </section>
    </Card>
  );
};

export default InteriorServices;
