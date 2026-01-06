'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import DotGrid from './DotGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function VisionStatement() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll('.word');

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)'
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power2.out',
        stagger: {
          amount: 1.5,
          from: 'start'
        },
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const text = "Africa is home to some of the fastest-growing economies in the world. With a young, tech-savvy population and a growing need for climate resilience, the continent is positioned to lead in climate-smart technologies and sustainable solutions. These opportunities are key to addressing Africa's most pressing challenges, from resource scarcity to the impacts of climate change, while fostering long-term, inclusive growth.";
  
  const words = text.split(' ');

  return <section ref={sectionRef} className="relative py-32 md:py-40 px-6 overflow-hidden bg-harmattan">
      
      {}
      <div className="absolute inset-0 pointer-events-auto">
        <DotGrid
          dotSize={6}
          gap={30}
          baseColor="#C75B4A"
          activeColor="#D4A853"
          proximity={120}
          speedTrigger={80}
          shockRadius={200}
          shockStrength={4}
          maxSpeed={3500}
          resistance={650}
          returnDuration={2}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div ref={textRef} className="font-sans text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.6] md:leading-[1.8] text-baobab font-medium">
          {words.map((word, index) => {
            const isHighlight = ['fastest-growing', 'economies', 'climate-smart', 'technologies', 'inclusive', 'growth'].includes(word.replace(/[.,]/g, ''));
            return (
              <span
                key={index}
                className={`word inline-block mr-[0.3em] ${isHighlight ? 'text-terracotta font-semibold' : ''}`}
              >
                {word}
              </span>
            );
          })}
        </div>

        <motion.div initial={{
        scaleX: 0
      }} animate={isInView ? {
        scaleX: 1
      } : {
        scaleX: 0
      }} transition={{
        duration: 1,
        delay: 0.5,
        ease: 'circOut'
      }} className="w-24 h-1 bg-terracotta mx-auto mt-12 rounded-full" />
      </div>
    </section>;
}