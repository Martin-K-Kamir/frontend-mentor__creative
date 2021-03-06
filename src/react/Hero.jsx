export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__content" data-aos="fade-down">
        <h1 className="hero__title title-primary">
          Branding & <br /> website design <br /> agency
        </h1>
        <p className="hero__description paragraph">
          We specialize in visual storytelling by creating cohesive brand and website design
          solutions for small businesses, giving lasting impressions to audiences in a digital
          world.
        </p>
        <button className="btn btn--primary">learn more</button>
      </div>
      <div className="hero__background-image" data-aos="reveal-left"></div>
    </header>
  );
}
