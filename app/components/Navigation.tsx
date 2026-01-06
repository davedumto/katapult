'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import gsap from 'gsap';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 20;
          
          if (shouldBeScrolled !== scrolled) {
            setScrolled(shouldBeScrolled);

            if (containerRef.current && navLinksRef.current) {
              const tl = gsap.timeline({
                defaults: { duration: 0.4, ease: 'power2.out' }
              });

              if (shouldBeScrolled) {
                
                tl.to(navRef.current, { paddingLeft: 0, paddingRight: 0 }, 0)
                  .to(containerRef.current, {
                    maxWidth: '100%',
                    borderRadius: '0px',
                    marginTop: '0px',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                  }, 0)
                  .to(navLinksRef.current, { opacity: 0, pointerEvents: 'none' }, 0);
              } else {
                
                tl.to(navRef.current, { paddingLeft: '1.5rem', paddingRight: '1.5rem' }, 0)
                  .to(containerRef.current, {
                    maxWidth: '80rem',
                    borderRadius: '9999px',
                    marginTop: '1rem',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                  }, 0)
                  .to(navLinksRef.current, { opacity: 1, pointerEvents: 'auto' }, 0);
              }
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
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
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12">
        <div 
          ref={containerRef}
          className={cn(
            'mx-auto flex justify-between items-center',
            scrolled 
              ? 'max-w-full bg-white/95 backdrop-blur-md shadow-lg px-6 md:px-12 py-3 rounded-none mt-0' 
              : 'max-w-7xl bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mt-4'
          )}
        >
          {}
          <a href="#" className="flex items-center gap-2 z-50 relative text-terracotta">
            {}
            <svg aria-hidden="true" className="katapult-logo w-32 h-auto md:hidden" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="178" height="79" viewBox="0 0 178 79">
              <defs>
                <path id="a" d="M0 0L20.567 0 20.567 20.611 0 20.611z"></path>
                <path id="c" d="M0 0L20.567 0 20.567 20.613 0 20.613z"></path>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(-80 -48) translate(80 48)">
                  <g transform="translate(0 57.783)">
                    <path fill="currentColor" d="M10.283 17.157c-3.77 0-6.837-3.074-6.837-6.851 0-3.779 3.068-6.853 6.837-6.853 3.77 0 6.838 3.074 6.838 6.853 0 3.777-3.068 6.851-6.838 6.851m0-17.157C4.613 0 0 4.623 0 10.306 0 15.987 4.612 20.61 10.283 20.61c5.671 0 10.284-4.624 10.284-10.305C20.567 4.623 15.954 0 10.283 0"></path>
                  </g>
                  <path fill="currentColor" d="M10.283 3.454c3.77 0 6.838 3.074 6.838 6.852 0 3.78-3.068 6.853-6.838 6.853s-6.837-3.074-6.837-6.853c0-3.778 3.068-6.852 6.837-6.852m0 17.159c5.671 0 10.284-4.625 10.284-10.307S15.954 0 10.283 0C4.613 0 0 4.624 0 10.306c0 5.682 4.612 10.307 10.283 10.307M37.94 46.117c-3.77 0-6.838-3.074-6.838-6.852 0-3.78 3.068-6.853 6.837-6.853 3.771 0 6.838 3.073 6.838 6.853 0 3.778-3.067 6.852-6.838 6.852m0-17.159c-5.67 0-10.283 4.623-10.283 10.307 0 5.682 4.612 10.306 10.283 10.306 5.671 0 10.284-4.624 10.284-10.306 0-5.684-4.613-10.307-10.284-10.307M37.94 17.159c-3.77 0-6.838-3.075-6.838-6.853 0-3.779 3.068-6.852 6.837-6.852 3.771 0 6.838 3.073 6.838 6.852 0 3.778-3.067 6.853-6.838 6.853M10.284 46.116c-3.77 0-6.837-3.073-6.837-6.851 0-3.779 3.066-6.853 6.837-6.853 3.77 0 6.837 3.074 6.837 6.853 0 3.778-3.068 6.851-6.837 6.851m27.655 15.255c3.771 0 6.838 3.074 6.838 6.853 0 3.778-3.067 6.851-6.838 6.851-3.77 0-6.837-3.073-6.837-6.851 0-3.779 3.068-6.853 6.837-6.853M37.94 0c-5.67 0-10.283 4.623-10.283 10.306 0 2.22.704 4.277 1.899 5.96L15.479 30.374c-1.527-.9-3.301-1.415-5.195-1.415C4.613 28.959 0 33.582 0 39.265 0 44.948 4.613 49.57 10.284 49.57c1.894 0 3.668-.515 5.195-1.414l14.076 14.106c-1.195 1.684-1.9 3.742-1.9 5.962 0 5.681 4.613 10.305 10.284 10.305s10.284-4.624 10.284-10.305c0-5.683-4.613-10.306-10.284-10.306-2.214 0-4.268.704-5.947 1.903L18.125 45.924c1.522-1.798 2.442-4.123 2.442-6.66 0-2.536-.92-4.86-2.442-6.659L31.992 18.71c1.68 1.197 3.733 1.903 5.947 1.903 5.671 0 10.284-4.624 10.284-10.307C48.223 4.623 43.61 0 37.939 0M81.453 28.647L78.018 28.647 69.662 38.059 78.757 48.837 82.194 48.837 72.95 38.059z"></path>
                  <path fill="currentColor" d="M66.788 48.837L69.602 48.837 69.602 28.648 66.788 28.648zM93.63 42.424c0 2.732-1.482 4.632-3.883 4.632-1.688 0-2.725-.623-2.725-2.02v-1.334c0-.863.148-1.367 1.245-1.456l5.362-.505v.683zm2.605-3.92c0-3.562-2.458-5.165-5.717-5.165-3.23 0-5.807 2.02-5.807 4.868h2.666c0-1.929 1.245-2.731 3.111-2.731 1.867 0 3.141.653 3.141 2.998v1.219l-4.918.445c-2.992.267-4.502 2.167-4.502 4.543 0 1.187.473 2.345 1.243 3.146.86.892 2.133 1.367 3.615 1.367 2.251 0 3.91-1.01 4.74-3.147h.118l.06 2.79h4.503v-2.286h-2.253v-8.046zM105.212 28.647L102.575 28.647 102.575 33.696 100.028 33.696 100.028 35.982 102.575 35.982 102.575 48.837 108.678 48.837 108.678 46.552 105.212 46.552 105.212 35.982 108.678 35.982 108.678 33.696 105.212 33.696zM120.854 42.424c0 2.732-1.48 4.632-3.88 4.632-1.689 0-2.726-.623-2.726-2.02v-1.334c0-.863.148-1.367 1.244-1.456l5.362-.505v.683zm2.609-3.92c0-3.562-2.461-5.165-5.72-5.165-3.229 0-5.806 2.02-5.806 4.868h2.666c0-1.929 1.243-2.731 3.111-2.731 1.867 0 3.14.653 3.14 2.998v1.219l-4.917.445c-2.992.267-4.504 2.167-4.504 4.543 0 1.187.475 2.345 1.245 3.146.858.892 2.132 1.367 3.613 1.367 2.252 0 3.911-1.01 4.741-3.147h.12l.057 2.79h4.505v-2.286h-2.251v-8.046zM139.37 43.612c0 2.048-1.63 3.443-3.85 3.443-2.668 0-4.148-1.899-4.148-4.512v-2.554c0-2.612 1.48-4.513 4.147-4.513 2.221 0 3.85 1.396 3.85 3.445v4.691zm-3.17-10.273c-2.281 0-3.882 1.01-4.828 2.82v-2.464h-2.668v20.19h2.668v-7.513c.946 1.812 2.547 2.822 4.828 2.822 4.059 0 5.984-3.534 5.984-7.927 0-4.395-1.925-7.928-5.984-7.928zM155.515 42.543c0 2.644-1.422 4.513-3.675 4.513-2.25 0-2.962-1.396-2.962-3.563v-9.798h-2.666V43.79c0 3.89 2.104 5.404 4.889 5.404 2.281 0 3.585-1.07 4.414-2.85v2.494h2.667V33.695h-2.667v8.848zM163.158 48.837L165.824 48.837 165.824 28.648 163.158 28.648zM178 35.981L178 33.695 174.534 33.695 174.534 28.647 171.897 28.647 171.897 33.695 169.35 33.695 169.35 35.981 171.897 35.981 171.897 48.838 178 48.838 178 46.551 174.534 46.551 174.534 35.981z"></path>
                </g>
              </g>
            </svg>

            {}
            <svg aria-hidden="true" className="katapult-logo w-32 h-auto hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 79" style={{fill: 'currentColor'}}>
              <path className="fill-terracotta" d="M10.3,57.8C4.6,57.8,0,62.4,0,68.1c0,5.7,4.6,10.3,10.3,10.3c5.7,0,10.3-4.6,10.3-10.3
                C20.6,62.4,16,57.8,10.3,57.8z M10.3,75c-3.8,0-6.8-3.1-6.8-6.9c0-3.8,3.1-6.9,6.8-6.9c3.8,0,6.8,3.1,6.8,6.9
                C17.1,71.9,14.1,75,10.3,75z">
              </path>
              <path className="fill-terracotta" d="M10.3,20.6c5.7,0,10.3-4.6,10.3-10.3C20.6,4.6,16,0,10.3,0C4.6,0,0,4.6,0,10.3C0,16,4.6,20.6,10.3,20.6z
                 M10.3,3.5c3.8,0,6.8,3.1,6.8,6.9c0,3.8-3.1,6.9-6.8,6.9c-3.8,0-6.8-3.1-6.8-6.9C3.4,6.5,6.5,3.5,10.3,3.5z">
              </path>
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
                c-3.7,0-5.9,2.9-5.9,7.3c0,4.1,1.9,7.1,5.9,7.1c2.8,0,5.3-1.5,5.6-4.9h-2.4C116.1,59,114.8,60,113,60z">
              </path>
            </svg>
          </a>

          {}
          <div className="flex items-center gap-8">
            {}
            <nav 
              ref={navLinksRef}
              className={cn(
                'hidden md:flex items-center gap-8',
                scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
              )}
            >
              {['About', 'Portfolio', 'Team', 'Contact'].map(link => <a key={link} href={`#${link.toLowerCase()}`} className="text-terracotta hover:text-baobab transition-colors font-medium relative group">
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-baobab transition-all group-hover:w-full" />
                </a>)}
            </nav>

            {}
            <button onClick={() => setIsOpen(!isOpen)} className="z-50 relative p-2 hover:bg-terracotta/10 rounded-lg transition-colors" aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6 text-terracotta" /> : <Menu className="w-6 h-6 text-terracotta" />}
            </button>
          </div>
        </div>
      </nav>

      {}
      <AnimatePresence>
        {isOpen && <motion.div initial="closed" animate="open" exit="closed" variants={menuVariants} className="fixed inset-0 z-[60] flex flex-col md:flex-row bg-harmattan">
            {}
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 z-50 p-2 hover:bg-baobab/5 rounded-full transition-colors">
              <X className="w-8 h-8 text-baobab" />
            </button>

            {}
            <div className="w-full md:w-[70%] p-6 md:p-16 flex items-center justify-center">
              <div className="max-w-4xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {}
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

                  {}
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

                  {}
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

            {}
            <div className="hidden md:flex w-[30%] bg-terracotta text-harmattan p-16 flex-col justify-center relative overflow-hidden">
              {}
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