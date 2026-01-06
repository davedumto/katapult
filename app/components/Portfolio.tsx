'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import DotGrid from './DotGrid';

const companies = [{
  name: 'Afrikamart',
  desc: 'Building the best B2B marketplace for smallholder farmers and food businesses.'
}, {
  name: 'Aquarech',
  desc: 'Transforming fish farmer livelihoods across Kenya through aquaculture innovations.'
}, {
  name: 'Complete Farmer',
  desc: 'Connects farmers to global food buyers and assists them in gaining a competitive edge.'
}, {
  name: 'Crop2Cash',
  desc: 'Digitalizes the value chain of food crops for agro-processors and farmers.'
}, {
  name: 'Elucid',
  desc: "Advance human rights in global supply chains by improving producers' health and livelihoods."
}, {
  name: 'Figorr',
  desc: 'Helps businesses reduce loss of perishables through real-time asset monitoring.'
}, {
  name: 'GrowAgric',
  desc: 'End-to-end solution providing small scale farmers with training and financing.'
}, {
  name: 'HerVest',
  desc: 'Inclusive fintech for women providing access to savings and impact investments.'
}, {
  name: 'Legendary Foods',
  desc: 'Delivering nutrition of meat at price & sustainability of plants using insect agriculture.'
}, {
  name: 'MooMe',
  desc: 'Innovative software and hardware to help monitor dairy farming production.'
}, {
  name: 'OKO Finance',
  desc: 'Leverages data to provide effective, affordable insurance to farmers.'
}, {
  name: 'Rural Farmers Hub',
  desc: 'Uses big data to assess crop and soil health for farming insights.'
}, {
  name: 'Sand To Green',
  desc: 'Cultivating desert into arable land managed by regenerative agriculture.'
}, {
  name: 'Sensegrass',
  desc: '360 farming solutions based on cutting edge technology including Nano-Satellite Mapping.'
}, {
  name: 'Spark',
  desc: 'Social finance app that makes transactions with your contacts better.'
}, {
  name: 'Vetsark',
  desc: 'Helps farmers and agribusinesses digitalise their data and get bank financing.'
}];

export function Portfolio() {
  const ref = useRef(null);
  const [showAll, setShowAll] = React.useState(false);
  
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const displayedCompanies = showAll ? companies : companies.slice(0, 6);

  return (
    <section id="portfolio" className="py-32 bg-harmattan relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-terracotta/50" />
            <div className="w-3 h-3 rounded-full border border-terracotta" />
            <div className="h-[1px] w-12 bg-terracotta/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-baobab mb-4"
          >
            Africa Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-baobab/60"
          >
            Meet our portfolio of highly scalable, highly impactful companies
          </motion.p>
        </div>

        {}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedCompanies.map((company, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8 }}
              className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-baobab/5 relative overflow-hidden"
            >
              {}
              <div className="absolute top-0 left-0 w-full h-1 bg-terracotta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="h-12 mb-6 flex items-center">
                {}
                <div className="h-full relative w-24">
                  <Image 
                    src={`/${idx + 1}${idx === 14 ? '.png' : '.jpg'}`} 
                    alt={`${company.name} logo`}
                    width={96}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-baobab mb-3 group-hover:text-terracotta transition-colors">
                {company.name}
              </h3>

              <p className="text-baobab/70 mb-8 line-clamp-3 text-sm leading-relaxed">
                {company.desc}
              </p>

              <button className="w-full py-3 rounded-xl border border-terracotta/30 text-terracotta font-medium text-sm flex items-center justify-center gap-2 group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group px-8 py-4 rounded-full bg-terracotta text-white font-semibold text-base flex items-center gap-3 hover:bg-terracotta/90 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {showAll ? (
              <>
                See Less
                <motion.svg
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </>
            ) : (
              <>
                See More ({companies.length - 6} more)
                <motion.svg
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}