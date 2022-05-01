export default function About() {
  return (
    <section className="about">
      <div
        className="about__background-image"
        data-aos="reveal-bottom"
        data-aos-duration="1500"
        data-aos-offset="100"
      ></div>
      <div className="about__content">
        <h2 className="about__title title-secondary title-secondary--white" data-aos="fade">
          <span className="clr-primary">Design</span> <br /> is strategic.
        </h2>
        <p className="about__description paragraph paragraph--white" data-aos="fade">
          “A well-crafted design strategy consistently produces desired outcomes and brand
          awareness. We are firm believers that suc|cess lies in creative collaboration with our
          clients.”
        </p>
        <a className="link link--bold link--red link--border" href="index.html" data-aos="fade">
          Schedule Call
        </a>
      </div>
    </section>
  );
}
