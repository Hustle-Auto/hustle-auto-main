import Image from "next/image";

import logo from "../../public/images/logo.png";

const HustleLogo = (props) => {
  return (
    <div {...props}>
      <Image src={logo} width={725} height={641} alt="logo" />
    </div>
  );
};

export default HustleLogo;
