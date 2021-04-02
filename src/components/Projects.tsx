import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h1>PROJECTS</h1>
      {/* PROJECT 1  */}
      <div className="project">
        <div className="media">
          <img src="./Images/image.gif" alt="Project 1" />
        </div>
        <div className="project-info">
          <h1 className="">Invesing.com</h1>
          <h5>
            <span className="tag">Handlebars</span>
            <span className="tag">Bootstrap</span>
            <span className="tag">Javascript</span>
            <span className="tag">Node</span>
            <span className="tag">Express</span>
            <span className="tag">MongoDB</span>
            <span className="tag">NPM</span>
          </h5>
          <div>
            <p>
              A global company database that utilizes a bunch oftechnologies
              like Node.js, Express.js, Handlebars. User has the ability to
              view, modify, create, and delete (CRUD)companies listed in the
              database. Implemented features like - Pagination, 404 Page,
              Routing, etc
            </p>
          </div>
          <div className="link-container">
            <a
              href="https://investing-project-vd.herokuapp.com/"
              target="_blank"
              className="button-white"
            >
              LIVE
            </a>
            <a
              href="https://github.com/Vaasu-Dhand/investing-project"
              target="_blank"
              className="button-white"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
      {/* PROJECT 2 */}
      <div className="project">
        <div className="media">
          <img src="Images/image.gif" alt="Project 1" />
        </div>
        <div className="project-info">
          <h1 className="">COVID-19 Tracker</h1>
          <h5>
            <span className="tag">HTML</span>
            <span className="tag">Material UI</span>
            <span className="tag">Charts.js</span>
            <span className="tag">REST API</span>
            <span className="tag">React</span>
            <span className="tag">React Hooks</span>
          </h5>
          <div>
            <p>
              A global company database that utilizes a bunch oftechnologies
              like Node.js, Express.js, Handlebars. User has the ability to
              view, modify, create, and delete (CRUD)companies listed in the
              database. Implemented features like - Pagination, 404 Page,
              Routing, etc
            </p>
          </div>
          <div className="link-container">
            <a
              href="https://investing-project-vd.herokuapp.com/"
              target="_blank"
              className="button-white"
            >
              LIVE
            </a>
            <a
              href="https://github.com/Vaasu-Dhand/investing-project"
              target="_blank"
              className="button-white"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
      {/* PROJECT 3  */}
      <div className="project">
        <div className="media">
          <img src="./Images/image.gif" alt="Project 1" />
        </div>
        <div className="project-info">
          <h1 className="">Pokemon Cards</h1>
          <h5>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">React</span>
          </h5>
          <div>
            <p>
              A fun website that displays Pokemon Cards from allgenerations.
              Used custom CSS for beautiful UI and animations. Implemented
              concepts like - Infinite Scroll, PreLoad Screen,Card Flip, etc
            </p>
          </div>
          <div className="link-container">
            <a
              href="https://pokemon-project-vd.herokuapp.com/"
              target="_blank"
              className="button-white"
            >
              LIVE
            </a>
            <a
              href="https://github.com/Vaasu-Dhand/pokemon-project"
              target="_blank"
              className="button-white"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
