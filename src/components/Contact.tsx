import React from "react";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

interface ContactInfo {
  icon: IconType;
  link?: string;
  mail?: boolean;
  phone?: string;
  name?: string;
}

const contact: ContactInfo[] = [
  {
    icon: FaEnvelope,
    link: "thisisbikkash@gmail.com",
    mail: true,
  },
  {
    icon: FaGithub,
    phone: "0451803981",
  },
  {
    icon: FaGithub,
    link: "https://github.com/bikkashneupane",
    name: "/bikkashneupane",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/bikkashneupane/",
    name: "/bikkashneupane",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="mt-16 text-sm">
      <div className="mx-auto max-w-5xl flex flex-col dark:border-t dark:border-t-gray-800 py-10">
        <div className="text-center">
          <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
            Contact Me
          </h2>
          <p className="dark:text-gray-400 mb-10">
            Lets get in touch! Feel free to reach out via email or phone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 pb-8 px-5 rounded-lg self-center">
            {contact.map(({ icon, link, phone, mail, name }, index) => {
              const Icon = icon; //icon is itself an component
              return (
                <a
                  key={index}
                  href={phone ? `tel:${phone}` : mail ? `mailto:${link}` : link}
                  target="_blank"
                  className="dark:text-gray-400 flex lg:flex-col items-center gap-4 md:gap-2 border border-gray-300 dark:border-gray-700 py-3 px-4 rounded-md hover:bg-teal-600 transition-transform delay-75 hover:text-white dark:hover:text-white ease-in-out"
                >
                  <Icon className="text-2xl" />
                  <span>{phone ? phone : name ?? link}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
