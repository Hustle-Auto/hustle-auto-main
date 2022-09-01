import Image from "next/image";

import facebookLogo from "../../public/icons/facebook.svg";

const Facebook = () => {
  return (
    <a href="https://www.facebook.com/HustleAutomotive" target="blank">
      <Image src={facebookLogo} alt="facebook" />
    </a>
  );
};

export default Facebook;
