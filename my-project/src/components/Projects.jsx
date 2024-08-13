import React, { useState } from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "Sungrid Solutions",
      technologies: ["react"],
      link: "url.cccc",
      img: "work1",
      description:
        "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
    },

    {
      id: 2,
      name: "Sungrid Solutions",
      technologies: ["css", "javascript"],
      link: "url.cccc",
      img: "work2",
      description:
        "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
    },

    {
      id: 3,
      name: "Sungrid Solutions",
      technologies: ["react"],
      link: "url.cccc",
      img: "work3",
      description:
        "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
    },

    {
      id: 4,
      name: "Sungrid Solutions",
      technologies: ["css", "javascript"],
      link: "url.cccc",
      img: "work4",
      description:
        "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
    },

    {
      id: 5,
      name: "Sungrid Solutions",
      technologies: ["css", "javascript"],
      link: "url.cccc",
      img: "work5",
      description:
        "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
    },

    {
      id: 6,
      name: "Sungrid Solutions",
      technologies: ["css"],
      link: "url.cccc",
      img: "work6",
      description:
        "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
    },

    {
      id: 7,
      name: "Sungrid Solutions",
      technologies: ["css", "javascript,react"],
      link: "url.cccc",
      img: "work7",
      description:
        "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter(
    (project) => filter === "all" || project.technologies.includes(filter)
  );

  return (
    <>
      <section className="bg-[url('src/images/backgrounds/project-light-small.png')] dark:bg-[url('src/images/backgrounds/project-dark-small.png')] md:bg-[url('src/images/backgrounds/project-light-large.png')] dark:md:bg-[url('src/images/backgrounds/project-dark-large.png')] bg-cover bg-center h-screen p-8   md:p-14 lg:p-20 overflow-auto">
        <Nav />
        <div className="mt-20 md:mt-32 lg:mt-20 md:mr-12 md:ml-44 dark:text-white">
          <div className="text-7xl md:text-8xl lg:text-7xl pb-6">PROJECTS.</div>
          <p className="pb-8 md:pb-12 lg:pb-8 pt-2 md:pt-3 lg:pt-2 text-xl md:text-2xl lg:text-xl">
            Recent projects and sites i have worked on.
          </p>
          <div className="text-xl lg:text-2xl bg-white dark:bg-neutral-700 divide-x divide-slate-300 dark:divide-slate-500 w-max text-center rounded-md shadow-sm ">
            <button
              className={`p-1 px-4 md:px-8 inline-block ${
                filter === "all"
                  ? " border-b-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white"
                  : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`  p-1 px-4 md:px-8 inline-block ${
                filter === "css"
                  ? " border-b-2 border-neutral-900 dark:border-white text-neutral-800 dark:text-white"
                  : ""
              }`}
              onClick={() => setFilter("css")}
            >
              CSS{" "}
            </button>
            <button
              className={`p-1 px-4 md:px-8 inline-block ${
                filter === "javascript"
                  ? " border-b-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white"
                  : ""
              }`}
              onClick={() => setFilter("javascript")}
            >
              Javascript
            </button>
            <button
              className={`p-1 px-4 md:px-8 inline-block ${
                filter === "react"
                  ? " border-b-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white"
                  : ""
              }`}
              onClick={() => setFilter("react")}
            >
              React
            </button>
          </div>

          <div className=" mt-2 pb-20 ">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-full p-5 py-8 md:p-16 lg:p-2 lg:flex  gap-5 bg-white dark:bg-slate-200 dark:text-black my-4 rounded-md"
              >
                <div className="w-full h-72 md:h-96 lg:h-max lg:w-72 lg:max-h-40 overflow-clip rounded-md ">
                  <img
                    className="rounded-md w-full h-full"
                    src={`src/images/projects/${project.img}.jpg`}
                    alt=""
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl lg:text-4xl font-semibold mt-4">
                    {project.name}
                  </h1>
                  <p>{project.description}</p>
                  <button className="bg-neutral-800 text-white md:text-2xl lg:text-xl  py-1 font-semibold lg:font-normal w-full lg:w-max lg:h-max h-10 md:h-14 px-6 rounded-md">
                    <a href={project.link}>Visit</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Social />
      </section>
    </>
  );
}
