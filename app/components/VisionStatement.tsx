'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function VisionStatement() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Decorative Quote Mark */}
          <div className="text-amber-500/20 text-6xl md:text-9xl font-serif leading-none mb-4 md:mb-6">"</div>
          
          <p className="text-stone-700 text-lg md:text-2xl lg:text-3xl leading-relaxed font-light italic relative">
            Africa is home to some of the fastest-growing economies in the world. With a young, tech-savvy population and a growing need for climate resilience, the continent is positioned to lead in climate-smart technologies and sustainable solutions. These opportunities are key to addressing Africa's most pressing challenges, from resource scarcity to the impacts of climate change, while fostering long-term, inclusive growth.
          </p>

          {/* Decorative Accent Bar */}
          <div className="mt-8 md:mt-12 flex items-center gap-4">
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}