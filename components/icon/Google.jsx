import Image from "next/image";

import googleLogo from "../../public/icons/google.svg";

const Google = () => {
  return (
    <a href="#" target="blank">
      <Image src={googleLogo} alt="google" />
    </a>
  );
};

export default Google;
