import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-transparent w-full">
        <nav className="relative flex items-center px-10 md:px-20 py-5 w-full">
        {/* Vertical Side Lines */}
        <div className="absolute left-0 top-0 h-full w-[1px]">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line 
              x1="0" y1="0" x2="0" y2="100%" 
              stroke="#E0E0E0" 
              strokeWidth="2" 
              strokeDasharray="2, 4" 
            />
          </svg>
        </div>
        <div className="absolute right-0 top-0 h-full w-[1px]">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line 
              x1="0" y1="0" x2="0" y2="100%" 
              stroke="#E0E0E0" 
              strokeWidth="2" 
              strokeDasharray="2, 4" 
            />
          </svg>
        </div>

{/* Logo Section */}
          <a href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80" aria-label="home page">
              <img 
                src="/logo.png" 
                alt="Persen Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
              <div className="flex items-center gap-4">
                <span className="text-[20px] font-semibold tracking-[-0.03em] leading-none">
                  Persen
                </span>
                <span className="hidden md:inline-block text-[14px] font-medium text-zinc-400 border-l border-zinc-200 pl-4 py-0.5">
                  The Simulation Layer for Sales
                </span>
              </div>
            </a>


      </nav>

      {/* Bottom Horizontal Border */}
      <div className="w-full h-[1px] px-0">
        <svg width="100%" height="1" preserveAspectRatio="none">
          <line 
            x1="0" y1="0" x2="100%" y2="0" 
            stroke="#E0E0E0" 
            strokeWidth="2" 
            strokeDasharray="4, 2" 
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;