export default function Features() {
  const featuresList = [
    {
      title: 'Brand Strategy',
      description:
        'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.',
    },
    {
      title: 'Brand Design',
      description:
        'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.',
    },
    {
      title: 'Web Design',
      description:
        'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.',
    },
  ];

  const featuersListItems = featuresList.map(feature => (
    <li className="features__list-item">
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </li>
  ));

  return (
    <section className="features">
      <div className="features__title-wrapper">
        <h2 className="title-secondary">
          Our approach for <br /> creating a winning <br /> brand
        </h2>
      </div>
      <div className="features__content">
        <ol className="features__list">{featuersListItems}</ol>
      </div>
    </section>
  );
}
