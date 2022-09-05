import Image from "next/image";

import twitterLogo from "../../public/icons/twitter.svg";

const Twitter = () => {
  return (
    <a href="#" target="blank">
      <Image src={twitterLogo} alt="twitter" />
    </a>
  );
};

export default Twitter;
