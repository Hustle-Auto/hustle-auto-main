import React, { useState } from "react";

import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../../public/images/logo.png";
import Icon from "../../icons/icon";
const MobileMenu = (props) => {
  const router = useRouter();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    //  prevent body scrolling when burger menu is open
    document.body.classList.toggle("overflow-hidden");
  };

  const isActiveLink = (url) => router.pathname === url;
  const activeLinkClass = "!opacity-100";

  return (
    <>
      <section className={props.className}>
        <section
          className={classnames([
            { hidden: !isBurgerMenuOpen },
            "bg-gray-700 absolute w-full h-screen z-50 animate-fade-in duration-75",
          ])}
        >
          <div className="p-4 mx-auto 0 max-w-7xl">
            <div className="flex items-center">
              <div className="w-24 mr-auto">
                <Link href="/">
                  <a onClick={toggleBurgerMenu}>
                    <Image src={Logo} alt="logo"></Image>
                  </a>
                </Link>
              </div>
              <button onClick={toggleBurgerMenu}>
                <Icon.Burger isNavOpen={true}></Icon.Burger>
              </button>
            </div>

            <div className="p-4 mx-auto my-12 ">
              <nav>
                <ul className="[&>*]:border [&>*]:my-12 [&>*]:p-4 [&>*]:rounded-lg [&>*]:bg-gray-600/25 [&>*]:text-white [&>*]:opacity-50 [&>*]:shadow-xl">
                  <li
                    className={classnames({
                      [activeLinkClass]: isActiveLink("/"),
                    })}
                  >
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li
                    className={classnames({
                      [activeLinkClass]: isActiveLink("/contact-us"),
                    })}
                  >
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li
                    className={classnames({
                      [activeLinkClass]: isActiveLink("/book-now"),
                    })}
                  >
                    <Link href="/book-now">
                      <a>Book Now</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        {/* ===============BURGER MENU ABOVE===================== */}
        <section className="">
          <div className="p-4 mx-auto max-w-7xl ">
            <div className="flex items-center ">
              <div className="w-24 mr-auto">
                <Link href="/">
                  <a>
                    <Image src={Logo} alt="logo"></Image>
                  </a>
                </Link>
              </div>
              <button onClick={toggleBurgerMenu}>
                <Icon.Burger isNavOpen={false}></Icon.Burger>
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default MobileMenu;
