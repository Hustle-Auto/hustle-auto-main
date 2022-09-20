import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <section className="sticky top-0 z-30 block bg-white border-b-2 shadow-inner sm:hidden">
        <MobileNavbar />
      </section>
      <section className="hidden sm:block">
        <DesktopNavbar />
      </section>
    </>
  );
};

export default Navbar;
