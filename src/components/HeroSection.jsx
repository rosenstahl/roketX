// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
 const handleScrollToContent = () => {
   const packagesSection = document.getElementById('packages');
   if (packagesSection) {
     packagesSection.scrollIntoView({ behavior: 'smooth' });
   }
 };

 return (
   <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
     {/* Content Container */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center text-center">
       {/* Animated Subtitle */}
       <motion.p
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="text-white/70 tracking-widest mb-6"
       >
         UNTERNEHMENSAUFBAU • ENTWICKLUNG & BERATUNG
       </motion.p>

       {/* Main Heading mit 3D Leuchteffekt */}
       <motion.h1 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         className="text-7xl md:text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
         style={{
           textShadow: '0 0 20px rgba(255,255,255,0.2)',
           transform: 'perspective(1000px) rotateX(5deg)'
         }}
       >
         roketX
       </motion.h1>

       {/* Animierte Tagline */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.4 }}
         className="text-2xl md:text-4xl text-white/90 mb-12 space-y-2"
       >
         <p>Von der kleinen Idee</p>
         <p className="bg-gradient-to-r from-primary-light via-accent-coral to-primary-light bg-clip-text text-transparent">
           zum erfolgreichen Business
         </p>
       </motion.div>

       {/* CTA Buttons */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.6 }}
         className="flex gap-4"
       >
         <motion.button
           whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
           whileTap={{ scale: 0.95 }}
           className="px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all flex items-center"
         >
           Jetzt durchstarten
           <ArrowRight className="ml-2 h-5 w-5" />
         </motion.button>
         <motion.button
           whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
           whileTap={{ scale: 0.95 }}
           onClick={handleScrollToContent}
           className="px-8 py-3 bg-black/30 backdrop-blur-sm text-white border border-white/20 rounded-full hover:bg-white/10 transition-all"
         >
           Pakete entdecken
         </motion.button>
       </motion.div>
     </div>

     {/* 3D Hintergrundeffekte */}
     <motion.div 
       className="absolute inset-0 -z-10"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1.5 }}
     >
       {/* Hauptgradient */}
       <div className="absolute inset-0" 
         style={{
           background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
         }}
       />
       
       {/* Animierte Kreise */}
       {[...Array(3)].map((_, i) => (
         <motion.div
           key={i}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
           style={{
             width: `${800 + i * 200}px`,
             height: `${800 + i * 200}px`,
             opacity: 0.1 - i * 0.02,
             background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
             filter: 'blur(60px)',
           }}
           animate={{
             rotate: 360,
             scale: [1, 1.1, 1],
           }}
           transition={{
             rotate: { 
               duration: 20 + i * 5, 
               repeat: Infinity, 
               ease: "linear" 
             },
             scale: { 
               duration: 5 + i * 2, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }
           }}
         />
       ))}
     </motion.div>

     {/* Scroll Indicator */}
     <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 1, duration: 1 }}
       className="absolute bottom-8 left-0 w-full flex justify-center"
     >
       <motion.button
         onClick={handleScrollToContent}
         className="flex flex-col items-center text-white/50 hover:text-white transition-colors"
         animate={{ 
           y: [0, 8, 0],
           opacity: [0.5, 1, 0.5]
         }}
         transition={{ 
           duration: 2, 
           repeat: Infinity, 
           ease: "easeInOut" 
         }}
       >
         <span className="text-sm mb-2 tracking-widest">SCROLL</span>
         <ChevronDown className="h-4 w-4" />
       </motion.button>
     </motion.div>
   </section>
 );
};

export default HeroSection;