'use client';

import React from 'react';
import { ArrowRight, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#E23E28] text-black py-10 px-6 md:px-12 flex flex-col justify-between min-h-screen font-sans overflow-x-hidden">
      {/* Top Section: Branding - Fixed Alignment */}
      <div className="w-full flex flex-col items-center text-center mt-10">
        <p className="text-sm md:text-xl font-bold tracking-[0.2em] mb-4 uppercase italic">
          Creative Production Company
        </p>
        <div className="w-full flex justify-center items-start">
          <h1 className="text-[14vw] md:text-[15rem] font-black italic tracking-tighter uppercase leading-[0.8] whitespace-nowrap">
            FRESHMAN<span className="text-[4vw] md:text-4xl align-top ml-1">®</span>
          </h1>
        </div>
      </div>

      {/* Middle Section: Newsletter */}
      <div className="max-w-2xl mx-auto text-center my-12">
        <h2 className="text-2xl md:text-5xl font-serif italic leading-tight mb-8">
          Keep in the loop. Be the first to know about our latest work. Subscribe to our newsletter.
        </h2>
        
        <div className="relative mt-10">
          <input 
            type="email" 
            placeholder="Your email address..." 
            className="w-full bg-transparent border-b-2 border-black py-4 text-xl md:text-2xl focus:outline-none placeholder:text-black/50 font-serif italic"
          />
          <button 
            className="absolute right-0 bottom-4 hover:translate-x-2 transition-transform" 
            aria-label="Subscribe"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>

      {/* Bottom Section: Icons, Contacts & Copyright */}
      <div className="w-full pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Social Media Icons & Phone */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 order-2 md:order-1">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin size={24} />
          </a>
          <a href="mailto:mukherjeearnav60@gmail.com" className="hover:scale-110 transition-transform">
            <Mail size={24} />
          </a>
          <div className="flex items-center gap-2 font-bold text-sm md:text-base whitespace-nowrap">
            <Phone size={20} />
            <span>9999999999</span>
          </div>
        </div>

        {/* Center: Legal */}
        <div className="text-sm tracking-normal font-serif italic order-1 md:order-2 text-center">
          2026© FRESHMAN STUDIOS
        </div>

        {/* Right: Back to Top */}
        <div className="hidden md:block text-xs font-bold uppercase tracking-widest order-3">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="hover:opacity-50 transition-opacity"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;