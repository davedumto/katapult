'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%'
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };
  return <>
      <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12', scrolled ? 'bg-harmattan/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent')}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center z-50 relative">
            <svg aria-hidden="true" className="katapult-logo w-32 h-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 178 79" style={{enableBackground:'new 0 0 178 79'}} xmlSpace="preserve">
              <path className="fill-terracotta" d="M10.3,57.8C4.6,57.8,0,62.4,0,68.1c0,5.7,4.6,10.3,10.3,10.3c5.7,0,10.3-4.6,10.3-10.3
                C20.6,62.4,16,57.8,10.3,57.8z M10.3,74.9c-3.8,0-6.8-3.1-6.8-6.9c0-3.8,3.1-6.9,6.8-6.9c3.8,0,6.8,3.1,6.8,6.9
                C17.1,71.9,14.1,74.9,10.3,74.9z"></path>
              <path className="fill-terracotta" d="M10.3,20.6c5.7,0,10.3-4.6,10.3-10.3C20.6,4.6,16,0,10.3,0C4.6,0,0,4.6,0,10.3C0,16,4.6,20.6,10.3,20.6z
                 M10.3,3.5c3.8,0,6.8,3.1,6.8,6.9c0,3.8-3.1,6.9-6.8,6.9c-3.8,0-6.8-3.1-6.8-6.9C3.4,6.5,6.5,3.5,10.3,3.5z"></path>
              <path className="fill-terracotta" d="M37.9,29c-5.7,0-10.3,4.6-10.3,10.3c0,5.7,4.6,10.3,10.3,10.3c5.7,0,10.3-4.6,10.3-10.3
                C48.2,33.6,43.6,29,37.9,29z M37.9,46.1c-3.8,0-6.8-3.1-6.8-6.9c0-3.8,3.1-6.9,6.8-6.9c3.8,0,6.8,3.1,6.8,6.9
                C44.8,43,41.7,46.1,37.9,46.1z"></path>
              <path className="fill-terracotta" d="M37.9,0c-5.7,0-10.3,4.6-10.3,10.3c0,2.2,0.7,4.3,1.9,6L15.5,30.4C14,29.5,12.2,29,10.3,29
                C4.6,29,0,33.6,0,39.3c0,5.7,4.6,10.3,10.3,10.3c1.9,0,3.7-0.5,5.2-1.4l14.1,14.1c-1.2,1.7-1.9,3.7-1.9,6c0,5.7,4.6,10.3,10.3,10.3
                c5.7,0,10.3-4.6,10.3-10.3c0-5.7-4.6-10.3-10.3-10.3c-2.2,0-4.3,0.7-5.9,1.9L18.1,45.9c1.5-1.8,2.4-4.1,2.4-6.7
                c0-2.5-0.9-4.9-2.4-6.7L32,18.7c1.7,1.2,3.7,1.9,5.9,1.9c5.7,0,10.3-4.6,10.3-10.3C48.2,4.6,43.6,0,37.9,0z M37.9,61.4
                c3.8,0,6.8,3.1,6.8,6.9c0,3.8-3.1,6.9-6.8,6.9c-3.8,0-6.8-3.1-6.8-6.9C31.1,64.4,34.2,61.4,37.9,61.4z M10.3,46.1L10.3,46.1
                c-3.8,0-6.8-3.1-6.8-6.9c0-3.8,3.1-6.9,6.8-6.9c3.8,0,6.8,3.1,6.8,6.9C17.1,43,14.1,46.1,10.3,46.1z M37.9,17.2
                c-3.8,0-6.8-3.1-6.8-6.9c0-3.8,3.1-6.9,6.8-6.9c3.8,0,6.8,3.1,6.8,6.9C44.8,14.1,41.7,17.2,37.9,17.2z"></path>
              <polygon className="fill-terracotta" points="78.4,16.5 75.3,16.5 67.8,25 76,34.7 79.1,34.7 70.8,25 "></polygon>
              <path className="fill-terracotta" d="M93.8,32.7h-2v-7.3c0-3.2-2.2-4.7-5.2-4.7c-2.9,0-5.2,1.8-5.2,4.4h2.4c0-1.7,1.1-2.5,2.8-2.5
                c1.7,0,2.8,0.6,2.8,2.7v1.1L85,26.9c-2.7,0.2-4.1,2-4.1,4.1c0,1.1,0.4,2.1,1.1,2.8c0.8,0.8,1.9,1.2,3.3,1.2c2,0,3.5-0.9,4.3-2.8h0.1
                l0.1,2.5h4.1V32.7z M89.5,28.9c0,2.5-1.3,4.2-3.5,4.2c-1.5,0-2.5-0.6-2.5-1.8v-1.2c0-0.8,0.1-1.2,1.1-1.3l4.8-0.5V28.9z"></path>
              <polygon className="fill-terracotta" points="97.5,34.7 103.1,34.7 103.1,32.7 99.9,32.7 99.9,23.1 103.1,23.1 103.1,21.1 99.9,21.1 99.9,16.5 
                97.5,16.5 97.5,21.1 95.2,21.1 95.2,23.1 97.5,23.1 "></polygon>
              <path className="fill-terracotta" d="M114.2,32.2h0.1l0.1,2.5h4.1v-2.1h-2v-7.3c0-3.2-2.2-4.7-5.2-4.7c-2.9,0-5.2,1.8-5.2,4.4h2.4
                c0-1.7,1.1-2.5,2.8-2.5c1.7,0,2.8,0.6,2.8,2.7v1.1l-4.4,0.4c-2.7,0.2-4.1,2-4.1,4.1c0,1.1,0.4,2.1,1.1,2.8c0.8,0.8,1.9,1.2,3.3,1.2
                C112,35.1,113.5,34.2,114.2,32.2z M108.1,31.3v-1.2c0-0.8,0.1-1.2,1.1-1.3l4.8-0.5v0.6c0,2.5-1.3,4.2-3.5,4.2
                C109,33.1,108.1,32.6,108.1,31.3z"></path>
              <path className="fill-terracotta" d="M123.6,32.5c0.9,1.6,2.3,2.6,4.4,2.6c3.7,0,5.4-3.2,5.4-7.2c0-4-1.7-7.2-5.4-7.2c-2.1,0-3.5,0.9-4.4,2.5v-2.2
                h-2.4v18.3h2.4V32.5z M123.6,26.7c0-2.4,1.3-4.1,3.7-4.1c2,0,3.5,1.3,3.5,3.1V30c0,1.9-1.5,3.1-3.5,3.1c-2.4,0-3.7-1.7-3.7-4.1V26.7
                z"></path>
              <path className="fill-terracotta" d="M145.4,29.1c0,2.4-1.3,4.1-3.3,4.1c-2,0-2.7-1.3-2.7-3.2v-8.9H137v9.1c0,3.5,1.9,4.9,4.4,4.9c2.1,0,3.2-1,4-2.6
                v2.3h2.4V21.1h-2.4V29.1z"></path>
              <rect x="152.3" y="16.5" className="fill-terracotta" width="2.4" height="18.3"></rect>
              <polygon className="fill-terracotta" points="165.7,23.1 165.7,21.1 162.6,21.1 162.6,16.5 160.2,16.5 160.2,21.1 157.9,21.1 157.9,23.1 160.2,23.1 
                160.2,34.7 165.7,34.7 165.7,32.7 162.6,32.7 162.6,23.1 "></polygon>
              <rect x="65.2" y="16.5" className="fill-terracotta" width="2.5" height="18.3"></rect>
              <polygon className="fill-terracotta" points="83,47.8 80.7,47.8 80.7,49.9 83,49.9 83,61.6 85.4,61.6 85.4,49.9 88.3,49.9 88.3,47.8 85.4,47.8 
                85.4,45.3 88.6,45.3 88.6,43.2 83,43.2 "></polygon>
              <rect x="101" y="43.2" className="fill-terracotta" width="2.5" height="2.5"></rect>
              <rect x="101" y="47.8" className="fill-terracotta" width="2.4" height="13.8"></rect>
              <path className="fill-terracotta" d="M132.4,52.2c0-3.2-2.2-4.7-5.2-4.7c-2.9,0-5.3,1.8-5.3,4.4h2.4c0-1.8,1.1-2.5,2.8-2.5s2.9,0.6,2.9,2.7v1.1
                l-4.5,0.4c-2.7,0.2-4.1,2-4.1,4.1c0,1.1,0.4,2.1,1.1,2.9c0.8,0.8,1.9,1.2,3.3,1.2c2.1,0,3.6-0.9,4.3-2.9h0.1l0.1,2.5h4.1v-2.1h-2.1
                V52.2z M130.1,55.8c0,2.5-1.3,4.2-3.5,4.2c-1.5,0-2.5-0.6-2.5-1.8v-1.2c0-0.8,0.1-1.2,1.1-1.3l4.9-0.5V55.8z"></path>
              <polygon className="fill-terracotta" points="91.4,61.6 93.8,61.6 93.8,49.9 98,49.9 98,47.8 91.4,47.8 "></polygon>
              <path className="fill-terracotta" d="M69.9,43.2l-6.3,19.3l2.6-1l1.5-4.5h7.2l1.5,4.5h2.7l-6.4-18.3H69.9z M68.3,55l2.9-8.8h0.1l2.9,8.8H68.3z"></path>
              <path className="fill-terracotta" d="M113,60c-1.8,0-3.2-1.3-3.2-3.2v-4c0-2.1,1.6-3.2,3.2-3.2c1.6,0,3,0.6,3.2,2.9h2.4c-0.3-3.3-2.6-4.8-5.5-4.8
                c-3.7,0-5.9,2.9-5.9,7.3c0,4.1,1.9,7.1,5.9,7.1c2.8,0,5.3-1.5,5.6-4.9h-2.4C116.1,59,114.8,60,113,60z"></path>
            </svg>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Africa', 'Accelerator', 'Portfolio', 'Team'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-baobab hover:text-terracotta transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>)}
            <button onClick={() => setIsOpen(true)} className="ml-4 p-2 hover:bg-baobab/5 rounded-full transition-colors" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 hover:bg-baobab/5 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && <motion.div initial="closed" animate="open" exit="closed" variants={menuVariants} className="fixed inset-0 z-[60] flex flex-col md:flex-row bg-harmattan">
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 z-50 p-2 hover:bg-baobab/5 rounded-full transition-colors">
              <X className="w-8 h-8 text-baobab" />
            </button>

            {/* Left Content Area (70%) */}
            <div className="w-full md:w-[70%] p-6 md:p-16 flex items-center justify-center">
              <div className="max-w-4xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {/* Column 1 */}
                  <div className="space-y-4">
                    <h3 className="text-terracotta font-display font-bold text-base md:text-lg">
                      For Startups
                    </h3>
                    <ul className="space-y-2 md:space-y-4">
                      {['What We Offer', 'Accelerators', 'Mentors'].map((link, i) => <motion.li key={link} variants={itemVariants} transition={{
                    delay: 0.1 + i * 0.05
                  }}>
                            <a href="#" className="text-base md:text-xl font-medium hover:text-terracotta transition-colors block py-1">
                              {link}
                            </a>
                          </motion.li>)}
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4">
                    <h3 className="text-terracotta font-display font-bold text-base md:text-lg">
                      For Investors
                    </h3>
                    <ul className="space-y-2 md:space-y-4">
                      {['What We Offer', 'Portfolio', 'Katapult Accelerator Portfolio', 'Investor Days'].map((link, i) => <motion.li key={link} variants={itemVariants} transition={{
                    delay: 0.2 + i * 0.05
                  }}>
                          <a href="#" className="text-base md:text-xl font-medium hover:text-terracotta transition-colors block py-1">
                            {link}
                          </a>
                        </motion.li>)}
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-4">
                    <h3 className="text-terracotta font-display font-bold text-base md:text-lg">
                      On the radar
                    </h3>
                    <ul className="space-y-2 md:space-y-4">
                      {['News', 'Press', 'Events', 'Publications'].map((link, i) => <motion.li key={link} variants={itemVariants} transition={{
                    delay: 0.3 + i * 0.05
                  }}>
                            <a href="#" className="text-base md:text-xl font-medium hover:text-terracotta transition-colors block py-1">
                              {link}
                            </a>
                          </motion.li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 md:mt-16 pt-8 md:pt-16 border-t border-baobab/10">
                  <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-terracotta font-display font-bold text-base md:text-lg">
                        About
                      </h3>
                      <div className="flex flex-wrap gap-4 md:gap-6">
                        {['Our Values', 'Katapult Foundation', 'Careers', 'Team'].map(link => <a key={link} href="#" className="text-sm md:text-lg font-medium hover:text-terracotta transition-colors">
                            {link}
                          </a>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Accent Area (30%) */}
            <div className="hidden md:flex w-[30%] bg-terracotta text-harmattan p-16 flex-col justify-center relative overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-white/20" />
              <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full border border-white/20" />

              <div className="relative z-10 space-y-8">
                <h3 className="font-display font-bold text-2xl">Thematics</h3>
                <div className="space-y-4">
                  <button className="w-full text-left px-6 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-colors flex justify-between items-center group">
                    <span className="font-medium text-lg">Ocean</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-full text-left px-6 py-4 rounded-xl bg-white text-terracotta font-bold shadow-lg flex justify-between items-center">
                    <span className="text-lg">Africa</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}