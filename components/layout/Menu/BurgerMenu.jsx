import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../../public/images/logo.png";
import Icon from "../../icons/icon";

const BurgerMenu = (props) => {
  const router = useRouter();

  const isActiveLink = (url) => router.pathname === url;

  const activeLinkClass = "opacity-100";
  return (
    <>
      {/* HAMBURGER MENU */}
      <section
        className={classnames(
          { "hidden p-2": !props.openMenu },
          "absolute right-0 left-0 z-50 w-full h-screen p-4 overflow-auto transition-all bg-gray-600"
        )}
      >
        <div className="flex items-center justify-between p-2">
          <div className="mr-auto">
            <div className="w-24">
              <Link href="/">
                <Image src={logo} alt="logo" className="w-2 h-2" />
              </Link>
            </div>
          </div>
          <div className="mr-2">
            <button
              type="button"
              className="text-white"
              onClick={props.toggleBurgerMenu}
            >
              <Icon.Burger isNavOpen={true} />
            </button>
          </div>
        </div>
        {/* HAMBURGER NAVIGATION */}
        <div className="px-5 mt-12 md:pl-10">
          <nav className="">
            <ul className="">
              <li
                className={classnames([
                  {
                    [activeLinkClass]: isActiveLink("/"),
                  },
                  "p-3 py-4 my-2 text-3xl text-white border border-gray-200 rounded-lg opacity-50 hover:opacity-100",
                ])}
                onClick={props.toggleBurgerMenu}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={props.toggleBurgerMenu}
                className={classnames([
                  {
                    [activeLinkClass]: isActiveLink("/contact-us"),
                  },
                  "p-3 py-4 my-2 text-3xl text-white border border-gray-200 rounded-lg opacity-50 hover:opacity-100",
                ])}
              >
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li
                onClick={props.toggleBurgerMenu}
                className={classnames([
                  {
                    [activeLinkClass]: isActiveLink("/book-now"),
                  },
                  "p-3 py-4 my-2 text-3xl text-white border border-gray-200 rounded-lg opacity-50 hover:opacity-100",
                ])}
              >
                <Link href="/book-now">Book Now</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* ENF HAMBURGER NAVIGATION */}
      </section>
      {/* END HAMBURGER MENU */}
    </>
  );
};

export default BurgerMenu;
