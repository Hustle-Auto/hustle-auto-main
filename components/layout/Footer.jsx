import Icon from "../icon";

const Footer = () => {
  return (
    <>
      <section className="py-10 bg-black ">
        <div className="container flex justify-between mx-auto">
          <article className="text-white">
            <h2>Our Times</h2>
            <p>12pm - 8pm Thursday & Friday</p>
            <p>9am - 8pm Saturday & Sunday</p>
          </article>

          <article className="text-white">
            <p>Calgary, Alberta</p>
            <div className="flex mt-3 space-x-3">
              <a
                href="https://www.facebook.com/HustleAutomotive"
                target="blank"
              >
                <Icon.Facebook className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/hustleautomotive/"
                target="blank"
              >
                <Icon.Instagram className="w-6 h-6" />
              </a>

              <a href="#" target="blank">
                <Icon.LinkedIn className="w-6 h-6" />
              </a>

              <a href="#" target="blank">
                <Icon.Google className="w-6 h-6" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Footer;
