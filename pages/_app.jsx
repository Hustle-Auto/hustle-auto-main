import { ModalContainer } from "reoverlay";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ModalContainer />
    </>
  );
}

export default MyApp;
