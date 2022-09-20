import React, { useState } from "react";

import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.png";
import Icon from "../../icon";
import PageSection from "../../ui/PageSection";
import NavbarLink from "./NavbarLink";

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

          <div className="p-4 mx-auto my-12 space-y-8">
            <nav className="space-y-8">
              <ul className="space-y-8 ">
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
                    href="/book-now"
                    className={linkClassName}
                    activeLinkClassName={activeLinkClassName}
                    onClick={closeBurgerMenu}
                  >
                    Book Now
                  </NavbarLink>
                </li>
              </ul>
            </nav>

            <div className="flex justify-center space-x-7">
              <a
                href="https://www.facebook.com/HustleAutomotive"
                target="blank"
              >
                <Icon.Facebook className="w-10 h-10 bg-white border-4 border-white rounded-md" />
              </a>

              <a
                href="https://www.instagram.com/hustleautomotive/"
                target="blank"
              >
                <Icon.Instagram className="w-10 h-10 bg-white border-4 border-white rounded-md" />
              </a>

              <a href="#" target="blank">
                <Icon.LinkedIn className="w-10 h-10 bg-white border-4 border-white rounded-md" />
              </a>

              <a href="#" target="blank">
                <Icon.Google className="w-10 h-10 bg-white border-4 border-white rounded-md" />
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
                  <Image src={logo} alt="logo"></Image>
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
