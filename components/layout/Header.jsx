import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.svg";

const Header = () => {
  return (
    <>
      <nav className="container flex justify-between px-3 mx-auto my-5">
        <Link href="/">
          <div className="w-24">
            <Image src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="flex space-x-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/book-now">Book Now</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
