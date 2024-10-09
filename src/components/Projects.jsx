import Nav from "./Navigation";
import Social from "./SocialHandles";
import { projectsData } from "../db/projects";

export default function Projects() {
  return (
    <>
      <section className="bg-[url('/images/backgrounds/project-light-small.png')] dark:bg-[url('/images/backgrounds/project-dark-small.png')] md:bg-[url('/images/backgrounds/project-light-large.png')] dark:md:bg-[url('/images/backgrounds/project-dark-large.png')] bg-cover bg-center h-screen p-8   md:p-14 lg:p-20 overflow-auto">
        <Nav />
        <div className="mt-20 md:mt-32 lg:mt-20 md:mr-12 md:ml-44 dark:text-white font-montserrat">
          <div className="text-7xl md:text-8xl lg:text-7xl pb-6 font-inter font-semibold">
            PROJECTS.
          </div>
          <p className="pb-8 md:pb-12 lg:pb-8 pt-2 md:pt-3 lg:pt-2 text-xl md:text-2xl lg:text-xl">
            Recent projects and sites i have worked on.
          </p>
          <div className=" mt-2 pb-20 ">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="w-full p-5 py-8 md:p-16 lg:p-2 lg:flex  gap-5 bg-white dark:bg-slate-200 dark:text-black my-4 rounded-md"
              >
                <div className="w-full h-72 md:h-96 lg:h-max lg:w-72 lg:max-h-40 overflow-clip rounded-md ">
                  <img
                    className="rounded-md w-full h-full"
                    src={`/images/projects/${project.img}.jpg`}
                    alt=""
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl lg:text-4xl font-semibold mt-4">
                    {project.name}
                  </h1>
                  <p>{project.description}</p>
                  <button className="bg-neutral-800 hover:bg-neutral-950 text-white md:text-2xl lg:text-xl  py-1 font-semibold lg:font-normal w-full lg:w-max lg:h-max h-10 md:h-14 px-6 rounded-md">
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
