import React, { useState } from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "project-1",
      technologies: ["css", "javascript"],
      link: "url.cccc",
      img: "path",
      description: "L;orreeeem",
    },
    {
      id: 2,
      name: "project-1",
      technologies: ["react"],
      link: "url.cccc",
      img: "path",
      description: "L;orreeeem",
    },
    {
      id: 3,
      name: "project-1",
      technologies: ["css", "javascript"],
      link: "url.cccc",
      img: "path",
      description: "L;orreeeem",
    },
    {
      id: 4,
      name: "project-1",
      technologies: ["css"],
      link: "url.cccc",
      img: "path",
      description: "L;orreeeem",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter(
    (project) => filter === "all" || project.technologies.includes(filter)
  );

  return (
    <>
      <section className="bg-[url('src/images/backgrounds/project-light-large.png')] bg-cover bg-center h-screen">
        <div>Projects</div>
        <Nav />
        <Social />

        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("css")}>Css Projects</button>
          <button onClick={() => setFilter("javascript")}>Javascript</button>
          <button onClick={() => setFilter("react")}>React</button>
        </div>

        <div>
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <div>{project.img}</div>
              <div>
                <h1>project.name</h1>
                <p>{project.description}</p>
                <button>
                  <a href={project.link}>Visit</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
