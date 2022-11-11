import Link from "next/link";

import HUSTLE from "../../data/hustle";
import Icon from "../icon";
import PageSection from "../ui/PageSection";

const Footer = () => {
  const currentYear = () => {
    const d = new Date();
    return d.getFullYear();
  };

  return (
    <>
      <section className="px-4 text-sm bg-black sm:text-base">
        <PageSection>
          <div className="grid grid-cols-3 mx-auto text-white">
            <article>
              <h2 className="font-bold">Our Times</h2>
              <p>12pm - 8pm Thursday & Friday</p>
              <p>9am - 8pm Saturday & Sunday</p>
            </article>
            <article className="flex justify-center">
              <div className="space-x-3">
                <Link href="/legal/terms-and-conditions">
                  <a>Terms And Conditions</a>
                </Link>
                <span>|</span>
                <Link href="/legal/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
                <span>|</span>
                <Link href="/legal/cookie-policy">
                  <a>Cookie Policy</a>
                </Link>
              </div>
            </article>
            <article>
              <section className="flex flex-col items-end">
                <div>
                  <h2 className="font-bold">Location</h2>
                  <p>Calgary, Alberta</p>
                </div>
                <div className="flex mt-3 space-x-3">
                  <a href={`${HUSTLE.SOCIALS.FACEBOOK}`} target="blank">
                    <Icon.Facebook className="w-6 h-6" />
                  </a>
                  <a href={`${HUSTLE.SOCIALS.INSTAGRAM}`} target="blank">
                    <Icon.Instagram className="w-6 h-6" />
                  </a>

                  <a href={`${HUSTLE.SOCIALS.LINKEDIN}`} target="blank">
                    <Icon.LinkedIn className="w-6 h-6" />
                  </a>

                  <a href={`${HUSTLE.SOCIALS.GOOGLE}`} target="blank">
                    <Icon.Google className="w-6 h-6" />
                  </a>
                </div>
              </section>
            </article>
          </div>
        </PageSection>
        <footer className="text-center text-white bg-black border-t-2 border-white">
          <div className="px-4 pt-2 pb-3 space-x-5">
            <small>
              &copy; Copyright {currentYear()}, Hustle Automotive. All rights
              reserved.
            </small>
            <span>|</span>
            <small>
              <Link href="/disclaimer">
                <a>Disclaimer</a>
              </Link>
            </small>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
