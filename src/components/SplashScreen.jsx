import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Duración en milisegundos (3s)

    return () => clearTimeout(timeout);
  }, []);

return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 
                     bg-[url('/bg-tech.jpg')] bg-cover bg-center bg-[#0a0a1a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4"
            initial={{ y: 0 }}
            animate={{
              y: [0, -10, 0],
              transition: { repeat: Infinity, duration: 1.5 },
            }}
          >
            ¡Bienvenido!
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Este es el portafolio de Ludwing
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
