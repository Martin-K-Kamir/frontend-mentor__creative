import React, { useState } from 'react';

export default function Projects() {
  const [curProject, setCurProject] = useState(0);
  const [btnPrevDisabled, setPrevBtnDisabled] = useState(true);
  const [btnNextDisabled, setNextBtnDisabled] = useState(false);

  function previousProject() {
    if (curProject > 0) {
      setCurProject(curProject - 1);
      setNextBtnDisabled(false);
    } else {
      setPrevBtnDisabled(true);
    }
  }

  function nextProject(e) {
    if (curProject < 2) {
      setCurProject(curProject + 1);
      setPrevBtnDisabled(false);
    } else {
      setNextBtnDisabled(true);
    }
  }

  const projectsData = [
    {
      title: 'Brand naming & guidelines',
      image: './images/desktop/image-slide-1.jpg',
      imageAlt: 'Open book',
      articleTitle: 'Lean Product Roadmap',
      year: '2019 Project',
    },
    {
      title: 'Brand identity & merchandise',
      image: './images/desktop/image-slide-2.jpg',
      imageAlt: 'Merchandise',
      articleTitle: 'New Majestic Hotel',
      year: '2018 Project',
    },
    {
      title: 'Brand identity & web design',
      image: './images/desktop/image-slide-3.jpg',
      imageAlt: 'Crypto website',
      articleTitle: 'Crypto Dashboard',
      year: '2016 Project',
    },
  ];

  return (
    <section className="projects">
      <div className="projects__title-wrapper" data-aos="reveal-left-wave">
        <h2 className="projects__title title-secondary title-secondary--white">
          {projectsData[curProject].title}
        </h2>
        <button
          className={
            btnPrevDisabled
              ? 'projects__btn-arrow  btn-arrow btn-arrow--js-disabled'
              : 'projects__btn-arrow  btn-arrow'
          }
          onClick={previousProject}
        >
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(-1 0 0 1 40 0)" stroke="#F94F4F" fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="19.5" />
              <path stroke-width="2" d="M17.5 15l5 5-5 5" />
            </g>
          </svg>
        </button>
        <button
          className={
            btnNextDisabled
              ? 'projects__btn-arrow btn-arrow btn-arrow--js-disabled'
              : 'projects__btn-arrow btn-arrow'
          }
          onClick={e => nextProject(e)}
        >
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#F94F4F" fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="19.5" />
              <path stroke-width="2" d="M17.5 15l5 5-5 5" />
            </g>
          </svg>
        </button>
      </div>
      <article className="projects__article" data-aos="reveal-bottom" data-aos-delay="200">
        <a href="index.html" className="projects__article-container">
          <img
            loading="lazy"
            className="projects__article-image"
            src={projectsData[curProject].image}
            alt={projectsData[curProject].imageAlt}
          />
          <div className="projects__article-content">
            <h3 className="projects__article-title title-tertiary title-tertiary--white">
              {projectsData[curProject].articleTitle}
            </h3>
            <p className="projects__article-year paragraph paragraph--white">
              {projectsData[curProject].year}
            </p>
          </div>
        </a>
      </article>
    </section>
  );
}
