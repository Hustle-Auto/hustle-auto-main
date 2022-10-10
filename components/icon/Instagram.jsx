import Image from "next/image";

import InstagramLogoWhite from "../../public/icons/instagram-white.png";
import InstagramLogo from "../../public/icons/instagram.png";

const Instagram = (props) => {
  return (
    <div {...props}>
      <Image
        src={InstagramLogo}
        width="4322"
        height="4320"
        alt="instagram logo"
      />
    </div>
  );
};

const InstagramWhite = (props) => {
  return (
    <div {...props}>
      <Image
        src={InstagramLogoWhite}
        width="4322"
        height="4320"
        alt="instagram logo"
      />
    </div>
  );
};

Instagram.White = InstagramWhite;

export default Instagram;
