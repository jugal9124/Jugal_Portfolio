import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              JK
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-emerald-600">Jugal Kishore</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Passionate React Frontend Developer crafting intuitive and
            high-performance web applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              size="lg"
              className=" hover:bg-emerald-700 flex gap-2 rounded-md p-2 items-center justify-center"
            >
              {/* <Player ref={playerRef} icon={ ICON }  /> */}
              <IoMdMail className="mr-2 h-5 w-5" />
              Get In Touch
            </button>
            <button
              variant="outline"
              size="lg"
              className=" hover:bg-emerald-700 flex gap-2 rounded-md p-2 items-center justify-center"
            >
              <FaExternalLinkAlt className="mr-2 h-5 w-5" />
              View Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <FaExternalLinkAlt className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <FaCode className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
