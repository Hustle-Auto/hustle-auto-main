import React, { useState } from "react";

import classnames from "classnames";
import Link from "next/link";

import NavbarLink from "./NavbarLink";
import HUSTLE from "../../../data/hustle";
import Icon from "../../icon";
import PageSection from "../../ui/PageSection";

const MobileNavbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const linkClassName = "rounded-md text-white border-2 border-white p-4";

  const activeLinkClassName = "bg-white/25";

  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const toggleBurgerMenu = () => {
    isBurgerMenuOpen ? closeBurgerMenu() : openBurgerMenu();
  };

  return (
    <>
      <section
        className={classnames([
          { hidden: !isBurgerMenuOpen },
          "bg-accent absolute right-0 px-4 p-10 z-50 animate-fade-in w-full h-screen",
        ])}
      >
        <PageSection>
          <div className="flex justify-end">
            <button onClick={toggleBurgerMenu}>
              <Icon.X className="w-10 h-10" />
            </button>
          </div>

          <div className="p-4 mx-auto my-1 space-y-8 ">
            <nav className="space-y-8">
              <ul className="space-y-8">
                <li>
                  <NavbarLink
                    href="/"
                    className={linkClassName}
                    activeLinkClassName={activeLinkClassName}
                    onClick={closeBurgerMenu}
                  >
                    Home
                  </NavbarLink>
                </li>
                <li>
                  <NavbarLink
                    href="/services"
                    className={linkClassName}
                    activeLinkClassName={activeLinkClassName}
                    onClick={closeBurgerMenu}
                  >
                    Services
                  </NavbarLink>
                </li>
                <li>
                  <NavbarLink
                    href="/gallery"
                    className={linkClassName}
                    activeLinkClassName={activeLinkClassName}
                    onClick={closeBurgerMenu}
                  >
                    Gallery
                  </NavbarLink>
                </li>
                <li>
                  <NavbarLink
                    href="/contact-us"
                    className={linkClassName}
                    activeLinkClassName={activeLinkClassName}
                    onClick={closeBurgerMenu}
                  >
                    Contact Us
                  </NavbarLink>
                </li>
                <li>
                  <NavbarLink
                    href="/get-a-quote"
                    className={linkClassName}
                    activeLinkClassName={activeLinkClassName}
                    onClick={closeBurgerMenu}
                  >
                    Get A Quote
                  </NavbarLink>
                </li>
              </ul>
            </nav>

            <div className="space-y-1 text-center text-white">
              <p>{HUSTLE.COMPANY.EMAIl}</p>
              <p>{HUSTLE.COMPANY.PHONE_NUMBER}</p>
              <p>Calgary, Alberta</p>
            </div>

            <div className="flex items-stretch justify-center mt-10 space-x-7">
              <a
                href={`${HUSTLE.SOCIALS.FACEBOOK}`}
                target="blank"
                className="p-2"
              >
                <Icon.Facebook.White className="w-10 h-10" />
              </a>

              <a
                href={`${HUSTLE.SOCIALS.INSTAGRAM}`}
                target="blank"
                className="p-2"
              >
                <Icon.Instagram.White className="w-10 h-10" />
              </a>

              <a
                href={`${HUSTLE.SOCIALS.LINKEDIN}`}
                target="blank"
                className="flex items-center p-2"
              >
                <Icon.LinkedIn.White className="w-10 h-8" />
              </a>

              <a
                href={`${HUSTLE.SOCIALS.GOOGLE}`}
                target="blank"
                className="p-2"
              >
                <Icon.Google.White className="w-10 h-10" />
              </a>
            </div>
          </div>
        </PageSection>
      </section>
      {/* ===============BURGER MENU ABOVE===================== */}
      <section className="">
        <div className="p-2 mx-auto max-w-7xl">
          <div className="flex items-center ">
            <div className="w-24 mr-auto">
              <Link href="/">
                <a>
                  <Icon.HustleLogo />
                </a>
              </Link>
            </div>
            <button onClick={toggleBurgerMenu}>
              <Icon.Burger className="w-10 h-10" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileNavbar;
