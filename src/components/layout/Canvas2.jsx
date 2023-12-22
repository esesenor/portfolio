import React, { useEffect, useRef } from 'react';
import random from 'canvas-sketch-util/random';

const Canvas2 = () => {
  const canvasRef = useRef(null);
  const requestId = useRef(null);
    // Define las dimensiones deseadas
    const width = 366; // Ancho en píxeles
    const height = 366; // Alto en píxeles
   
    const settings = {
      dimensions: [width, height], // Establece las dimensiones en la configuración
      animate: true,
    };

  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const coloresAzules = [
    "#0000FF", // Azul
    "#4169E1", // Azul real
    "#6495ED", // Azul pálido
    "#1E90FF", // Azul medio
    "#ADD8E6", // Azul claro
    "#87CEEB", // Azul cielo
    "#4682B4", // Azul acero
    "#B0C4DE", // Azul claro de acero
    "#AFEEEE", // Azul pálido de turquesa
    "#00BFFF", // Azul de turquesa
    "#5F9EA0", // Azul de cadete
    "#20B2AA", // Azul claro de turquesa
    "#7B68EE", // Azul medio de turquesa
    "#4B0082", // Azul índigo
    "#8A2BE2", // Azul violeta
    "#9370DB", // Azul medio de lavanda
  ];

  const randomColor2 = () => {
    return coloresAzules[random.rangeFloor(0, coloresAzules.length)];
  };

  function drawHexagon(context, x, y, size, color) {
    context.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const px = x + size * Math.cos(angle);
      const py = y + size * Math.sin(angle);
      if (i === 0) {
        context.moveTo(px, py);
      } else {
        context.lineTo(px, py);
      }
    }
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
  }

  function harmonicMotion(t, amplitude, frequency) {
    return amplitude * Math.sin(2 * Math.PI * frequency * t + (Math.PI / 6) * frequency);
  }

  const animate = (context, width, height) => {
    const hexagonSize = 22;
    const amplitude = 100;
    const frequency = 0.09;

    const numHexagonsX = 12;
    const numHexagonsY = 8;
    const offsetX = width / 2 - (numHexagonsX * hexagonSize * Math.sqrt(3)) / 2;
    const offsetY = height / 2 - (numHexagonsY * hexagonSize * 1.5) / 2;

    const time = Date.now() * 0.0005;
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    for (let x = 0; x < numHexagonsX; x++) {
      for (let y = 0; y < numHexagonsY; y++) {
        const hexagonX = offsetX + x * hexagonSize * Math.sqrt(3);
        const hexagonY = offsetY + y * hexagonSize * 1.5 + (x % 2) * (hexagonSize * 0.75);
        const hexagonColor = randomColor2();
        const variationAmplitude = (y / numHexagonsY) * amplitude;
        const variationFrequency = frequency + (y / numHexagonsY) * 0.5;
        const hexagonOffsetX = harmonicMotion(time, variationAmplitude, variationFrequency);
        const hexagonOffsetY = harmonicMotion(time, variationAmplitude, variationFrequency * 2);
        drawHexagon(context, hexagonX + hexagonOffsetX, hexagonY + hexagonOffsetY, hexagonSize, hexagonColor);
      }
    }

    requestId.current = requestAnimationFrame(() => animate(context, width, height));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    context.lineWidth = 1;

    animate(context, width, height);

    return () => {
      if (requestId.current) {
        cancelAnimationFrame(requestId.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} className="block mx-auto rounded-full shadow-blue-500 shadow-md transition-all" />;
};

export default Canvas2;
