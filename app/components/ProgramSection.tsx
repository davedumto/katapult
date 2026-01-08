'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProgramSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative h-[500px] lg:h-auto">
          <Image
            src="/African Farmers Photo.jpg"
            alt="African Farmers"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="py-12 md:py-16 lg:py-20 px-6 lg:px-12 flex items-center bg-stone-50">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 mb-4 md:mb-6">
                Katapult Africa
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Africa faces severe climate challenges yet thrives with resilient entrepreneurs developing innovative technologies. Our three-month program supports climate tech startups through intensive workshops, stakeholder networks, and expert guidance to achieve growth, investor readiness, and impact management.
              </p>
              <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-stone-900 font-bold text-base md:text-lg rounded-sm hover:bg-amber-600 transition-all">
                Apply Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}