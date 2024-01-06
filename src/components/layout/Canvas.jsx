import { useEffect, useRef } from "react";
import Loader from "../Loader";

const w = 366;
const h = 366;

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const Y = [
      20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 72,
      75, 78, 81,
    ];
    for (let i = 20; i < 200; i += 3) {
      Y.push(i);
    }

    const numLines = Y.length;
    const startX = 10;
    const startY = 90;

    function drawFrame(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 0.7;
      ctx.strokeStyle = "#3b82f6";

      for (let i = 0; i < numLines; i++) {
        const t = 0.001 * time + (i * (2 * Math.PI)) / numLines;
        const y = startY + Y[i] * Math.sin(t);
        ctx.beginPath();
        ctx.moveTo(startX - i * 3, y);
        ctx.bezierCurveTo(
          w / 3,
          startX + w / 16,
          y * 1.5 - w / 4,
          y * 2 + h / 3,
          w,
          0
        );
        ctx.stroke();
      }

      requestAnimationFrame(drawFrame);
    }

    requestAnimationFrame(drawFrame);
  }, []);

  return (
    <div className="block mx-auto">
      {canvasRef ? (
        <canvas
          ref={canvasRef}
          height={h}
          width={w}
          className="bg-black -z-50 shadow-blue-500 shadow-md rounded-full transition-all"
        ></canvas>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Canvas;
