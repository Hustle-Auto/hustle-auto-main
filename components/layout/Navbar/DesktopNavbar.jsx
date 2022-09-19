import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../../public/images/logo.png";
import NavbarLink from "./NavbarLink";

const DesktopNavbar = (props) => {
  const linkClassName = "p-2 border-b-2 border-transparent";
  const activeLinkClassName = "font-bold !border-black";

  return (
    <>
      <section className="w-full">
        <nav className="p-4 mx-auto max-w-7xl">
          <div className="flex items-center ">
            <div className="w-24 mr-auto">
              <Link href="/">
                <a>
                  <Image src={logo} alt="logo"></Image>
                </a>
              </Link>
            </div>
            <div>
              <nav>
                <ul className="flex space-x-6">
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
                    <NavbarLink
                      href="/get-a-quote"
                      className={
                        "text-white bg-black px-3 py-2 rounded-md shadow-md hover:scale-105 transition"
                      }
                      activeLinkClassName={"font-bold"}
                    >
                      Get A Quote
                    </NavbarLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default DesktopNavbar;
