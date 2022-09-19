import Image from "next/image";

import InstagramLogo from "../../public/icons/instagram.png";

const Instagram = (props) => {
  return (
    <div {...props}>
      <Image
        src={InstagramLogo}
        width="4322"
        height="4322"
        alt="instagram logo"
      />
    </div>
  );
};

export default Instagram;
