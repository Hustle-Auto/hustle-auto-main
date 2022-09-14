import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../../public/images/logo.png";
import Icon from "../../icons/icon";
const Header = (props) => {
  const router = useRouter();

  const isActiveLink = (url) => router.pathname === url;

  const activeLinkClass = "border-b-2 border-black";

  return (
    <>
      {/* DESKTOP MENU  */}
      <section className="px-4 ">
        <div className="flex items-center p-2 mx-auto text-lg max-w-7xl md:text-2xl">
          {/* HAMBURGER VISIBLE ON MOBILE */}
          <div className="mr-auto">
            <div className="w-24">
              <Link href="/">
                <Image src={logo} alt="logo" className="w-2 h-2" />
              </Link>
            </div>
          </div>
          <div className="order-last ml-auto lg:hidden">
            <button
              type="button"
              className="text-black"
              aria-expanded="false"
              onClick={props.toggleBurgerMenu}
            >
              <Icon.Burger isNavOpen={false}></Icon.Burger>
            </button>
          </div>
          {/* END HAMBURGER VISIBLE ON MOBILE */}

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:block">
            <nav className="">
              <ul className="flex items-center p-2 text-lg md:text-2xl">
                <li className="p-3 m-1 hover:underline hover:underline-offset-8">
                  <Link href="/" activeLink>
                    <span
                      className={classnames({
                        [activeLinkClass]: isActiveLink("/"),
                      })}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li className="p-3 m-1 hover:underline hover:underline-offset-8">
                  <Link href="/contact-us">
                    <span
                      className={classnames({
                        [activeLinkClass]: isActiveLink("/contact-us"),
                      })}
                    >
                      Contact Us
                    </span>
                  </Link>
                </li>
                <li className="p-3 m-1">
                  <button className="p-3 font-bold text-white bg-black border border-black rounded hover:bg-opacity-50 hover:bg-white hover:text-black">
                    <Link href="/book-now">
                      <span
                        className={classnames({
                          [activeLinkClass]: isActiveLink("/book-now"),
                        })}
                      >
                        Book Now
                      </span>
                    </Link>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {/* END DESKTOP NAVIGATION */}
        </div>
      </section>
      {/* END DESKTOP MENU  */}
    </>
  );
};

export default Header;
