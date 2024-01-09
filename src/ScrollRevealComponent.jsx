import { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';  // Asegúrate de importar tu archivo CSS de Tailwind

const ScrollRevealComponent = () => {
  const componentRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const rect = componentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight) {
        componentRef.current.classList.add('animate-fadeAndSlideUp');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={componentRef} className="opacity-0 transform -translate-y-4 transition-all duration-500">
      {/* Contenido del componente */}
    </div>
  );
};

export default ScrollRevealComponent;