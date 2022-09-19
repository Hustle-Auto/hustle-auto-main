import Image from "next/image";

import LinkedInLogo from "../../public/icons/linkedin.png";

const LinkedIn = (props) => {
  return (
    <div {...props}>
      <Image src={LinkedInLogo} width="635" height="540" alt="linkedin logo" />
    </div>
  );
};

export default LinkedIn;
