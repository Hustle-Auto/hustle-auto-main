import React, { useState } from "react";

import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../../public/images/logo.png";
import Icon from "../../icon";

const MobileMenu = (props) => {
  const router = useRouter();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const isActiveLink = (url) => router.pathname === url;
  const activeLinkClass = "!opacity-100 [&>*]:border";

  return (
    <>
      <section
        className={classnames([props.className, "sticky top-0 bg-white z-30"])}
      >
        <section
          className={classnames([
            { hidden: !isBurgerMenuOpen },
            "bg-accent absolute right-0 px-4 p-12 z-50 animate-fade-in duration-75 rounded-b-lg w-full h-screen",
          ])}
        >
          <div className="mx-auto 0 min-w-7xl">
            <div className="flex justify-end">
              <button onClick={toggleBurgerMenu}>
                <Icon.Burger isNavOpen={true}></Icon.Burger>
              </button>
            </div>

            <div className="p-4 mx-auto my-12 ">
              <nav className="">
                <ul className="[&>li>*]:my-12 [&>li>*]:p-4 [&>li>*]:rounded-lg [&>li>*]:bg-gray-600/25 [&>li>*]:text-white [&>*]:opacity-80 [&>li>*]:shadow-xl [&>li>*]:block">
                  <li
                    onClick={isActiveLink("/") ? toggleBurgerMenu : null}
                    className={classnames({
                      [activeLinkClass]: isActiveLink("/"),
                    })}
                  >
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li
                    onClick={
                      isActiveLink("/contact-us") ? toggleBurgerMenu : null
                    }
                    className={classnames({
                      [activeLinkClass]: isActiveLink("/contact-us"),
                    })}
                  >
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li
                    onClick={
                      isActiveLink("/book-now") ? toggleBurgerMenu : null
                    }
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

              <div className="flex justify-center [&>*]:border [&>*]:rounded-full [&>*]:p-2 space-x-7">
                <span>FB</span>
                <span>INSTA</span>
                <span>LINK</span>
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
