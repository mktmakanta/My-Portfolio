import Nav from "./Navigation";
import Social from "./SocialHandles";
import { projectsData } from "../db/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const techColors = {
    React: "bg-blue-100",
    Javascript: "bg-orange-100",
    CSS: "bg-green-100",
    Tailwind: "bg-yellow-100",
    Html: "bg-cyan-100",
    Nextjs: "bg-purple-200",
    Fontawesome: "bg-rose-100",
  };

  return (
    <>
      <section className="bg-[url('/images/backgrounds/project-light-small.png')] dark:bg-[url('/images/backgrounds/project-dark-small.png')] md:bg-[url('/images/backgrounds/project-light-large.png')] dark:md:bg-[url('/images/ba  ckgrounds/project-dark-large.png')] bg-cover bg-center h-screen p-8 md:p-14 lg:p-20 overflow-auto">
        <Nav />
        <div className="mx-auto mt-20 max-w-5xl md:mt-32 lg:mt-20 md:mr-12 md:ml-44 dark:text-white font-montserrat">
          <h1 className="text-6xl md:text-8xl lg:text-7xl pb-2 font-inter font-semibold">
            PROJECTS
          </h1>
          <p className="pb-6 md:pb-12 lg:pb-6 pt-2 md:pt-3 lg:pt-2 text-xl md:text-2xl lg:text-xl">
            Recent projects and sites I have worked on.
          </p>
          <motion.div className="pb-20">
            {projectsData.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1 },
                }}
                viewport={{ once: true }}
                key={project.id}
                className="max-w-96 md:max-w-5xl p-5 py-8 md:p-10 lg:p-4 lg:flex lg:h-64 gap-5 bg-white/50 dark:bg-slate-600/50 dark:text-white my-4 rounded-md"
              >
                <div className="w-full h-48 lg:h-full md:h-72 lg:max-w-[320px]  overflow-clip rounded-md">
                  <img
                    className="rounded-md w-contain h-full object-center"
                    src={`/images/projects/${project.img}.png`}
                    alt=""
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="text-2xl lg:text-4xl font-semibold mt-4">
                    {project.name}
                  </h1>
                  <p>{project.description}</p>

                  <div className="flex flex-wrap gap-2 dark:text-black">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`${
                          techColors[tech] || "bg-gray-300"
                        } py-1 rounded-full px-4`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="cursor-pointer mt-auto bg-neutral-800 dark:bg-black dark:ring-1 ring-white/10 hover:bg-violet-400 text-white md:text-2xl lg:text-lg py-1 font-semibold lg:font-normal w-full lg:w-max lg:h-max h-10 md:h-14 px-6 rounded-md">
                    <a className="hover:text-violet-400 " href={project.link}>
                      Visit
                    </a>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Social />
      </section>
    </>
  );
}
