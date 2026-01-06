'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const heroImages = [
  '/African Climate Photo (2).jpg',
  '/African Climate Photo (3).jpg',
  '/African Climate Photo (4).jpg',
  '/African Climate Photo (5).jpg',
  '/African Climate Photo (6) 2.jpg',
  '/African Landscape Photo (1).jpg',
  '/African Landscape Photo 2.jpg'
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentImage = heroImages[currentImageIndex];
  return <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Full-width Background Image with Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0 
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image 
              src={image}
              alt="African Climate Landscape"
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
          </motion.div>
        ))}
        {/* Mobile overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/10 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-screen flex">
        {/* Desktop: Left Side - Glassmorphism Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hidden md:flex w-[46.7%] h-full backdrop-blur-2xl bg-white/10 border-r border-white/20 flex-col justify-between px-8 md:px-12 py-12"
        >
          {/* Spacer for top */}
          <div></div>
        </motion.div>

        {/* Desktop: Right Side - Photo Background */}
        <div className="hidden md:flex w-[54%] h-full relative">
          {/* Navigation Arrows - Bottom Right */}
          <div className="absolute bottom-8 right-8 flex items-center gap-3">
            <button 
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-8 left-8 flex items-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentImageIndex(index);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Full Width Content */}
        <div className="md:hidden w-full h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            {/* KATAPULT - Solid white on mobile */}
            <h1 className="text-6xl sm:text-7xl font-display font-black leading-none tracking-tighter mb-3 text-white drop-shadow-2xl">
              KATAPULT
            </h1>

            {/* AFRICA */}
            <h2 className="text-5xl sm:text-6xl font-display font-black leading-none tracking-tighter mb-6 text-terracotta drop-shadow-lg">
              AFRICA
            </h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/90 text-base leading-relaxed max-w-lg mx-auto drop-shadow-md"
            >
              We believe that sustainable agriculture and climate-smart solutions will drive economic development across Africa. That is why we accelerate startups in the space.
            </motion.p>
          </motion.div>
        </div>

        {/* Desktop: Text Spanning Both Sides */}
        <div className="hidden md:flex absolute inset-0 items-center pointer-events-none">
          <div className="w-full flex items-baseline">
            {/* Left Side - KATA (in glassmorphism area) */}
            <div className="w-[46%] flex justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-col items-end"
              >
                {/* KATA with transparent text - shows actual Hero background through */}
                <h1 
                  className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-display font-black leading-none tracking-tighter"
                  style={{
                    backgroundImage: `url("${currentImage}")`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  KATA
                </h1>

                {/* AFRICA below */}
                <h2 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-none tracking-tighter mt-3 ml-3 self-start text-terracotta"
                >
                  AFRICA
                </h2>

                {/* Subtitle below AFRICA */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-white/80 text-sm md:text-lg leading-relaxed mt-6 max-w-md self-start p-2"
                >
                  We believe that sustainable agriculture and climate-smart solutions will drive economic development across Africa. That is why we accelerate startups in the space.
                </motion.p>
              </motion.div>
            </div>

            {/* Right Side - PULT (on background) */}
            <div className="w-[54%] flex justify-start">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-display font-black text-white leading-none tracking-tighter drop-shadow-2xl"
              >
                PULT
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </section>;
}