import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedContact from "../components/AnimatedContact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-[#0f0f0f] to-[#1c1c1c]
                border-x-0 border-purple-500 shadow-[0_0_20px_#9C27B0]"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
        ¡Contactame!
      </h2>

      <p className="text-gray-400 text-lg mb-10 text-center max-w-xl">
        ¿Quieres saber más sobre mí o trabajar juntos? Puedes contactarme por mis siguientes redes:
      </p>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Información de contacto */}
        <div className="text-left space-y-6 text-gray-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl text-cyan-400" />
            <span>ludwingdepaz001@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-xl text-cyan-400" />
            <span>+502 3801 6248</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-xl text-cyan-400" />
            <a
              href="https://www.linkedin.com/in/ludwing-danilo-morales-de-paz-49401332a/"
              target="_blank"
              className="hover:underline"
            >
              /Ludwing Danilo Morales De Paz
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-xl text-cyan-400" />
            <a
              href="https://github.com/ludgmors"
              target="_blank"
              className="hover:underline"
            >
              /ludgmors
            </a>
          </div>
        </div>

        {/* Animación visual final */}
        <AnimatedContact />
      </div>
    </section>
  );
};

export default Contact;