import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle, ExternalLink } from "lucide-react";

const courses = [
  {
    title: "Curso de SQL desde cero",
    provider: "Platzi",
    url: "https://platzi.com/cursos/sql/",
  },
  {
    title: "Fundamentos de Redes de Datos",
    provider: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/65b546f8-4134-4a46-a0ea-7b630ed562cf/public_url",
  },
  {
    title: "Ciberseguridad Básica",
    provider: "Cisco Networking Academy Cybersecurity",
  },
  {
    title: "Desarrollo web (Fundamentos de JavaScript)",
    provider: "JS Institute (Cisco Networking Academy) ",
    url: "https://www.netacad.com/courses/javascript-essentials-1?courseLang=en-US",
  },
  {
    title: "Learn C#",
    provider: "Codecademy",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 px-6 bg-gradient-to-b from-[#0a0a1a] to-[#111122] text-white
                                     border-x-0 border-purple-500 shadow-[0_0_20px_#9C27B0]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <GraduationCap className="text-purple-500 w-8 h-8 animate-bounce" />
          <h2 className="text-4xl font-bold">Cursos Realizados</h2>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-purple-500/30 hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-lg font-semibold group-hover:text-purple-400 transition-colors duration-300 underline hover:underline-offset-4">

                  {course.title}
                  <ExternalLink className="w-4 h-4 inline-block opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">{course.provider}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Courses;