import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1744166239/Création_sans_titre_3_muwjej.png',
      title: 'Parfum d\'ambiance',
      subtitle: 'Découvrez notre collection de parfums d\'ambiance, créés avec passion et raffinement.',
      cta: 'Découvrir nos Parfums',
      accent: 'Nouveau',
      link: '/categories/ambient'
    },
    {
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1744165556/Création_sans_titre_2_lw6rtn.png',
      title: 'Nos "Thiourayes" ',
      subtitle: 'Découvrez nos encens artisanaux concocté avec soin ',
      cta: 'Explorer les encens',
      accent: 'Exclusif',
      link: '/categories/incense'
    },
    {
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1744166840/Création_sans_titre_4_jolgkx.png',
      title: 'Huiles à Brûler',
      subtitle: 'Des huiles inspirées de nos encens pour créer un espace apaisant .',
      cta: 'Explorer la Collection',
      accent: 'Exclusif',
      link: '/categories/ambient'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[80vh] md:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          <OptimizedImage
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0">
        <div className="container mx-auto px-4 h-full flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="max-w-xl md:max-w-2xl relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Star className="w-4 h-4 inline-block mr-2" />
                {slides[currentSlide].accent}
              </motion.div>

              <motion.h1
                className="font-playfair text-4xl md:text-6xl text-white mb-4 md:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="font-montserrat text-lg md:text-xl text-white/90 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.button 
                className="bg-primary hover:bg-primary/90 text-white font-montserrat px-6 md:px-8 py-2 md:py-3 rounded-full transition-all transform hover:scale-105"
                onClick={() => navigate(slides[currentSlide].link)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[currentSlide].cta}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-white/50 w-2 hover:bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <motion.button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all"
        onClick={prevSlide}
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.button>
      <motion.button
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all"
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 4 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.button>
    </div>
  );
};

export default Hero;