// src/sections/Github.jsx
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "🛒 Sistema Ecommerce",
    description: "Aplicación de comercio electrónico desarrollada con Blazor WebAssembly y ASP.NET Core. El objetivo es ofrecer una plataforma moderna y escalable para crear tiendas online",
    tech: [".NET", "ASP.NET Core Web API", "Blazor WebAssembly", "C#"],
    link: "https://github.com/ludgmors/SistemaEcommerceBlazor.Net-C-",
  },
  {
    name: "🧠 Calificador Inteligente de Exámenes",
    description: "Sistema de calificación automática que utiliza OCR y modelos de lenguaje para evaluar respuestas escritas de estudiantes. Ideal para docentes que desean corregir exámenes, rápido y objetivamente con retroalimentación clara.",
    tech: ["Python", "Streamlit", "OCR"],
    link: "https://github.com/ludgmors/Calificador-de-Examenes-Con-IA",
  },
  {
    name: "🛒 Sistema de Ventas en ASP.NET MVC",
    description: "Sistema de Ventas desarrollado en ASP.NET MVC. Este proyecto fue creado con el objetivo de gestionar ventas, productos, clientes y reportes de manera eficiente y escalable",
    tech: ["ASP.NET MVC ", "C#", "SQL Server"],
    link: "https://github.com/ludgmors/SistemaVentaAspMVC-.NET",
  },
];

const GithubSection = () => {
  return (
    <section id="github" className="py-20 px-6 text-white bg-gradient-to-b from-[#0f0f0f] to-[#1e1e1e]
              border-x-0 border-purple-500 shadow-[0_0_20px_#9C27B0]">

      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold flex items-center gap-3 mb-10"
        >
          <Github className="w-8 h-8 text-[#67e8f9] animate-bounce" />
          Proyectos en GitHub
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#181818] p-6 rounded-2xl shadow-xl border border-gray-700 hover:scale-[1.03] hover:shadow-cyan-500/20 transition-transform duration-300 group"
            >
              <h3 className="text-xl font-semibold text-[#67e8f9] group-hover:text-cyan-400 transition-colors duration-300">
                {proj.name}
              </h3>
              <p className="text-sm my-3 text-gray-300">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gradient-to-r from-gray-700 to-gray-800 px-3 py-1 rounded-full text-gray-200 shadow-inner border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 underline underline-offset-2"
              >
                Ver en GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
