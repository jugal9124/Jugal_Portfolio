import React from "react";
import { IoMdMail } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { Card } from "antd";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background and what drives my passion for
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Summary
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate and detail-oriented React Frontend Developer
                with hands-on experience in developing intuitive and
                high-performance web applications.
              </p>
              <p>
                My expertise spans across modern web technologies including
                React.js, Node.js, and various AI/ML frameworks. I'm constantly
                learning and adapting to new technologies to deliver innovative
                solutions.
              </p>
              <p>
                I'm seeking opportunities to contribute my expertise to
                innovative projects while continuously growing as a developer in
                a collaborative environment.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card
              className="p-6 pt-0 "
              style={{
                border: "black",
                borderWidth: "1px",
                borderStyle: "solid",
                marginBottom: "20px",
              }}
            >
              <div className="flex items-center space-x-4 ">
                <LuMapPin className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">New Delhi, India</p>
                </div>
              </div>
            </Card>

            <Card
              className="p-6 pt-0"
              style={{
                border: "black",
                borderWidth: "1px",
                borderStyle: "solid",
                marginBottom: "20px",
              }}
            >
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 8851399124</p>
                </div>
              </div>
            </Card>

            <Card
              className="p-6 pt-0"
              style={{
                border: "black",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-center space-x-4">
                <IoMdMail className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">786ugal@gmail.com</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
