'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';

const heroImages = [
  '/african-climate-2.webp',
  '/african-climate-3.webp',
  '/african-climate-4.webp',
  '/african-climate-5.webp',
  '/african-climate-6.webp',
  '/african-landscape-1.webp',
  '/african-landscape-2.webp'
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const kataRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const kataContainerRef = useRef<HTMLDivElement>(null);
  const pultRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    heroImages.forEach((imageSrc) => {
      const img = new window.Image();
      img.src = imageSrc;
    });
  }, []);

  useEffect(() => {
    
    imageRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.to(ref, {
          opacity: index === currentImageIndex ? 1 : 0,
          duration: 1.2,
          ease: 'power2.inOut',
        });
      }
    });

    kataRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.to(ref, {
          opacity: index === currentImageIndex ? 1 : 0,
          duration: 1.2,
          ease: 'power2.inOut',
        });
      }
    });
  }, [currentImageIndex]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollProgress = Math.min(window.scrollY / 300, 1); 
          const translateAmount = scrollProgress * 30; 

          if (kataContainerRef.current) {
            gsap.to(kataContainerRef.current, {
              x: -translateAmount,
              duration: 0.3,
              ease: 'power2.out',
            });
          }

          if (pultRef.current) {
            gsap.to(pultRef.current, {
              x: translateAmount,
              duration: 0.3,
              ease: 'power2.out',
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1);
    
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1);
    
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentImage = heroImages[currentImageIndex];
  return <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            ref={(el) => {imageRefs.current[index] = el}}
            className="absolute inset-0"
            style={{ opacity: index === 0 ? 1 : 0 }}
          >
            <Image 
              src={image}
              alt="African Climate Landscape"
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={60}
              sizes="100vw"
            />
          </div>
        ))}
        {}
        <div className="absolute inset-0 bg-black/30 lg:bg-black/10 z-10" />
      </motion.div>

      {}
      <div className="relative z-10 w-full h-screen flex">
        {}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hidden lg:flex w-1/2 h-full backdrop-blur-2xl bg-white/10 border-r border-white/20 flex-col justify-between px-8 lg:px-12 py-12"
        >
          {}
          <div></div>
        </motion.div>

        {}
        <div className="hidden lg:flex w-1/2 h-full relative">
          {}
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

          {}
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

        {}
        <div className="lg:hidden w-full h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            {}
            <h1 className="text-6xl sm:text-7xl font-display font-black leading-none tracking-tighter mb-3 text-white drop-shadow-2xl">
              KATAPULT
            </h1>

            {}
            <h2 className="text-5xl sm:text-6xl font-display font-black leading-none tracking-tighter mb-6 text-terracotta drop-shadow-lg">
              AFRICA
            </h2>

            {}
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

        {}
        <div className="hidden lg:flex absolute inset-0 items-center pointer-events-none">
          <div className="w-full flex items-baseline">
            {}
            <div className="w-1/2 flex justify-end pr-2">
              <motion.div
                ref={kataContainerRef}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: isMounted ? 1 : 0, x: isMounted ? 0 : -100 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-end"
              >
                {}
                <div className="relative">
                  {heroImages.map((image, index) => (
                    <h1 
                      key={index}
                      ref={(el) => {kataRefs.current[index] = el}}
                      className={`text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] pr-[0.03em] font-display font-black leading-none tracking-tighter ${
                        index === 0 ? 'relative' : 'absolute inset-0'
                      }`}
                      style={{
                        backgroundImage: `url("${image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        opacity: index === 0 ? 1 : 0,
                      }}
                    >
                      KATA
                    </h1>
                  ))}
                  <h1 
                    className="absolute inset-0 text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-display font-black leading-none tracking-tighter text-black pointer-events-none"
                    style={{ opacity: 0.8 }}
                  >
                    KATA
                  </h1>
                </div>

                {}
                <h2 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-none tracking-tighter mt-3 ml-3 self-start text-terracotta"
                >
                  AFRICA
                </h2>

                {}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-white/80 text-sm md:text-lg leading-relaxed mt-6 max-w-md self-start"
                >
                  We believe that sustainable agriculture and climate-smart solutions will drive economic development across Africa. That is why we accelerate startups in the space.
                </motion.p>
              </motion.div>
            </div>

            {}
            <div className="w-1/2 flex justify-start  -ml-[0.35em]">
              <motion.h1
                ref={pultRef}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: isMounted ? 1 : 0, x: isMounted ? 0 : 100 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
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