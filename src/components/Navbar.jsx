
import React, { useState, useEffect } from 'react';
import CVButton from '../components/CVButton';
import { Menu, X } from 'lucide-react'; // Asegúrate de tener `lucide-react` instalado

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#courses', label: 'Cursos' },
    { href: '#github', label: 'GitHub' },
    { href: '#contact', label: 'Contacto' },
    { href: '/CV-Ludwing-De-Paz.pdf', label: 'Descargar CV', download: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        ${scrolled ? 'bg-dark/90 shadow-lg py-1 backdrop-blur-md' : 'bg-dark/70 py-3 backdrop-blur-sm'} 
        animate-fadeIn`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <a
          href="#hero"
          className="px-4 py-2 border border-accent text-accent rounded-full 
            hover:bg-accent hover:text-dark hover:shadow-[0_0_10px] hover:shadow-accent 
            hover:brightness-110 hover:scale-110 transition-all duration-300 
            font-semibold text-sm whitespace-nowrap ml-10"
        >
          Ludwing Morales
        </a>

        {/* Botón hamburguesa (solo visible en móviles) */}
        <button
          className="sm:hidden text-accent mr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de enlaces */}
        <nav className={`hidden sm:flex flex-wrap items-center gap-3`}>
          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              {...(item.download ? { download: true } : {})}
              className="px-4 py-2 border border-accent text-accent rounded-full 
                hover:bg-accent hover:text-dark hover:shadow-[0_0_10px] hover:shadow-accent 
                hover:brightness-110 hover:scale-105 transition-all duration-300 
                font-semibold text-sm whitespace-nowrap ml-6"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 py-4 bg-dark/90 border-t border-accent/20">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              {...(item.download ? { download: true } : {})}
              onClick={() => setIsOpen(false)} // cerrar menú al hacer clic
              className="px-4 py-2 border border-accent text-accent rounded-full 
                hover:bg-accent hover:text-dark hover:shadow-[0_0_10px] hover:shadow-accent 
                hover:brightness-110 hover:scale-105 transition-all duration-300 
                font-semibold text-sm whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
