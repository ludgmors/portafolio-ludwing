import React from "react";
import { Code, Database, ShieldCheck, Network, Laptop2 } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "SQL",
    icon: <Database className="h-10 w-10 text-indigo-500 animate-bounce" />,
  },
  {
    title: "Desarrollo Web",
    icon: <Laptop2 className="h-10 w-10 text-green-500 animate-bounce" />,
  },
  {
    title: "Ciberseguridad",
    icon: <ShieldCheck className="h-10 w-10 text-red-500 animate-bounce" />,
  },
  {
    title: "Redes",
    icon: <Network className="h-10 w-10 text-yellow-500 animate-bounce" />,
  },
  {
    title: "Programación",
    icon: <Code className="h-10 w-10 text-purple-500 animate-bounce" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 pt-16 scroll-mt-16 bg-[#0a0a1a] text-white
          border-x-0 border-purple-500 shadow-[0_0_20px_#9C27B0]">

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10"
        >
          Lo que sé
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-500/30 transition-all duration-300 group"
            >
              <div className="mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors duration-300">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
