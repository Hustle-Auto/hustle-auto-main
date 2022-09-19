import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <section className="block lg:hidden">
        <MobileNavbar />
      </section>
      <section className="hidden lg:block">
        <DesktopNavbar />
      </section>
    </>
  );
};

export default Navbar;
