import Image from "next/image";

import linkedInLogo from "../../public/icons/linkedin.svg";

const LinkedIn = () => {
  return (
    <a href="#" target="blank">
      <Image src={linkedInLogo} alt="linkedin" />
    </a>
  );
};

export default LinkedIn;
