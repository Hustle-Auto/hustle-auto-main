import Image from "next/image";

import GoogleLogoWhite from "../../public/icons/google-white.png";
import GoogleLogo from "../../public/icons/google.png";

const Google = (props) => {
  return (
    <div {...props}>
      <Image src={GoogleLogo} width="512" height="512" alt="google logo" />
    </div>
  );
};

const GoogleWhite = (props) => {
  return (
    <div {...props}>
      <Image src={GoogleLogoWhite} width="512" height="512" alt="google logo" />
    </div>
  );
};

Google.White = GoogleWhite;

export default Google;
