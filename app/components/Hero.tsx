'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay failed:', err));
    }
  }, []);

  return (
    <>
      <style jsx>{`
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-content {
            padding-top: 6rem;
          }
        }
      `}</style>
      
      <section className="relative h-screen w-full overflow-hidden bg-stone-900">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/new-hero.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        {/* Content */}
        <div className="hero-content relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 50 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-[4rem] sm:text-[7rem] lg:text-[12rem] xl:text-[14rem] font-black leading-none tracking-tighter text-white mb-4">
              KATAPULT
            </h1>
            
            <h2 className="text-[2.5rem] sm:text-[5rem] lg:text-[8rem] xl:text-[10rem] font-black leading-none tracking-tighter text-[#C1694F] mb-8">
              Africa
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-white/95 text-base sm:text-lg lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed px-4"
            >
              We believe that sustainable agriculture and climate-smart solutions will drive economic development across Africa. That is why we accelerate startups in the space.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}