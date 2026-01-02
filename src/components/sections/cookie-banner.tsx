"use client";

import React, { useState, useEffect } from "react";

/**
 * CookieBanner component
 * A sticky minimalist banner at the bottom of the page.
 * Integrated into the dashed line design system.
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const handleEssentialsOnly = () => {
    localStorage.setItem("cookie-consent", "essentials");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md site-cookie-banner">
      {/* Top horizontal dashed line */}
      <div className="relative w-full h-[1.5px] overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="dashed-pattern-cookie-top"
              width="4"
              height="2"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="1"
                x2="2"
                y2="1"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="1" fill="url(#dashed-pattern-cookie-top)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[100vw] px-10">
        <div className="relative grid grid-cols-4 items-center py-6">
          {/* Vertical dashed lines for the grid system alignment */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px]">
            <svg className="w-full h-full">
              <defs>
                <pattern
                  id="dashed-pattern-cookie-v-1"
                  width="1"
                  height="4"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="2"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="1" height="100%" fill="url(#dashed-pattern-cookie-v-1)" />
            </svg>
          </div>

          <div className="absolute left-1/4 top-0 bottom-0 w-[1px]">
            <svg className="w-full h-full">
              <rect width="1" height="100%" fill="url(#dashed-pattern-cookie-v-1)" />
            </svg>
          </div>

          <div className="absolute left-3/4 top-0 bottom-0 w-[1px]">
            <svg className="w-full h-full">
              <rect width="1" height="100%" fill="url(#dashed-pattern-cookie-v-1)" />
            </svg>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-[1px]">
             <svg className="w-full h-full">
              <rect width="1" height="100%" fill="url(#dashed-pattern-cookie-v-1)" />
            </svg>
          </div>

          {/* Content */}
          <div className="col-span-3 pl-10">
            <p className="text-[#666666] font-sans text-[16px] leading-[1.4] tracking-tight">
              We use cookies for security and analytics to improve your experience.
            </p>
          </div>

          <div className="col-span-1 pr-10 flex justify-end items-center gap-6">
            <button
              onClick={handleAcceptAll}
              className="text-foreground text-[16px] font-medium transition-opacity hover:opacity-70 whitespace-nowrap focus:outline-none"
            >
              Accept all
            </button>
            <button
              onClick={handleEssentialsOnly}
              className="text-[#666666] text-[16px] font-medium transition-opacity hover:opacity-70 whitespace-nowrap focus:outline-none"
            >
              Essentials only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}