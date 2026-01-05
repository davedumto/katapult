'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function ClimateCompass() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  return <section className="relative overflow-hidden bg-gradient-to-b from-harmattan to-white py-32" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full border border-terracotta/10 opacity-50" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full border border-sahel/10 opacity-30" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div style={{
        y: imageY
      }} className="relative w-full rounded-[32px] overflow-hidden shadow-2xl">
          {/* Image Background */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Baobab tree landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating Badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.8
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }} className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
              <span className="text-terracotta font-bold text-sm uppercase tracking-wider">
                Climate Impact
              </span>
            </motion.div>
          </div>

          {/* Content Card - Inside Container */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative bg-white p-8 md:p-12 m-8 md:m-12 rounded-[24px] shadow-xl">
            {/* Decorative Corner Element */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-l-4 border-t-4 border-terracotta rounded-tl-3xl opacity-30" />

            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-baobab mb-6 leading-tight">
                Introducing The Climate Impact Compass
              </h2>

              <p className="text-lg text-baobab/70 mb-8 leading-relaxed">
                This framework, developed by Katapult Africa in collaboration
                with Norrsken and The Risa Fund, aims at aligning impact
                reporting for early stage climate tech startups across the
                continent.
              </p>

              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="group relative inline-flex items-center gap-4 bg-terracotta text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden shadow-lg shadow-terracotta/20">
                <span className="relative z-10">Access Compass</span>
                <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-terracotta to-[#A64435] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}