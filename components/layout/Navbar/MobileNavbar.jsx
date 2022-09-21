import React, { useState } from "react";

import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.png";
import Icon from "../../icon";
import NavbarLink from "./NavbarLink";

const MobileNavbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const linkClassName = "p-4 rounded-md text-white border-2 border-white";

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
      <section className={"sticky top-0 bg-white z-30"}>
        <section
          className={classnames([
            { hidden: !isBurgerMenuOpen },
            "bg-accent absolute right-0 px-4 p-10 z-50 animate-fade-in w-full h-screen",
          ])}
        >
          <div className="mx-auto 0 min-w-7xl">
            <div className="flex justify-end">
              <button onClick={toggleBurgerMenu}>
                <Icon.X className="w-10 h-10" />
              </button>
            </div>

            <div className="p-4 mx-auto my-12 ">
              <nav>
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

              <div className="flex items-stretch justify-center mt-10 space-x-7">
                <a
                  href="https://www.facebook.com/HustleAutomotive"
                  target="blank"
                  className="p-2 rounded-md bg-white/90"
                >
                  <Icon.Facebook className="w-10 h-10 rounded-md" />
                </a>

                <a
                  href="https://www.instagram.com/hustleautomotive/"
                  target="blank"
                  className="p-2 rounded-md bg-white/90"
                >
                  <Icon.Instagram className="w-10 h-10 rounded-md" />
                </a>

                <a
                  href="#"
                  target="blank"
                  className="flex items-center p-2 rounded-md bg-white/90"
                >
                  <Icon.LinkedIn className="w-10 h-8 rounded-md" />
                </a>

                <a
                  href="#"
                  target="blank"
                  className="p-2 rounded-md bg-white/90"
                >
                  <Icon.Google className="w-10 h-10 rounded-md" />
                </a>
              </div>
            </div>
          </div>
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
      </section>
    </>
  );
};

export default MobileNavbar;
