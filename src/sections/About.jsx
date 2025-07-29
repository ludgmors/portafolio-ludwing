import Slide from "../components/Slide";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#111122] to-[#0a0a1a] text-white
                 border-x-0 border-purple-500 shadow-[0_0_20px_#9C27B0]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <User className="text-pink-500 w-8 h-8 animate-bounce" />
          <h2 className="text-4xl font-bold">Sobre mí</h2>
        </motion.div>

        {/* Texto principal con animación */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            ¡Hola! Soy <span className="text-pink-400 font-semibold">Ludwing Morales</span>,
            estudiante de Ingeniería en Sistemas apasionado por la tecnología,
            el desarrollo web, bases de datos, programacion y la ciberseguridad. Me encanta aprender
            cosas nuevas y enfrentar desafíos que me permitan crecer profesionalmente.
          </p>

          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Actualmente he completado cursos en plataformas como: Cisco academy, Udemy y codecademy.
            Busco aplicar mis habilidades en proyectos reales mientras continúo aprendiendo sobre redes,
            programación, y sistemas distribuidos.
          </p>

          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            ¡Bueno! actualmente estoy buscando algun lugar que me de la oportunidad de aplicar mis conocimientos,
            no cuento con experiencia laboral aun, porque no me han dado la oportunidad. 
            Si estás interesado en colaborar o tienes alguna oportunidad, ¡no dudes en contactarme!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

