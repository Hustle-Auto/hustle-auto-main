import Image from "next/image";

import instagramLogo from "../../public/icons/instagram.svg";

const Instagram = () => {
  return (
    <a href="https://www.instagram.com/hustleautomotive/" target="blank">
      <Image src={instagramLogo} alt="instagram" />
    </a>
  );
};

export default Instagram;
