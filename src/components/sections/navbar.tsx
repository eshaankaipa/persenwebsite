import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo Section */}
        <a className="relative w-16 h-6 flex items-center" href="/">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2012baa5-1d76-425f-8a62-80a20744d0c7-a37-ai/assets/svgs/a37-Logo_a37_Black-1.svg"
            alt="a37 Logo"
            width={64}
            height={24}
            className="object-contain object-left select-none"
            priority
          />
        </a>

        {/* Navigation Links and CTA */}
        <div className="hidden md:flex items-center gap-8 text-[14px] uppercase tracking-[0.1em] font-medium">
          <a 
            href="#approach" 
            className="text-black hover:text-zinc-600 transition-all duration-200"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Approach
          </a>
          <a 
            href="#use-cases" 
            className="text-black hover:text-zinc-600 transition-all duration-200"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Use Cases
          </a>
          <a 
            href="#contact" 
            className="bg-black text-white px-[14px] py-[7px] hover:bg-zinc-800 transition-colors duration-200 font-bold tracking-[0.1em]"
            style={{ fontSize: '14px', fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Get Access
          </a>
        </div>

        {/* Mobile Menu Toggle (Visible only on small screens) */}
        <button 
          className="md:hidden p-2 hover:bg-black/5 rounded transition-colors" 
          aria-label="Toggle menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;