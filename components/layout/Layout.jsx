import { useEffect, useState } from "react";

import { Reoverlay } from "reoverlay";

import Footer from "./Footer";
import Navbar from "./Navbar";
import CookieConsentModal from "../CookieConsentModal";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
      <CookieConsentModal />
    </>
  );
};

export default Layout;
