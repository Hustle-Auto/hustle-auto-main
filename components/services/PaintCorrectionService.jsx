import Image from "next/image";
import Link from "next/link";

import Icon from "../icon";
import Button, { SIZE } from "../ui/Button";
import Card from "../ui/Card";

const paintCorrectionServices = [
  [
    "Cleaning off rims and tires",
    "Two bucket hand wash",
    "Clay bar of the vehicle (if required)",
    "A decontamination wash iron deposits",
    "Paint correction prep",
  ],
  [
    "Cleaning off rims and tires",
    "Two bucket hand wash",
    "Clay bar of the vehicle (if required)",
    "A decontamination wash iron deposits",
    "Paint correction prep",
  ],
  [
    "2 step correction of compound of removal defects, marks, scratches and swirls with more in-depth",
    "1 step correction polish to refine the finish to achieve 90% to 99% clarity",
  ],
];
const PaintCorrectionService = () => {
  return (
    <Card>
      <section className="mt-10">
        <div className="p-6">
          <div className="lg:flex lg:items-center">
            <div className="w-full lg:w-3/5">
              <Image
                src="/images/services/paint-correction.webp"
                alt="Paint Correction Services Picture"
                width={2134}
                height={1004}
                layout="responsive"
                className="rounded"
              />
            </div>
            <div className="w-full mt-6 lg:px-10">
              <p className="mb-4 text-xl font-bold">
                Paint Correction Services
              </p>
              <p className="">
                At HustleAuto, our paint correction service uses specialized
                techniques like machine polishing and wet sanding to carefully
                remove imperfections from your car&apos;s paintwork. Whether
                your car is a classic or a modern high-performance machine, our
                service can restore its appearance to a showroom quality finish.
                We use only the highest-quality products and techniques to
                deliver exceptional results that exceed your expectations.
                Contact us today to schedule your paint correction appointment
                and give your car the attention it deserves!
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
                <th>Stage 1 Interior</th>
                <th>Stage 2 Interior</th>
              </tr>
            </thead>
            <tbody>
              {paintCorrectionServices[0].map((service, index) => (
                <tr key={index}>
                  <td>{service}</td>
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

              {paintCorrectionServices[1].map((service, index) => (
                <tr key={index}>
                  <td>{service}</td>

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

              {paintCorrectionServices[2].map((service, index) => (
                <tr key={index}>
                  <td>{service}</td>
                  {Array(1)
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

export default PaintCorrectionService;
