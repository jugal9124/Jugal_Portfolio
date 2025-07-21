import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiPearson } from "react-icons/si";

function Hero() {
  const socialLinks = [
    {
      icon: (
        <FaGithub className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
      ),
      url: "https://github.com/jugal9124",
    },
    {
      icon: (
        <FaLinkedin className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
      ),
      url: "https://www.linkedin.com/in/jugal-kishore-61b48b246/",
    },
    {
      icon: (
        <SiPearson className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
      ),
      url: "https://peerlist.io/jugal9124",
    },
    {
      icon: (
        <FaCode className="h-6 w-6 text-gray-600 hover:text-emerald-600 " />
      ),
      url: "https://github.com/jugal9124/Jugal_Portfolio",
    },
  ];

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
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1nW2pgFb0hzgRVXMg2gwquV6HvAtD-4v1?usp=sharing",
                  "_blank"
                );
              }}
              variant="outline"
              size="lg"
              className=" hover:bg-emerald-700 flex gap-2 rounded-md p-2 items-center justify-center"
            >
              <FaExternalLinkAlt className="mr-2 h-5 w-5" />
              View Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                target="_blank"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
