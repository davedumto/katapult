'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function ResearchReport() {
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
  return <section className="relative overflow-hidden bg-gradient-to-b from-white to-harmattan py-32" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full border border-sahel/10 opacity-50" />
      <div className="absolute bottom-20 right-[5%] w-96 h-96 rounded-full border border-terracotta/10 opacity-30" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div style={{
        y: imageY
      }} className="relative w-full rounded-[32px] overflow-hidden shadow-2xl">
          {/* Image Background */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Hands holding rich soil" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-terracotta/30 via-transparent to-transparent mix-blend-multiply" />

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
          }} className="absolute top-8 right-8 bg-sahel/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Research Report
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
            <div className="absolute -top-3 -right-3 w-20 h-20 border-r-4 border-t-4 border-sahel rounded-tr-3xl opacity-30" />

            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-sahel/15 text-sahel text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                New Research
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-baobab mb-6 leading-tight">
                Evolution of Investment in Food and Climate Tech
              </h2>

              <p className="text-lg text-baobab/70 mb-8 leading-relaxed">
                This research, authored by Katapult Africa, analyses the
                historical trends that have defined the food tech and climate
                tech sectors across the continent.
              </p>

              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="group relative inline-flex items-center gap-4 bg-baobab text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden shadow-lg shadow-baobab/20">
                <span className="relative z-10">View Report</span>
                <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-baobab to-twilight opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}