// src/components/AnimatedContact.jsx
import React from "react";
import "../animatedContact.css";

 // Creamos el archivo CSS aparte

const AnimatedContact = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img className="manzdev" src="https://manz.dev/manz-logo.png" alt="ManzDev" />
        <div className="gradient"></div>
      </div>
      <img
        src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
        alt="tailwind"
        className="tailwind"
      />
      <img
        src="https://lenguajecss.com/assets/logo.png"
        alt="css"
        className="css"
      />
    </div>
  );
};

export default AnimatedContact;