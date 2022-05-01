export default function Features() {
  const featuresList = [
    {
      id: 1,
      title: 'Brand Strategy',
      description:
        'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.',
    },
    {
      id: 2,
      title: 'Brand Design',
      description:
        'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.',
    },
    {
      id: 3,
      title: 'Web Design',
      description:
        'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.',
    },
  ];

  const featuersListItems = featuresList.map(feature => (
    <li className="features__list-item" key={feature.id} data-aos="fade">
      <h3 className="features__list-title title-tertiary title-tertiary--white">{feature.title}</h3>
      <p className="features__list-paragraph paragraph paragraph--white">{feature.description}</p>
    </li>
  ));

  return (
    <section className="features">
      <div className="features__title-wrapper">
        <h2 className="features__title title-secondary">
          Our approach for <br /> creating a winning <br /> brand
        </h2>
      </div>
      <div className="features__content" data-aos="reveal-right-features">
        <ol className="features__list">{featuersListItems}</ol>
      </div>
    </section>
  );
}
