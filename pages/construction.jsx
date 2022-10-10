import Image from "next/image";

import logo from "../public/images/logo.png";

const Construction = () => {
  return (
    <main className="mt-10">
      <section className="max-w-screen-md mx-auto prose text-center">
        <div className="mx-auto w-52">
          <Image src={logo} alt="Logo" />
        </div>
        <h1 className="">Coming Soon</h1>
        <p className="">
          Our website is under construction. <br />
          Please contact us at{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_HUSTLE_AUTO_EMAIL}`}
            className="underline text-accent hover:no-underline"
          >
            {process.env.NEXT_PUBLIC_HUSTLE_AUTO_EMAIL}
          </a>{" "}
          or call{" "}
          <a
            href={`tel:${process.env.NEXT_PUBLIC_HUSTLE_AUTO_PHONE_NUMBER}`}
            className="underline text-accent hover:no-underline"
          >
            {process.env.NEXT_PUBLIC_HUSTLE_AUTO_PHONE_NUMBER}
          </a>
        </p>
      </section>
    </main>
  );
};

export default Construction;
