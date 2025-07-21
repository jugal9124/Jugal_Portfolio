import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";



function Projects() {
  const projects = [
    {
      title: "SCSDB OTT App",
      description:
        "Developed a fully responsive OTT platform using React.js, with infinite scroll for seamless content browsing. Implemented state management with Redux for smooth data flow and integrated video streaming using React Player.",
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Axios",
        "React Router",
        "React Infinite Scroll",
        "React Player",
      ],
      liveUrl: "https://66bb3e0209c3810238a6aaab--scdbott.netlify.app/",
      codeUrl: "https://github.com/jugal9124/Major_SCSDB_OTT_App_Using_React",
    },
    {
      title: "Obys Agency Clone",
      description:
        "Designed a dynamic website clone with immersive animations using GSAP and Locomotive.js. Optimized performance for smooth scrolling effects and interactivity.",
      technologies: [
        "HTML",
        "CSS3",
        "JavaScript",
        "GSAP",
        "Locomotive.js",
        "ScrollTrigger",
      ],
      liveUrl: "https://jugal9124.github.io/Obys-Agency-clone/",
      codeUrl: "https://github.com/jugal9124/Obys-Agency-clone",
    },
    {
      title: "YouTube Video Transcript Chatbot",
      description:
        "Built an interactive chatbot that allows users to ask questions based on YouTube video content. Used LangChain to build a RAG pipeline with transcript chunking, embedding, and FAISS-based similarity search.",
      technologies: [
        "Streamlit",
        "LangChain",
        "OpenAI (GPT-4o)",
        "FAISS",
        "YouTube Transcript API",
        "Python",
      ],
      liveUrl: "https://jugal9124-langchain-youtube-chatbot-streamlit-app-5evwsp.streamlit.app/",
      codeUrl: "https://github.com/jugal9124/Langchain-youtube-chatbot",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="h-full flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-xl font-semibold leading-none tracking-tight">
                  {project.title}
                </div>
              </div>

              <div className="flex-1 flex flex-col p-6 pt-0">
                <p className="text-gray-600 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        variant="outline"
                        className="text-xs inline-flex items-center rounded-full px-2 py-0.5 font-semibold border border-gray-300 text-gray-700 bg-white hover:bg-gray-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-300 duration-300 px-3 text-sm py-2 items-cente cursor-pointer"
                  >
                    <FaExternalLinkAlt className="mr-2 h-4 w-4 " />
                    Live Demo
                  </button>
                  <button
                    onClick={() => window.open(project.codeUrl, "_blank")}
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 text-gray-700 hover:bg-gray-300 duration-300 px-3 text-sm py-2 items-cente cursor-pointer"
                  >
                    <FaGithub className="mr-2 h-4 w-4 " />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
