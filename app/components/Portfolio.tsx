'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const companies = [
  {
    name: 'Afrikamart',
    desc: 'Building the best B2B marketplace for smallholder farmers and food businesses.',
    category: 'Marketplace',
    logo: '/1.jpg'
  },
  {
    name: 'Aquarech',
    desc: 'Transforming fish farmer livelihoods across Kenya through aquaculture innovations.',
    category: 'Aquaculture',
    logo: '/2.jpg'
  },
  {
    name: 'Complete Farmer',
    desc: 'Connects farmers to global food buyers and assists them in gaining a competitive edge.',
    category: 'Supply Chain',
    logo: '/3.jpg'
  },
  {
    name: 'Crop2Cash',
    desc: 'Digitalizes the value chain of food crops for agro-processors and farmers.',
    category: 'Digital Platform',
    logo: '/4.jpg'
  },
  {
    name: 'Elucid',
    desc: "Advance human rights in global supply chains by improving producers' health and livelihoods.",
    category: 'Social Impact',
    logo: '/5.jpg'
  },
  {
    name: 'Figorr',
    desc: 'Helps businesses reduce loss of perishables through real-time asset monitoring.',
    category: 'IoT Solutions',
    logo: '/6.jpg'
  },
  {
    name: 'GrowAgric',
    desc: 'End-to-end solution providing small scale farmers with training and financing.',
    category: 'Fintech',
    logo: '/7.jpg'
  },
  {
    name: 'HerVest',
    desc: 'Inclusive fintech for women providing access to savings and impact investments.',
    category: 'Women Fintech',
    logo: '/8.jpg'
  },
  {
    name: 'Legendary Foods',
    desc: 'Delivering nutrition of meat at price & sustainability of plants using insect agriculture.',
    category: 'Alternative Protein',
    logo: '/9.jpg'
  },
  {
    name: 'Rural Farmers Hub',
    desc: 'Uses big data to assess crop and soil health for farming insights.',
    category: 'Data Analytics',
    logo: '/10.jpg'
  },
  {
    name: 'Sand To Green',
    desc: 'Cultivating desert into arable land managed by regenerative agriculture.',
    category: 'Land Restoration',
    logo: '/11.jpg'
  },
  {
    name: 'Sensegrass',
    desc: '360 farming solutions based on cutting edge technology including Nano-Satellite Mapping.',
    category: 'Satellite Tech',
    logo: '/12.jpg'
  }
];

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const displayedCompanies = showAll ? companies : companies.slice(0, 6);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-stone-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/African Savanna Sunrise Zimbabwe.jpg"
          alt="African Savanna Sunrise"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6">
            Africa Portfolio
          </h2>
          <p className="text-white/80 text-lg md:text-xl">
            Meet our portfolio of highly scalable, highly impactful companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {displayedCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-sm border border-white/20 hover:border-amber-500 transition-all group shadow-xl hover:shadow-2xl"
            >
              <div className="relative w-full h-24 md:h-32 mb-4 md:mb-6">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-stone-900 mb-3 md:mb-4">{company.name}</h3>
              <p className="text-stone-600 leading-relaxed mb-4 md:mb-6 text-xs md:text-sm">
                {company.desc}
              </p>
              <button className="text-stone-900 font-semibold text-xs md:text-sm underline group-hover:no-underline group-hover:text-amber-600 transition-all">
                Visit Website →
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-white text-sm md:text-base font-semibold underline hover:text-amber-400 hover:no-underline transition-all"
          >
            {showAll ? 'Show Less' : `See More (${companies.length - 6} more)`}
          </button>
        </div>
      </div>
    </section>
  );
}