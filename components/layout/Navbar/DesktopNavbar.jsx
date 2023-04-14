import Image from "next/image";
import Link from "next/link";

import NavbarLink from "./NavbarLink";
import Icon from "../../icon";
import Button, { TYPE } from "../../ui/Button";
import PageSection from "../../ui/PageSection";

const DesktopNavbar = () => {
  const linkClassName =
    "p-2 border-b-2 border-transparent hover:border-black duration-700 transition-[border]";
  const activeLinkClassName = "font-bold !border-black";

  return (
    <>
      <section className="w-full">
        <PageSection>
          <nav>
            <div className="flex items-center ">
              <div className="w-24 mr-auto">
                <Link href="/">
                  <a>
                    <Icon.HustleLogo />
                  </a>
                </Link>
              </div>
              <div>
                <nav>
                  <ul className="flex items-center md:space-x-6 ">
                    <li>
                      <NavbarLink
                        href="/"
                        className={linkClassName}
                        activeLinkClassName={activeLinkClassName}
                      >
                        Home
                      </NavbarLink>
                    </li>
                    <li>
                      <NavbarLink
                        href="/services"
                        className={linkClassName}
                        activeLinkClassName={activeLinkClassName}
                      >
                        Services
                      </NavbarLink>
                    </li>
                    <li>
                      <NavbarLink
                        href="/gallery"
                        className={linkClassName}
                        activeLinkClassName={activeLinkClassName}
                      >
                        Gallery
                      </NavbarLink>
                    </li>
                    <li>
                      <NavbarLink
                        href="/contact-us"
                        className={linkClassName}
                        activeLinkClassName={activeLinkClassName}
                      >
                        Contact Us
                      </NavbarLink>
                    </li>
                    <li>
                      <NavbarLink href="/get-a-quote" activeLinkClassName={""}>
                        <Button type={TYPE.submit}>
                          <div>Get A Quote</div>
                        </Button>
                      </NavbarLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </nav>
        </PageSection>
      </section>
    </>
  );
};

export default DesktopNavbar;
