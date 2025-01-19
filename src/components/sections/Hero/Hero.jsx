// src/components/sections/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../common/Logo/Logo';
import ScrollAnimation from '../../common/ScrollAnimation/ScrollAnimation';
export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#171614]">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#171614]/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-background.webm" type="video/webm" />
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <ScrollAnimation direction="down" delay={0.1} className="mb-16">
          <Logo size="2xl" withLink={false} isWhite={true} className="filter drop-shadow-lg" />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2} className="max-w-[1000px]">
          <h1 className="font-['SF_Pro_Display'] font-bold text-[48px] md:text-[60px] leading-[1.2] tracking-[-0.02em] text-[#EEEDEA] mb-6">
            Deine Vision, unser Business: Gemeinsam zum Erfolg
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4} className="max-w-[800px]">
          <p className="font-['Inter'] font-normal text-[18px] md:text-[20px] leading-[1.8] text-[#EEEDEA]/90 mb-12">
            Wir entwickeln Ihr Unternehmen von der Idee bis zur erfolgreichen Markteinführung
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#007AFF]/90 backdrop-blur-md text-[#EEEDEA] rounded-lg font-['SF_Pro_Display'] font-semibold text-[16px] hover:bg-[#007AFF]/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Lass uns starten!
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#EEEDEA]/10 backdrop-blur-md border-2 border-[#EEEDEA]/50 text-[#EEEDEA] rounded-lg font-['SF_Pro_Display'] font-semibold text-[16px] hover:bg-[#EEEDEA]/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Unsere Lösungen entdecken
            </motion.button>
          </div>
        </ScrollAnimation>

        {/* Scroll Indicator */}
        <ScrollAnimation direction="up" delay={1} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-[#EEEDEA]/60 text-sm font-['SF_Pro_Display']">SCROLL</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-[#EEEDEA]/60"
            >
              <path 
                d="M12 4L12 20M12 20L18 14M12 20L6 14" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;