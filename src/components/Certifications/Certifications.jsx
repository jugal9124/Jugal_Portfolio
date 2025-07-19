import React from 'react'
import { FiAward } from "react-icons/fi";
import { LuBookOpen } from "react-icons/lu";

function Certifications() {
  const certifications = [
    {
      title: "Back-end Domination Course",
      provider: "Sheryians Coding School",
      description: "Mastered Node.js, Express.js, JWT authentication, Redis caching, WebSockets.",
      skills: ["Node.js", "Express.js", "JWT", "Redis", "WebSockets"],
    },
    {
      title: "Front-end Development Course",
      provider: "Sheryians Coding School",
      description: "Deep understanding of animations, React.js, Tailwind CSS, and modern design frameworks.",
      skills: ["React.js", "Tailwind CSS", "Animations", "Modern Design"],
    },
  ]

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional development and continuous learning initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="h-full rounded-lg border bg-card text-card-foreground shadow-sm">

              <div className='flex flex-col space-y-1.5 p-6'>
                <div className="flex items-center space-x-3 text-2xl font-semibold leading-none tracking-tight">
                  <FiAward className="h-6 w-6 text-emerald-600" />
                  <span>{cert.title}</span>
                </div>
              </div>

              <div className='p-6 pt-0'>
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <LuBookOpen className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">{cert.provider}</span>
                  </div>
                  <p className="text-gray-600">{cert.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} variant="secondary" className="bg-emerald-100 text-emerald-800 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary bg-secondary bg-destructive  text-foreground text-primary-foreground hover:bg-primary/80">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certifications