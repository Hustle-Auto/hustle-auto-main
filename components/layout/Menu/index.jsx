import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  return (
    <>
      <MobileMenu className="block lg:hidden" />
      <DesktopMenu className="hidden lg:block" />
    </>
  );
};

export default Menu;
