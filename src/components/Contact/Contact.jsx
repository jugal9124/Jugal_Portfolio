import React, { useRef, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiPearson } from "react-icons/si";
import emailjs from "@emailjs/browser";

function Contact() {
  const contactInfo = [
    {
      icon: <IoMdMail className="h-6 w-6 text-emerald-600" />,
      title: "Email",
      text: "786ugal@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="h-6 w-6 text-emerald-600" />,
      title: "Phone",
      text: "+91 8851399124",
    },
    {
      icon: <LuMapPin className="h-6 w-6 text-emerald-600" />,
      title: "Location",
      text: "New Delhi, India",
    },
  ];

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
      icon: <FaCode className="h-6 w-6 text-gray-600 hover:text-emerald-600" />,
      url: "https://github.com/jugal9124/Jugal_Portfolio",
    },
  ];

  const [status, setStatus] = useState(null);
  const [from_name, setFromname] = useState("");
  const [from_email, setFromemail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // email env
    const serviceid = import.meta.env.VITE_YOUR_SERVICE_ID;
    const templateid = import.meta.env.VITE_YOUR_TEMPLATE_ID;
    const publickey = import.meta.env.VITE_YOUR_PUBLIC_KEY;

    emailjs
      .sendForm(serviceid, templateid, form.current, publickey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setStatus("success");
        setFromname("");
        setFromemail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.error("Error Sending email  " + err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss opportunities and how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {info.icon}
                  <div>
                    <p className="font-medium text-gray-900">{info.title}</p>
                    <p className="text-gray-600">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Send Me a Message
              </div>
            </div>

            <div className="p-6 pt-0">
              {status === "success" && (
                <div role="alert" className="alert alert-success mb-4">
                  <span>✅ Message sent successfully!</span>
                </div>
              )}
              {status === "error" && (
                <div role="alert" className="alert alert-error mb-4">
                  <span>❌ Failed to send message. Please try again.</span>
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      value={from_name}
                      name="from_name"
                      onChange={(e) => setFromname(e.target.value)}
                      id="from_name"
                      type="text"
                      placeholder="Your Name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  md:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      value={from_email}
                      name="from_email"
                      onChange={(e) => setFromemail(e.target.value)}
                      id="from_email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  md:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    value={subject}
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    id="subject"
                    type="text"
                    placeholder="Project Discussion"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  md:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  md:text-sm"
                  />
                </div>

                <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 transition-all duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
