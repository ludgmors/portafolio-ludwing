
import CVButton from '../components/CVButton';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
      ${scrolled ? 'bg-dark/90 shadow-lg py-1 backdrop-blur-md' : 'bg-dark/70 py-3 backdrop-blur-sm'} 
      animate-fadeIn`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300">
        {/* 🔹 Nombre o logo */}
        <a
          href="#hero"
          className="px-4 py-2 border border-accent text-accent rounded-full 
          hover:bg-accent hover:text-dark hover:shadow-[0_0_10px] hover:shadow-accent 
          hover:brightness-110 hover:scale-110 transition-all duration-300 
          font-semibold text-sm whitespace-nowrap ml-10"
        >
          Ludwing Morales
        </a>

        {/* 🔹 Enlaces */}
        <nav className="flex flex-wrap items-center gap-3">
          {[
            { href: '#about', label: 'Sobre mí' },
            { href: '#skills', label: 'Habilidades' },
            { href: '#courses', label: 'Cursos' },
            { href: '#github', label: 'GitHub' },
            { href: '#contact', label: 'Contacto' },
            { href: '/CV-Ludwing-Morales.pdf', label: 'Descargar CV', download: true },
          ].map((item, index) => (
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
    </header>
  );
};

export default Navbar;