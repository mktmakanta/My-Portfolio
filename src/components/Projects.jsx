import Nav from "./Navigation";
import Social from "./SocialHandles";
import { projectsData } from "../db/projects";

export default function Projects() {
  return (
    <>
      <section className="bg-[url('/images/backgrounds/project-light-small.png')] dark:bg-[url('/images/backgrounds/project-dark-small.png')] md:bg-[url('/images/backgrounds/project-light-large.png')] dark:md:bg-[url('/images/backgrounds/project-dark-large.png')] bg-cover bg-center h-screen p-8   md:p-14 lg:p-20 overflow-auto">
        <Nav />
        <div className="mt-20 max-w-5xl md:mt-32 lg:mt-20 md:mr-12 md:ml-44 dark:text-white font-montserrat">
          <h1 className="text-6xl md:text-8xl lg:text-7xl pb-2 font-inter font-semibold">
            PROJECTS.
          </h1>
          <p className="pb-6 md:pb-12 lg:pb-6 pt-2 md:pt-3 lg:pt-2 text-xl md:text-2xl lg:text-xl">
            Recent projects and sites i have worked on.
          </p>
          <div className=" pb-20 ">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="max-w-96 md:max-w-5xl p-5 py-8 md:p-10 lg:p-2 lg:flex lg:h-60 gap-5 bg-white/50 dark:bg-slate-600/50 dark:text-white my-4 rounded-md"
              >
                <div className="w-full h-72 md:h-96  lg:w-80 lg:h-full overflow-clip rounded-md  ">
                  <img
                    className="rounded-md w-full h-full "
                    src={`/images/projects/${project.img}.jpg`}
                    alt=""
                  />
                </div>
                <div className="space-y-3 ">
                  <h1 className="text-3xl lg:text-4xl font-semibold mt-4">
                    {project.name}
                  </h1>
                  <p>{project.description}</p>

                  <div className="flex flex-wrap gap-2 dark:text-black">
                    <span className="bg-red-100 px-2  rounded-sm">Html</span>{" "}
                    <span className="bg-green-100 px-2 rounded-sm">css</span>
                    <span className="bg-orange-100 px-2  rounded-sm">
                      Javascript
                    </span>{" "}
                    <span className="bg-blue-100 px-2  rounded-sm">React</span>
                    <span className="bg-violet-100 px-2  rounded-sm">
                      Nextjs
                    </span>{" "}
                    <span className="bg-yellow-100 px-2  rounded-sm">
                      Shadcn
                    </span>
                  </div>

                  <button className="mt-auto bg-neutral-800 dark:bg-black dark:ring-1 ring-white/10 hover:bg-neutral-950 text-white md:text-2xl lg:text-lg  py-1 font-semibold lg:font-normal w-full lg:w-max lg:h-max h-10 md:h-14 px-6 rounded-md">
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
