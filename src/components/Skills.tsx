import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import React from "react";

const techSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Java",
  "React.js",
  "Redux",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "Tailwind CSS",
  "Bootstrap",
  "Docker",
  "Stripe Payment",
  "Git",
  "GitHub",
];

interface Skill {
  icon: React.ReactNode;
  name: string;
}

const skills: Skill[] = [
  {
    icon: <FaHtml5 className="text-orange-500 w-6 h-6" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
    name: "CSS3",
  },
  {
    icon: <FaJs className="text-yellow-500 w-6 h-6" />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript className="text-sky-500 w-6 h-6" />,
    name: "TypeScript",
  },
  {
    icon: <FaReact className="text-blue-400 w-6 h-6" />,
    name: "React",
  },
  {
    icon: <RiNextjsFill className="text-black w-6 h-6 dark:text-white" />,
    name: "Next.js",
  },
  {
    icon: <FaNodeJs className="text-green-500 w-6 h-6" />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb className="text-green-400 w-6 h-6" />,
    name: "MongoDB",
  },
  {
    icon: <SiExpress className="text-black dark:text-white w-6 h-6" />,
    name: "Express",
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 w-6 h-6" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiBootstrap className="text-purple-500 w-6 h-6" />,
    name: "Bootstrap",
  },
  {
    icon: <SiRedux className="text-purple-400 w-6 h-6" />,
    name: "Redux",
  },
  {
    icon: <SiStripe className="text-blue-600 w-6 h-6" />,
    name: "Stripe",
  },
  {
    icon: <FaGit className="text-red-500 w-6 h-6" />,
    name: "Git",
  },
  {
    icon: <FaGithub className="w-6 h-6 text-black dark:text-white" />,
    name: "GitHub",
  },
];

const Skills = () => {
  const duplicatedSkills: Skill[] = [...skills, ...skills, ...skills];

  return (
    <section className="px-3 lg:px-0 mt-16 " id="skills">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2 text-sm mb-4">
          {techSkills.map((item, index) => (
            <span
              key={item + index}
              className="rounded-md px-2 py-1 bg-purple-800 dark:bg-purple-950 hover:bg-purple-800 text-gray-200 text-semibold"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-10 border border-gray-300 dark:border-gray-700 rounded-lg items-center py-4 overflow-hidden">
          <motion.div
            className="flex gap-x-12"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2 items-center">
                <div>
                  <span>{skill.icon}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
