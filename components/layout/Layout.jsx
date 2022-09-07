import Footer from "./Footer";
import Menu from "./Menu";
// import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <Menu></Menu>
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
