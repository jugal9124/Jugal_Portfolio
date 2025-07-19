import React from 'react'
import { FaCode } from "react-icons/fa";
import { LuServer } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { FiTool } from "react-icons/fi";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaCode,
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "GSAP",
        "TypeScript",
        "Bootstrap",
        "Framer Motion",
      ],
    },
    {
      title: "Backend Development",
      icon: LuServer,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "MySQL", "Pydantic", "FastAPI", "Zod", "Redis"],
    },
    {
      title: "AI/ML & Data Science",
      icon: LuBrain,
      skills: [
        "Python3",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Statistics",
        "Machine Learning",
        "Langchain",
        "LangGraph",
        "LLMs",
        "GenAI",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: FiTool,
      skills: ["Git", "GitHub", "Postman", "Docker", "CI/CD", "Excel", "C/C++", "Streamlit"],
    },
  ]


  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="h-full rounded-lg border bg-card text-card-foreground shadow-sm">

                <div className='flex flex-col space-y-1.5 p-6'>
                  <div className="flex items-center space-x-3 text-2xl font-semibold leading-none tracking-tight">
                    <IconComponent className="h-6 w-6 text-emerald-600" />
                    <span>{category.title}</span>
                  </div>
                </div>

                <div className='p-6 pt-0'>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 py-1 px-2.5 rounded-2xl"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills