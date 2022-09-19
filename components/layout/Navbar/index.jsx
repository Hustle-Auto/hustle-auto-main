import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <section className="block sm:hidden">
        <MobileNavbar />
      </section>
      <section className="hidden sm:block">
        <DesktopNavbar />
      </section>
    </>
  );
};

export default Navbar;
