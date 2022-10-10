import Image from "next/image";

import LinkedInLogoWhite from "../../public/icons/linkedin-white.png";
import LinkedInLogo from "../../public/icons/linkedin.png";

const LinkedIn = (props) => {
  return (
    <div {...props}>
      <Image src={LinkedInLogo} width="635" height="540" alt="linkedin logo" />
    </div>
  );
};

const LinkedInWhite = (props) => {
  return (
    <div {...props}>
      <Image
        src={LinkedInLogoWhite}
        width="635"
        height="540"
        alt="linkedin logo"
      />
    </div>
  );
};

LinkedIn.White = LinkedInWhite;

export default LinkedIn;
