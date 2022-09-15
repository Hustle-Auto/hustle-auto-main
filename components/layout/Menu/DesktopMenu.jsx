import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../../public/images/logo.png";

const DesktopMenu = (props) => {
  const router = useRouter();
  const activeLinkClass = "text-black/50 font-bold border-b-2 border-black/50";
  const isActiveLink = (url) => router.pathname === url;
  return (
    <>
      <section className={classnames([props.className, "w-full"])}>
        <div className="p-4 mx-auto max-w-7xl">
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
                <ul className="flex space-x-6 [&>*]:p-2">
                  <li
                    className={classnames([
                      { [activeLinkClass]: isActiveLink("/") },
                    ])}
                  >
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li
                    className={classnames([
                      { [activeLinkClass]: isActiveLink("/contact-us") },
                    ])}
                  >
                    <Link href="/contact-us">
                      <a>Contact</a>
                    </Link>
                  </li>

                  <li
                    className={classnames([
                      { [activeLinkClass]: isActiveLink("/book-now") },
                      "!text-white !font-normal scale-100 bg-black rounded-lg shadow-lg hover:scale-105 hover:shadow-accent/50 ",
                    ])}
                  >
                    <Link href="/book-now">
                      <a>Book Now</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesktopMenu;
