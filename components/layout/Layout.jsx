import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Menu />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
