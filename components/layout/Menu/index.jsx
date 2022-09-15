import { useState } from "react";

// import BurgerMenu from "./BurgerMenu";
// import Header from "./Header";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setOpenMenu(!openMenu);
    //  prevent body scrolling when burger menu is open
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      {/* <BurgerMenu openMenu={openMenu} toggleBurgerMenu={toggleBurgerMenu} />
      <Header toggleBurgerMenu={toggleBurgerMenu} /> */}

      <MobileMenu className="block lg:hidden" />
      <DesktopMenu className="hidden lg:block" />
    </>
  );
};

export default Menu;
