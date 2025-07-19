import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss opportunities and how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <IoMdMail className="h-6 w-6 text-emerald-600" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">786ugal@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="h-6 w-6 text-emerald-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 8851399124</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <LuMapPin className="h-6 w-6 text-emerald-600" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <FaGithub className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <FaLinkedin className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <FaExternalLinkAlt className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <FaCode className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
                </a>
              </div>
            </div>
          </div>

          <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>

            <div className='flex flex-col space-y-1.5 p-6'>
              <div className='text-2xl font-semibold leading-none tracking-tight'>Send Me a Message</div>
            </div>

            <div className='p-6 pt-0'>
              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input id="name" type='text' placeholder="Your Name" className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input id="email" type="email" placeholder="your.email@example.com" className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' />
                  </div>

                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input id="subject" type='text' placeholder="Project Discussion" className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={5} placeholder="Tell me about your project or opportunity..." className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' />
                </div>

                <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 transition-all duration-200">Send Message</button>
                
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact