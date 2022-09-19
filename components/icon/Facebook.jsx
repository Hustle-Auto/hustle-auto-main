import Image from "next/image";

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

export default Facebook;
