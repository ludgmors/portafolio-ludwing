import './App.css';
import './index.css';
import { useState, useEffect } from 'react'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CVButton from './components/CVButton';
import SplashScreen from "./components/SplashScreen";

import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Courses from './sections/Courses';
import GithubSection from './sections/Github';
import Contact from "./sections/Contact";
import About from './sections/About';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // ⏱️ 3 segundos de splash

    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="relative min-h-screen text-white">
      {/* Fondo tecnológico con opacidad */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg-tech.jpg"
          alt="Fondo tecnológico"
          className="w-full h-full object-cover opacity-30 blur-sm"
        />
      </div>

      {/* Contenido principal encima del fondo */}
       <div className="relative z-10 bg-gradient-to-r from-[#0f172a]/80 via-[#1e293b]/80 to-[#0f172a]/80 bg-[length:300%_300%] animate-gradient-x">
        <Navbar />

        <main>
          <Hero />
          <CVButton />
          <About />
          <Skills />
          <Courses />
          <GithubSection />
          <Contact />
        </main>

        <Footer />
        
      
      </div>
    </div>
  );
}

export default App;