import Icon from "../icon";
import PageSection from "../ui/PageSection";

const Footer = () => {
  const currentYear = () => {
    const d = new Date();
    return d.getFullYear();
  };

  return (
    <>
      <section className="px-4 text-sm bg-black sm:text-base ">
        <PageSection>
          <div className="container flex justify-between mx-auto">
            <article className="text-white ">
              <h2 className="font-bold">Our Times</h2>
              <p>12pm - 8pm Thursday & Friday</p>
              <p>9am - 8pm Saturday & Sunday</p>
            </article>
            <article className="text-white ">
              <article className="text-white ">
                <h2 className="font-bold">Location</h2>
                <p className="">Calgary, Alberta</p>
              </article>
              <div className="flex mt-3 space-x-3 ">
                <a
                  href="https://www.facebook.com/HustleAutomotive"
                  target="blank"
                >
                  <Icon.Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/hustleautomotive/"
                  target="blank"
                >
                  <Icon.Instagram className="w-6 h-6" />
                </a>

                <a href="#" target="blank">
                  <Icon.LinkedIn className="w-6 h-6" />
                </a>

                <a href="#" target="blank">
                  <Icon.Google className="w-6 h-6" />
                </a>
              </div>
            </article>
          </div>
        </PageSection>
        <footer>
          <p className="p-2 text-center text-white bg-black border-t-2 border-white ">
            <small>
              &copy; Copyright {currentYear()}, Hustle Automotive. All rights
              reserved.
            </small>
          </p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
