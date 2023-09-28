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
    "Streak Free Cleaning of all exterior windows",
    "A spray on wax/sealant is applied to the vehicle providing a deeper shine and protection to the vehicle",
  ],
  [
    "Dead bug removal",
    "Clay Bar (removing other contaminants embedded within the surface of the clear coat)",
    "Machine Wax",
    "Engine Bay shampoo",
  ],
  [
    "Iron removal (removing iron deposits within the surface of the paint)",
    "Single Stage Paint Polish (Removes up to 80% swirls and haze on paint! Giving the mirror-like finish)",
    "Paint Prep Solution",
    "6-12 months of protective coating",
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
            <div className="w-full mt-6 space-y-3 lg:px-10">
              <p className="mb-4 text-xl font-bold">Exterior Services</p>
              <p>
                Exterior detailing is not just about making your vehicle look
                stunning; it&apos;s a crucial investment in the longevity and
                overall cost-effectiveness of your car&apos;s maintenance. Many
                vehicle owners underestimate the importance of regular exterior
                detailing, but here&apos;s why it&apos;s essential and how it
                can save you money in the long run.
              </p>
              <p>
                First and foremost, routine exterior detailing is a preventive
                measure that safeguards your vehicle&apos;s paint and finish
                from the harsh elements it encounters daily. By applying
                protective coatings and meticulously cleaning your car&apos;s
                exterior, you create a barrier against dirt, debris, UV rays,
                and environmental contaminants. This proactive approach shields
                your car from premature wear and tear, paint oxidation, and rust
                formation.
              </p>
              <p>
                Now, let&apos;s talk cost-effectiveness. Some might argue that
                occasional detailing is sufficient, but that&apos;s where the
                misconception lies. When you wait too long between detailing
                sessions, your car&apos;s exterior accumulates more dirt, grime,
                and imperfections. Over time, this buildup becomes harder to
                remove, often requiring more extensive and expensive detailing
                work to restore your vehicle&apos;s shine.
              </p>
              <p>
                Conversely, consistent exterior detailing preserves your
                car&apos;s like-new appearance, making each session more
                straightforward and less costly. Think of it as a regular
                check-up for your vehicle, catching minor issues before they
                become major problems. It&apos;s an investment in maintaining
                your car&apos;s value and reducing the risk of costly repairs or
                repainting.
              </p>
              <p>
                In summary, exterior detailing isn&apos;t just about aesthetics;
                it&apos;s a smart financial decision. By prioritizing regular
                maintenance over sporadic detailing, you&apos;ll not only keep
                your car looking impeccable but also extend its lifespan and
                save money in the long term. Don&apos;t wait until your
                vehicle&apos;s exterior is in dire need of attention; opt for
                routine detailing to ensure your car shines both on the road and
                in your wallet.
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
