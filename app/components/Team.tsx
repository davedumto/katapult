'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Mail, Linkedin } from 'lucide-react';
import Image from 'next/image';

const team = [{
  name: 'Beniamino Bruno',
  role: 'Venture Partner',
  image: '/Beniamino Bruno.jpeg',
  email: 'beniamino@katapult.vc',
  linkedin: 'https://linkedin.com/in/beniamino-bruno',
  bio: 'Experienced venture partner with deep expertise in African tech ecosystems and climate innovation.'
}, {
  name: 'Fabrice Boullé',
  role: 'Portfolio Advisor',
  image: '/fabrice-boulle.png',
  email: 'fabrice@katapult.vc',
  linkedin: 'https://linkedin.com/in/fabrice-boulle',
  bio: 'Strategic advisor helping portfolio companies scale across African markets with proven track record.'
}, {
  name: 'Paulina Jaeck',
  role: 'Finance Manager',
  image: '/Paulina Jaeck.png',
  email: 'paulina@katapult.vc',
  linkedin: 'https://linkedin.com/in/paulina-jaeck',
  bio: 'Finance expert managing investments and financial strategy for climate tech ventures.'
}, {
  name: 'Philip Gasaatura',
  role: 'Operating Partner',
  image: '/Philip Gasaatura.png',
  email: 'philip@katapult.vc',
  linkedin: 'https://linkedin.com/in/philip-gasaatura',
  bio: 'Founder, angel investor and venture builder, scaling tech startups in Africa. Structured Rwanda\'s govt backed VC fund, following 12 years in UK investment banking.'
}, {
  name: 'Tharald Nustad',
  role: 'Founder & Owner',
  image: '/Tharald Nikolai.png',
  email: 'tharald@katapult.vc',
  linkedin: 'https://linkedin.com/in/tharald-nustad',
  bio: 'Founder and visionary leader driving climate innovation investments across the African continent.'
}, {
  name: 'Yann Vaudin',
  role: 'Investment Associate',
  image: '/Yann Vaudin.jpg',
  email: 'yann@katapult.vc',
  linkedin: 'https://linkedin.com/in/yann-vaudin',
  bio: 'Investment professional sourcing and evaluating high-impact climate tech opportunities in Africa.'
}];
export function Team() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return <section id="team" className="py-32 bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.h2 initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="text-4xl md:text-5xl font-display font-bold text-baobab mb-4">
            Africa Team
          </motion.h2>
          <motion.div initial={{
          scaleX: 0
        }} whileInView={{
          scaleX: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
          }} className="h-1 w-24 bg-terracotta origin-left" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member, idx) => <div key={idx} className="relative">
            <motion.div 
              initial={{
                opacity: 0,
                y: 30
              }} 
              whileInView={{
                opacity: 1,
                y: 0
              }} 
              viewport={{
                once: true
              }} 
              transition={{
                delay: idx * 0.1
              }} 
              className="group cursor-pointer"
              onClick={() => setSelectedMember(selectedMember === idx ? null : idx)}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 right-4 w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${selectedMember === idx ? 'rotate-180' : '-rotate-90'}`} />
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-baobab group-hover:text-terracotta transition-colors">
                {member.name}
              </h3>
              <p className="text-baobab/60 font-medium mt-1">{member.role}</p>
            </motion.div>

            {}
            <AnimatePresence>
              {selectedMember === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 bg-white border-2 border-terracotta/20 rounded-2xl shadow-xl overflow-hidden relative"
                >
                  <div className="p-6">
                    {}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMember(null);
                      }}
                      className="absolute top-4 right-4 w-8 h-8 bg-terracotta/10 hover:bg-terracotta rounded-full flex items-center justify-center text-terracotta hover:text-white transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {}
                    <div className="flex flex-col gap-3 mb-4 pr-8">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-terracotta hover:text-terracotta/80 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span className="font-medium">{member.email}</span>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-terracotta hover:text-terracotta/80 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4 flex-shrink-0" />
                        <span className="font-medium">View LinkedIn</span>
                      </a>
                    </div>

                    {}
                    <div className="border-t border-baobab/10 pt-4">
                      <p className="text-baobab/70 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>)}
        </div>
      </div>
    </section>;
}