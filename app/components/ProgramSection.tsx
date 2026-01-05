'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function ProgramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });
  return <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
        {/* Image Side */}
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: -50
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="relative group">
          <div className="absolute inset-0 bg-terracotta/20 rounded-[24px] transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-lg">
            <div className="absolute inset-0 bg-terracotta/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Agricultural innovation in Africa" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="space-y-8">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-4xl md:text-5xl font-display font-bold text-baobab">
            Katapult Africa Program
          </motion.h2>

          <div className="space-y-6 text-lg text-baobab/80 leading-relaxed">
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              Africa is the continent most affected by climate change, facing
              severe challenges such as rising temperatures, prolonged droughts,
              and resource scarcity. Yet, it is also a hub of innovation, with
              resilient entrepreneurs developing technologies to drive
              sustainable change.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              Our program is designed to support climate tech startups in
              reaching key milestones: growth, investor readiness, and impact
              management.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }}>
              Over three months, participants benefit from intensive workshops,
              learning sessions, and access to a broad network of key
              stakeholders, including investors and industry experts.
            </motion.p>
          </div>

          <motion.button initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} whileHover={{
          scale: 1.05,
          backgroundColor: '#A64435'
        }} whileTap={{
          scale: 0.95
        }} className="bg-terracotta text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2 shadow-lg shadow-terracotta/20 transition-colors">
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>;
}