import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Tec from "./components/Tec";
import Social from "./components/Social";
import Projects from "./components/Projects";
import LluviaObjCurvas from "./components/layout/LluviaObjCurvas";
import Canvas2 from "./components/layout/Canvas2";
import Canvas from "./components/layout/Canvas";
import DownloadButton from "./components/layout/DownloadButton";
import { saveAs } from "file-saver";
import BgCodigo from "./components/layout/BgCodigo";
import React, { useEffect } from "react";
import ScrollRevealComponent from "./ScrollRevealComponent";

function App() {
  const handleDownload = () => {
    // Obtén el botón por su ID u otra forma de selección
    const pdfURL = "/CV.pdf";
    saveAs(pdfURL, "CVEsneiderRios.pdf");
  };

  useEffect(() => {
    // Función para suavizar el scroll con una duración personalizada
    const smoothScrollTo = (target, duration) => {
      const targetPosition = target.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      const ease = (t) => t * (2 - t);

      requestAnimationFrame(animation);
    };

    // Agregar evento de click a los enlaces de scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          smoothScrollTo(targetElement, 800); // Puedes ajustar la duración aquí (en milisegundos)
        }
      });
    });
  }, []);

  return (
    <main className="App grid grid-cols-1 gap-4 justify-center items-center">
      <BgCodigo /> {/* Fondo */}
      <Social />
      <ScrollRevealComponent />{" "}
      {/* Navegador flotante con accesos a redes sociales */}
      {/* <AsciiArtAnimation /> */}
      <div className="grid grid-cols-1 xl:grid-cols-2 p-20 content-center justify-center">
        <Home />
        <div className="grid grid-cols-1">
          <div className="h-12 w-12"></div>
          <Canvas />
        </div>
        {/* Dibujo lineas */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 p-20 content-center justify-center">
        <About />
        <div className="grid grid-cols-1">
          <div>
            <h1 className="mt-20 text-center text-white font-extrabold text-lg mb-4">
              Descarga
            </h1>
            <DownloadButton onClick={handleDownload} text={"PDF CV"} />
          </div>
          <LluviaObjCurvas />
        </div>
        {/* Dibujo lineas */}
      </div>
      <Projects />
      <div className="grid grid-cols-1 xl:grid-cols-2 p-20 content-center justify-center">
        <Tec />
        <div className="grid grid-cols-1">
          <div className="h-12 w-12"></div>
          <Canvas2 />
        </div>
        {/* Dibujo lineas */}
      </div>
      <Footer />
    </main>
  );
}

export default App;
