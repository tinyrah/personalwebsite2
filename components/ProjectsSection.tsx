import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Learnflow",
    description:
      "LearnFlowGPT is a Next.js and TypeScript-driven web app designed to enhance learning efficiency by employing scientifically-proven strategies and aids. This platform enables over 1200 students worldwide to reduce their study time by 20% while maintaining or improving their GPAs! It features custom API endpoints for data management and uses Firebase for authentication, offering a streamlined user experience.",
    image: "/learnflow.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://learnflowgpt.com",
  },
  
  {
    name: "Study Time Tracker",
    description:
      "This is a web app designed to help students keep track of how many hours they've spent on each of their subjects!",
    image: "/pomodorosubjects1.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://pomodorosubjects.com",
  },
  /*
  {
    name: "",
    description:
      "",
    image: "",
    github: "",
    link: "",
  },
  */
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
