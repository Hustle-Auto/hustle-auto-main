import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.svg";

const Header = () => {
  return (
    <>
      {/* HAMBURGER MENU */}
      <section
        // ref={menu}
        className="absolute right-0 z-50 hidden w-full h-screen px-4 overflow-auto transition-all bg-gray-700"
      >
        <div className="flex items-center justify-between p-2">
          <div className="mr-auto">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-10 h-10" />
            </Link>
          </div>
          <div className="mr-2">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-white rounded-md bg-white/0"
              // @click="closeMenu()"
            >
              <span className="sr-only">Close menu</span>

              <svg
                className="w-10 h-10 ml-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* HAMBURGER NAVIGATION */}
        <div className="px-5 mt-12 md:pl-10">
          <nav className="">
            <ul className="">
              <li
                // @click="closeMenu()"
                className="p-3 py-4 my-2 text-3xl text-white border border-gray-200 rounded-lg opacity-50 hover:opacity-100"
              >
                <Link href="/about">About</Link>
              </li>
              <li
                // @click="closeMenu()"
                className="p-3 py-4 my-2 text-3xl text-white border border-gray-200 rounded-lg opacity-50 min-w-fullp-3 hover:opacity-100"
              >
                <Link href="/faq">Faq</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* ENF HAMBURGER NAVIGATION */}
      </section>
      {/* END HAMBURGER MENU */}

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
              className="inline-flex items-center justify-center p-2 bg-white rounded-md text-blue"
              aria-expanded="false"
              // @click="openMenu()"
            >
              <svg
                className="block w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* END HAMBURGER VISIBLE ON MOBILE */}

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:block">
            <nav className="">
              <ul className="flex items-center p-2 text-lg md:text-2xl">
                <li className="p-3 m-1 hover:underline hover:underline-offset-8">
                  <Link href="/">Home</Link>
                </li>
                <li className="p-3 m-1 hover:underline hover:underline-offset-8">
                  <Link href="/about">About</Link>
                </li>
                <li className="p-3 m-1 hover:underline hover:underline-offset-8">
                  <Link href="/faq">Faq</Link>
                </li>
                <li className="p-3 m-1">
                  <button className="p-3 font-bold text-white bg-black border border-black rounded hover:bg-opacity-50 hover:bg-white hover:text-black">
                    <a className="">Book Now</a>
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
