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

const ProtectiveCoatingService = () => {
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
              <p className="mb-4 text-xl font-bold">
                Protective Coating Service
              </p>
              <div className="space-y-4">
                <p>
                  Ceramic Coating: Unveil the Ultimate Protection for Your
                  Vehicle
                </p>
                <p>
                  Are you looking to safeguard your prized automobile and ensure
                  its lasting beauty? Look no further than ceramic coating – the
                  cutting-edge solution that not only enhances your
                  vehicle&apos;s aesthetics but also saves you substantial money
                  in the long run.
                </p>
                <p>
                  Picture this: your vehicle&apos;s exterior constantly exposed
                  to the harsh elements of nature – UV rays, road salts, bird
                  droppings, and more. Over time, these assailants can wreak
                  havoc on your car&apos;s paintwork, leading to unsightly
                  damage and devaluation. This is where ceramic coating steps in
                  as your ultimate insurance policy for your investment.
                </p>
                <p>
                  What makes ceramic coating truly exceptional is its
                  unparalleled durability and resilience. This advanced
                  protective layer is expertly designed to shield your
                  car&apos;s paint from fading, oxidation, and chemical
                  contaminants, effectively preserving its showroom shine for
                  years to come. But that&apos;s just the beginning.
                </p>
                <p>
                  Here&apos;s the game-changer: by applying ceramic coating
                  today, you&apos;re not just ensuring a dazzling appearance;
                  you&apos;re making a prudent financial choice. Let&apos;s
                  break it down:
                </p>
                <ol className="pl-2.5 list-decimal">
                  <li>
                    <span className="font-bold">Long-Term Savings: </span>
                    The initial cost of ceramic coating may seem like an
                    investment, but it&apos;s a fraction of what you&apos;ll
                    save in potential repair and repainting expenses down the
                    road. Imagine avoiding the costly touch-ups, paint
                    corrections, and rust removal that can accumulate over time.
                    Ceramic coating acts as a robust shield, preventing these
                    issues from ever taking hold.
                  </li>
                  <li>
                    <span className="font-bold">Resale Value: </span>
                    When you decide to part ways with your vehicle, you&apos;ll
                    be glad you chose ceramic coating. A well-maintained,
                    gleaming exterior significantly boosts your car&apos;s
                    resale value. Potential buyers are willing to pay a premium
                    for a vehicle that&apos;s been meticulously protected,
                    making your investment in ceramic coating a profitable one.
                  </li>
                  <li>
                    <span className="font-bold">Time and Effort: </span>
                    Ceramic coating simplifies maintenance. Say goodbye to
                    endless waxing and polishing sessions. The hydrophobic
                    properties of ceramic coating make it a breeze to clean,
                    ensuring your car looks pristine with minimal effort. In
                    summary, think of ceramic coating as a wise financial
                    decision – an investment that not only keeps your vehicle
                    looking stunning but also safeguards your hard-earned money
                    in the long term. Don&apos;t wait until the damage is done;
                    act now to protect your automobile, your wallet, and your
                    peace of mind. Make the smart choice, and experience the
                    lasting benefits of ceramic coating today. Your car deserves
                    nothing less.
                  </li>
                </ol>
              </div>
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

export default ProtectiveCoatingService;
