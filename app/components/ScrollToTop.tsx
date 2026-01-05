'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <AnimatePresence>
      {isVisible && <motion.button initial={{
      opacity: 0,
      scale: 0.5
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 0.5
    }} onClick={scrollToTop} whileHover={{
      y: -4,
      boxShadow: '0 10px 25px -5px rgba(199, 91, 74, 0.4)'
    }} className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer" aria-label="Scroll to top">
          <ArrowUp className="w-6 h-6" />
        </motion.button>}
    </AnimatePresence>;
}