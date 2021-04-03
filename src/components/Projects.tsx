import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    // * Fetch Project Data
    fetch(`${import.meta.env.VITE_PROJECTS_DATA_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section id="projects" className="container">
      <h1>PROJECTS</h1>

      {projects &&
        projects.map(({ name, tags, links: { live, github }, description }) => (
          <div className="project" key={name}>
            <div className="media">
              <img src="./Images/image.gif" alt={name + ' - Project'} />
            </div>
            <div className="project-info">
              <h1 className="">{name}</h1>
              <h5>
                {tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </h5>
              <div>
                <p>{description}</p>
              </div>
              <div className="link-container">
                <a href={live} target="_blank" className="button-white">
                  LIVE
                </a>
                <a href={github} target="_blank" className="button-white">
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

interface Project {
  name: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
  description: string;
}
