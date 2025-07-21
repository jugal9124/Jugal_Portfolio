import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

function Education() {
  const education = [
    {
      degree: "B.Tech. Computer Science & Engineering",
      institution: "Delhi Skill and Entrepreneurship University, New Delhi",
      board: "DSEU",
      score: "6.23 GPA",
      year: "2025",
      status: "In Progress",
      Institute: "Institution",
      University: "Board/University",
      Score:"Score"
    },
    {
      degree: "Class XII",
      institution: "Kautilya Sarvodaya Boys S S S Chirag Enclave N D",
      board: "CBSE",
      score: "77%",
      year: "2021",
      status: "Completed",
      Institute: "Institution",
      University: "Board/University",
      Score:"Score"

    },
    {
      degree: "Class X",
      institution: "Kautilya Sarvodaya Boys S S S Chirag Enclave N D",
      board: "CBSE",
      score: "61%",
      year: "2019",
      status: "Completed",
      Institute: "Institution",
      University: "Board/University",
      Score:"Score"
    },
  ]


  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">My academic journey and educational background</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm' key={index}>
              <div className='flex flex-col space-y-1.5 p-6'>
                <div className="flex items-center justify-between text-2xl font-semibold leading-none tracking-tight">
                  <div className="flex items-center space-x-3">
                    <LuGraduationCap className="h-6 w-6 text-emerald-600" />
                    <span>{edu.degree}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <SlCalender className="h-4 w-4" />
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>
              <div className='p-6 pt-0'>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-medium text-gray-900">{edu.Institute}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{edu.University}</p>
                    <p className="text-gray-600">{edu.board}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{edu.Score}</p>
                    <p className="text-gray-600">{edu.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education