import Image from "next/image";
import Link from "next/link";

import Icon from "../icon";
import Button, { SIZE } from "../ui/Button";
import Card from "../ui/Card";

const exteriorServices = [
  [
    "Two bucket hand wash",
    "Cleaning of tires and rims",
    "Conditioning of tire with shine",
    "Cleaning of all exterior windows",
  ],
  [
    "Includes everything in the Regular Exterior",
    "Decontamination wash",
    "Clay bar the vehicle removing any containments in the paint",
    "A wax/sealant applied to the vehicle providing a deeper shine and protection to the vehicle",
  ],
  [
    "Includes berthing in the Enhanced Detail",
    "Iron remover",
    "A full exterior stage 1 polish",
    "Protection added of Wax to help protect that clear and enriched polish",
    "With protection to all plastic and rubber parts",
  ],
];

const ExteriorServices = () => {
  return (
    <Card>
      <section className="mt-10">
        <div className="p-6">
          <div className="lg:flex">
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/services/exterior.webp"
                alt="Exterior Services Picture"
                width={1171}
                height={781}
                layout="responsive"
                className="rounded"
              />
            </div>
            <div className="w-full mt-6 lg:px-10">
              <p className="mb-4 text-xl font-bold">Exterior Services</p>
              <p className="">
                At HustleAuto, we offer a comprehensive range of exterior
                detailing services that are designed to restore your car&apos;s
                shine, protect its paintwork, and leave it looking like new. Our
                skilled technicians use the latest tools, techniques, and
                products to deliver exceptional results that exceed your
                expectations.
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
                <th>Regular Exterior</th>
                <th>Enhanced Exterior</th>
                <th>Elite Exterior</th>
              </tr>
            </thead>
            <tbody>
              {exteriorServices[0].map((service, index) => (
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

              {exteriorServices[1].map((service, index) => (
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

              {exteriorServices[2].map((service, index) => (
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

export default ExteriorServices;
