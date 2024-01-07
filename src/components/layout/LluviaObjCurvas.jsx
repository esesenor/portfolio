import React, { useEffect, useRef } from "react";
import random from "canvas-sketch-util/random";

const Canvas3 = () => {
  const canvasRef = useRef(null);
  const animationId = useRef(null);

  const settings = {
    dimensions: [366, 366],
    animate: true,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const characters = "$$";
    const fontSize = 40;
    const columns = Math.ceil(settings.dimensions[0] / fontSize);
    const rows = Math.ceil(settings.dimensions[1] / fontSize);
    const particles = [];

    //Clase que define el objeto que será la partícula
    class Particle {
      constructor(x, y, character) {
        this.x = x;
        this.y = y;
        this.character = character;
        this.speed = random.range(1, 5);
        this.angle = random.range(Math.PI * 0.25, Math.PI * 0.75);
        this.opacity = 1;
      }

      // Actualizar posición y estilo de la partícula
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + 1;
        this.opacity -= 0.02;

        if (this.opacity <= 0) {
          this.character = characters[random.rangeFloor(0, characters.length)];
          this.speed = random.range(1, 5);
          this.angle = random.range(Math.PI * 0.25, Math.PI * 0.75);
          this.opacity = 1;
        }
      }

      // Dibujar la partícula en el contexto
      draw() {
        context.fillStyle = `rgba(0, 28, 250, ${this.opacity})`;
        context.font = `${fontSize}px monospace`;
        context.fillText(this.character, this.x, this.y);
      }
    }

    // Crear partículas iniciales
    const createParticles = () => {
      particles.length = 0; // Limpiar el arreglo
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * fontSize;
          const y = j * fontSize;
          const character = characters[random.rangeFloor(0, characters.length)];
          particles.push(new Particle(x, y, character));
        }
      }
    };

    createParticles();

    // Función para renderizar un fotograma de la animación
    const renderFrame = () => {
      context.fillStyle = "black";
      context.fillRect(0, 0, settings.dimensions[0], settings.dimensions[1]);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();

        if (particle.y > settings.dimensions[1] + fontSize) {
          particle.y = -fontSize;
          particle.character =
            characters[random.rangeFloor(0, characters.length)];
          particle.speed = random.range(0.5, 2);
          particle.angle = random.range(Math.PI * 0.15, Math.PI * 0.75);
          particle.opacity = 1;
        }
      });

      if (settings.animate) {
        animationId.current = requestAnimationFrame(renderFrame);
      }
    };

    // Iniciar la animación
    renderFrame();

    // Devolver una función de limpieza para detener la animación
    return () => {
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <canvas
      className="abslute mx-auto rounded-full shadow-blue-500 shadow-md transition-all"
      ref={canvasRef}
      width={settings.dimensions[0]}
      height={settings.dimensions[1]}
    />
  );
};

export default Canvas3;
