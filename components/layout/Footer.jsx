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
            <ul className="flex mt-3 space-x-3">
              <div className="w-6 h-6">
                <Icon.Facebook />
              </div>
              <div className="w-6 h-6">
                <Icon.Instagram />
              </div>
              <div className="w-6 h-6">
                <Icon.LinkedIn />
              </div>
              <div className="w-6 h-6">
                <Icon.Google />
              </div>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Footer;
