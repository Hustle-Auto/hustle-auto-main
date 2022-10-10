import Image from "next/image";

import FacebookLogoWhite from "../../public/icons/facebook-white.png";
import FacebookLogo from "../../public/icons/facebook.png";

const Facebook = (props) => {
  return (
    <div {...props}>
      <Image
        src={FacebookLogo}
        width="2143"
        height="2143"
        alt="facebook logo"
      />
    </div>
  );
};

const FacebookWhite = (props) => {
  return (
    <div {...props}>
      <Image
        src={FacebookLogoWhite}
        width="2143"
        height="2143"
        alt="facebook logo"
      />
    </div>
  );
};

Facebook.White = FacebookWhite;

export default Facebook;
