"use client";

import React from 'react';
import Image from 'next/image';

const TeamInstitutions = () => {
  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Box", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Box%2C_Inc._logo.svg" },
    { name: "Astronomer", logo: "https://avatars.githubusercontent.com/u/12449437?s=200&v=4" },
    { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Wharton", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Wharton_School.svg" },
    { name: "Harvard", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg" },
    { name: "Berkeley", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg" },
    { name: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg" },
  ];

  const allCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="bg-white border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-12">
        <div className="max-w-2xl">
<h2 className="text-[3.5rem] md:text-[4rem] font-medium leading-[1.1] tracking-tight text-black mb-6 font-sans">
                Backed by industry leaders and sales intelligence experts
              </h2>
        </div>
      </div>

      <div className="border-t border-black/5 pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-10">
<p className="text-xs text-white font-medium uppercase tracking-[0.2em]">
                Backed by
              </p>
        </div>
        
        <div className="relative w-full overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex animate-scroll-left items-center">
            {allCompanies.map((company, index) => (
              <div 
                key={index}
                className="flex-shrink-0 px-8 md:px-14 py-4 flex items-center justify-center"
              >
                <div className="relative h-[70px] md:h-[99px] w-40 md:w-[229px] grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default TeamInstitutions;