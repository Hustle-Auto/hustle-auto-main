import Head from "next/head";

import PageSection from "../components/ui/PageSection";

const Disclaimer = () => {
  return (
    <>
      <Head>
        <title>Disclaimer</title>
        <meta
          name="description"
          content="You can view the disclaimer for Hustle Automotive"
        />
      </Head>
      <PageSection>
        <main className="mx-auto prose">
          <h1 id="disclaimer">Disclaimer</h1>

          <p>Customer agrees with all the information below</p>
          <p>
            While it our intent to provide you with the BEST available service
            and the finest workmanship in reconditioning of your vehicle, it is
            necessary for us to DISCLAIM TOTAL LIABILITY FOR ALL DAMAGES
            including but not limited to the following: Engine Damages, Further
            Paint Damages, Tear to the Interior of worn material, Cracks in the
            windshield due to pre-existing chips.
          </p>
          <p>
            For Safety and Liability reason Hustle Automotive Services and its
            employees cannot remove the following: Car Seats, any and all forms
            of child restraints, any and all forms of removable seats from any
            type of vehicle.
          </p>
          <p>
            Pictures showing customer vehicles maybe be used in advertisements
            published by Hustle Automotive Services. No personal information
            related to the customer will be released without prior permission
            from customer.
          </p>
          <p>
            Customers are required to look over the vehicle during pickup. No
            refunds shall be issued once the customer has taken the vehicle
            home.
          </p>
          <br />
          <br />
        </main>
      </PageSection>
    </>
  );
};

export default Disclaimer;
