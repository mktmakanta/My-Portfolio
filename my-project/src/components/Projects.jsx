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
      <section className="bg-[url('src/images/backgrounds/project-light-large.png')] md:bg-[url('src/images/backgrounds/project-light-small.png')] bg-cover bg-center h-screen p-10 overflow-auto">
        <Nav />
        <div className="mt-20 ">
          <div className="text-8xl pb-10">Projects</div>
          <div className="text-xl bg-white divide-x divide-slate-300 w-auto text-center rounded-md shadow-sm ">
            <button
              className={`p-1 px-5 inline-block ${
                filter === "all"
                  ? " border-b-2 border-neutral-800 text-neutral-800"
                  : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={` p-1 px-5 inline-block  ${
                filter === "css"
                  ? " border-b-2 border-neutral-800 text-neutral-800"
                  : ""
              }`}
              onClick={() => setFilter("css")}
            >
              CSS{" "}
            </button>
            <button
              className={`p-1 px-8 inline-block ${
                filter === "javascript"
                  ? " border-b-2 border-blue-500 text-neutral-800"
                  : ""
              }`}
              onClick={() => setFilter("javascript")}
            >
              JS
            </button>
            <button
              className={`p-1 px-5 inline-block ${
                filter === "react"
                  ? " border-b-2 border-neutral-800 text-neutral-800"
                  : ""
              }`}
              onClick={() => setFilter("react")}
            >
              React
            </button>
          </div>

          <div className=" mt-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex my-4 bg-neutral-100/30 p-4 rounded-md space-x-4"
              >
                <div className="w-52 h-40 rounded-md ">
                  <img
                    className="rounded-md w-full h-full"
                    src={`src/images/projects/${project.img}.jpg`}
                    alt=""
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="text-3xl font-semibold">{project.name}</h1>
                  <p>{project.description}</p>
                  <button className="bg-neutral-800 text-white py-1  px-6 rounded-md">
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
