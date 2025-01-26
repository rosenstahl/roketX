import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { H1, LeadText, BodyText } from '@/components/common/Typography';
import  Button  from '@/components/ui/Button';
import { Logo } from '@/components/common/Logo';
import { GlassEffect } from '@/components/ui/GlassEffect';
import { getTrustedByLogo } from '@/utils/assetHelpers';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';

const partners = [
  { id: 1, name: 'Altinzade', logo: getTrustedByLogo('Altinzade.svg') },
  { id: 2, name: 'VITA', logo: getTrustedByLogo('vita.svg') },
  { id: 3, name: 'TREU Service GmbH', logo: getTrustedByLogo('treu.svg') },
  { id: 4, name: 'Zoho', logo: getTrustedByLogo('zoho.svg') },
  { id: 5, name: 'Volksbank', logo: getTrustedByLogo('volksbank.svg') },
  { id: 6, name: 'Housecare24', logo: getTrustedByLogo('housecare24.svg') },
  { id: 7, name: 'Google Cloud', logo: getTrustedByLogo('google.svg') },
  { id: 8, name: 'AWS Advanced Consulting', logo: getTrustedByLogo('aws.svg') },
  { id: 9, name: 'Shopify Plus', logo: getTrustedByLogo('shopify.svg') },
  { id: 10, name: 'Meta Business', logo: getTrustedByLogo('meta.svg') }
];

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-base-primary">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
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

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <ScrollAnimation direction="down" delay={0.1} className="mb-16">
          <Logo className="w-32 h-auto filter drop-shadow-lg" isWhite />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2} className="max-w-[1000px]">
          <H1 className="text-white mb-6 leading-tight tracking-tight">
            Deine Vision, unser Business: Gemeinsam zum Erfolg
          </H1>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4} className="max-w-[800px]">
          <LeadText className="text-white/90 mb-12">
            Wir entwickeln Ihr Unternehmen von der Idee bis zur erfolgreichen Markteinführung
          </LeadText>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.6} className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => navigate('/kontakt')}
            variant="primary"
            size="large"
            className="backdrop-blur-md shadow-lg hover:shadow-xl"
          >
            Lass uns starten!
          </Button>
          <Button
            onClick={() => {
              const packagesSection = document.querySelector('.package-comparison');
              if (packagesSection) {
                packagesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="secondary"
            size="large"
            className="backdrop-blur-md shadow-lg hover:shadow-xl"
          >
            Unsere Lösungen entdecken
          </Button>
        </ScrollAnimation>
      </div>

      {/* Partners Section */}
      <div className="absolute bottom-0 w-full bg-transparent">
        <GlassEffect className="container mx-auto py-6">
          <BodyText className="text-center font-semibold text-white/80 mb-4">
            Vertraut von führenden Unternehmen
          </BodyText>
          
          {/* Partner Logos Carousel */}
          <div className="flex overflow-hidden relative justify-center">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="w-[150px] h-[60px] flex items-center justify-center"
                >
                  <motion.img
                    whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
                    src={partner.logo || '/trustedby/default-logo.svg'}
                    alt={partner.name}
                    className="w-auto h-[40px] max-w-[120px] object-contain brightness-0 invert opacity-80 
                             hover:opacity-100 transition-opacity duration-300"
                  />
                </div>              
              ))}
            </motion.div>
          </div>
        </GlassEffect>
      </div>
    </section>
  );
};

export default Hero;