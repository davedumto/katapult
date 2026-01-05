'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
export function Hero() {
  return <section className="relative min-h-screen w-full overflow-visible flex items-center bg-gradient-to-br from-harmattan via-[#F5EFE6] to-[#E8DCCF]">
      {/* Gradient Blur Transition - Spans from Hero bottom into Vision top */}
      <div className="absolute bottom-0 left-0 right-0 h-[1em] bg-gradient-to-b from-[#E8DCCF]/0 via-harmattan/60 to-harmattan pointer-events-none z-30" 
           style={{ backdropFilter: 'blur(12px)' }} />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Concentric Circles - Right Side */}
        <div className="absolute top-1/2 right-[-10%] md:right-[-5%] -translate-y-1/2 w-[80vh] h-[80vh] md:w-[120vh] md:h-[120vh]">
          {/* Outer Circle with Orbital Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-terracotta/10 border-dashed"
          >
            {/* Palm Tree Icon - Outer Circle Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}>
                <Image src="/Palmtree.png" alt="" width={48} height={48} className="opacity-70" />
              </motion.div>
            </div>
            {/* Oak Tree Icon - Outer Circle Right */}
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}>
                <Image src="/Oaktree.png" alt="" width={48} height={48} className="opacity-70" />
              </motion.div>
            </div>
            {/* Coconut Tree Icon - Outer Circle Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}>
                <Image src="/cocnuttree.png" alt="" width={48} height={48} className="opacity-70" />
              </motion.div>
            </div>
          </motion.div>

          {/* Middle Circle with Orbital Icons */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[10%] rounded-full border border-baobab/5"
          >
            {/* Coconut Tree Icon - Middle Circle Top Right */}
            <div className="absolute top-[15%] right-[15%] translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}>
                <Image src="/cocnuttree.png" alt="" width={44} height={44} className="opacity-75" />
              </motion.div>
            </div>
            {/* Palm Tree Icon - Middle Circle Bottom Left */}
            <div className="absolute bottom-[15%] left-[15%] -translate-x-1/2 translate-y-1/2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}>
                <Image src="/Palmtree.png" alt="" width={44} height={44} className="opacity-75" />
              </motion.div>
            </div>
          </motion.div>

          {/* Inner Circle with Orbital Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[20%] rounded-full border border-sahel/10 border-dotted"
          >
            {/* Oak Tree Icon - Inner Circle Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}>
                <Image src="/Oaktree.png" alt="" width={40} height={40} className="opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-terracotta/5 to-transparent blur-3xl" />
        </div>

        {/* Floating Particles */}
        {[
          { width: 15, height: 18, left: 25, top: 30 },
          { width: 22, height: 12, left: 70, top: 60 },
          { width: 12, height: 20, left: 15, top: 80 },
          { width: 28, height: 16, left: 85, top: 20 },
          { width: 18, height: 14, left: 50, top: 45 }
        ].map((particle, i) => <motion.div key={i} className="absolute rounded-full bg-terracotta/20" style={{
        width: particle.width,
        height: particle.height,
        left: `${particle.left}%`,
        top: `${particle.top}%`
      }} animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        opacity: [0.1, 0.3, 0.1]
      }} transition={{
        duration: 10 + (i * 2),
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 1
      }} />)}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8 pt-20 lg:pt-0">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <div className="inline-block">
              <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
                <span className="text-terracotta">Katapult</span>
              </motion.h1>
              <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
                <span className="text-terracotta">Africa</span>
              </motion.h1>
            </div>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut'
        }} className="text-lg md:text-xl text-baobab/80 max-w-xl leading-relaxed">
            We believe that sustainable agriculture and climate-smart solutions
            will drive economic development across Africa. That is why we
            accelerate startups in the space.
          </motion.p>
        </div>

        {/* Floating Card */}
        <div className="lg:col-span-5 relative hidden md:block">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8
        }} className="mt-8">
            <div className="absolute inset-0 bg-terracotta/5 blur-2xl rounded-full transform translate-y-10" />
            <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 p-8 md:p-10 rounded-[2rem] shadow-xl max-w-lg ml-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-lg">
                    <Image 
                      src="/Beniamino Bruno.jpeg" 
                      alt="Beniamino Bruno" 
                      width={80}
                      height={80}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-terracotta rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-baobab text-lg">
                    Beniamino Bruno
                  </h3>
                  <p className="text-sm text-baobab/60 uppercase tracking-wider font-medium">
                    Venture Partner
                  </p>
                </div>
              </div>
              <p className="text-base text-baobab/80 italic leading-relaxed">
                &quot;Africa is not just the future of climate tech, it is the
                present. The innovation happening here is rewriting the global
                playbook.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>



      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-baobab/40 z-20">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>;
}