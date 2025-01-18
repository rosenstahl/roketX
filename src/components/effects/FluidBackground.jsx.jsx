import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FluidShader = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const particles = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    // Canvas Größe setzen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Partikel initialisieren
    for (let i = 0; i < 100; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: 0,
        speedY: 0,
        life: 1,
        color: `rgba(45, 25, 73, ${Math.random() * 0.5 + 0.2})` // Violett mit zufälliger Transparenz
      });
    }

    // Animation
    const animate = () => {
      // Leichtes Verblassen des vorherigen Frames
      context.fillStyle = 'rgba(248, 249, 252, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Mausbewegung berechnen
      const mouseSpeed = {
        x: mousePos.current.x - lastMousePos.current.x,
        y: mousePos.current.y - lastMousePos.current.y
      };

      // Partikel aktualisieren
      particles.current.forEach(particle => {
        // Distanz zur Maus
        const dx = mousePos.current.x - particle.x;
        const dy = mousePos.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Partikel zur Maus bewegen
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.speedX += (dx / distance) * force * 0.5;
          particle.speedY += (dy / distance) * force * 0.5;
        }

        // Mausgeschwindigkeit einbeziehen
        particle.speedX += mouseSpeed.x * 0.1;
        particle.speedY += mouseSpeed.y * 0.1;

        // Geschwindigkeit dämpfen
        particle.speedX *= 0.95;
        particle.speedY *= 0.95;

        // Partikel bewegen
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Partikel zeichnen
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.fill();

        // Partikel Leben reduzieren
        particle.life -= 0.01;
        if (particle.life <= 0) {
          // Partikel zurücksetzen
          particle.x = mousePos.current.x + (Math.random() - 0.5) * 50;
          particle.y = mousePos.current.y + (Math.random() - 0.5) * 50;
          particle.life = 1;
          particle.speedX = (Math.random() - 0.5) * 2;
          particle.speedY = (Math.random() - 0.5) * 2;
        }
      });

      lastMousePos.current = { ...mousePos.current };
      requestAnimationFrame(animate);
    };

    // Mausbewegung tracken
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

// Wrapper Component für einfache Verwendung
export const FluidBackground = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <FluidShader />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FluidShader;