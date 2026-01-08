'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function ClimateCompass() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Climate Impact Compass */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-stone-50 p-6 md:p-8 lg:p-10 rounded-sm border-2 border-[#8B5A3C]"
          >
            <div className="text-amber-600 text-xs md:text-sm font-black tracking-wider mb-3 md:mb-4">CLIMATE IMPACT</div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-stone-900 mb-4 md:mb-6">
              Introducing The Climate Impact Compass
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              This framework, developed by Katapult Africa in collaboration with Norrsken and The Risa Fund, aims at aligning impact reporting for early stage climate tech startups across the continent.
            </p>
            <button className="text-stone-900 text-sm md:text-base font-semibold underline hover:text-amber-600 hover:no-underline transition-all">
              Access Compass →
            </button>
          </motion.div>

          {/* Research Report */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-stone-50 p-6 md:p-8 lg:p-10 rounded-sm border-2 border-[#8B5A3C]"
          >
            <div className="text-amber-600 text-xs md:text-sm font-black tracking-wider mb-3 md:mb-4">RESEARCH REPORT</div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-stone-900 mb-4 md:mb-6">
              NEW RESEARCH<br />
              Evolution of Investment in Food and Climate Tech
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              This research, authored by Katapult Africa, analyses the historical trends that have defined the food tech and climate tech sectors across the continent.
            </p>
            <button className="text-stone-900 text-sm md:text-base font-semibold underline hover:text-amber-600 hover:no-underline transition-all">
              View Report →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}