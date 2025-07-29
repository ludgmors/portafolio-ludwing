import { motion } from "framer-motion";
import Slide from "../components/Slide";
import AnimatedCube from "../components/AnimatedCube";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center 
             bg-gradient-to-b from-[#0a0a1a] to-[#111122] text-white 
             px-6 pt-28 border border-purple-500 
             shadow-[0_0_30px_#9C27B0] rounded-xl mx-4 sm:mx-0"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        {/* TEXTO HERO */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-purple-400"
          >
            ¡Hola! Soy Ludwing,
            <br />
            estudiante de Ingeniería en Sistemas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-300"
          >
            Bienvenido a mi portafolio personal.
          </motion.p>
        </div>

        {/* FOTO CON ANIMACIÓN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-96 border-4 border-purple-500 shadow-2xl shadow-purple-800 hover:scale-105 transition-transform duration-500 group -translate-x-21">
            {/* Rectángulo de fondo detrás (efecto de marco doble) */}
            <div className="absolute inset-0 -translate-x-3 translate-y-6 bg-purple-900 rounded-lg opacity-40 group-hover:opacity-60 transition duration-500 z-0"/>

           {/* Imagen encima */}
            <img
             src="/ludwing.jpg" //aun no me la he tomado//
             alt="Mi Foto"
             className="w-full h-full object-cover rounded-lg relative z-10"
            />
          </div>
        </motion.div>

        {/* Cubo decorativo */}
        <AnimatedCube className="absolute right-10 top-[0px] z-0" />
      </div>
    </section>
  );
}
