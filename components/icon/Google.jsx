import Image from "next/image";

import GoogleLogo from "../../public/icons/google.png";

const Google = (props) => {
  return (
    <div {...props}>
      <Image src={GoogleLogo} width="512" height="512" alt="google logo" />
    </div>
  );
};

export default Google;
