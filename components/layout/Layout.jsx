import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
