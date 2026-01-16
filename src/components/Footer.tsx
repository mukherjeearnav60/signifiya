"use client";
import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Video } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#E23E33] text-black px-6 py-12 md:px-12 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo Branding */}
        <div className="mb-12">
          <p className="font-serif italic text-sm mb-2 uppercase tracking-tight">Creative Production Company</p>
          <h1 className="text-7xl md:text-[13rem] font-black italic tracking-tighter uppercase font-sans leading-[0.8]">
            freshman<span className="text-2xl md:text-4xl align-top ml-1">®</span>
          </h1>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md w-full mb-20">
          <p className="font-serif text-lg md:text-xl leading-snug mb-8">
            Keep in the loop. Be the first to know about our latest work. Subscribe to our newsletter.
          </p>
          
          <form onSubmit={handleSubmit} className="relative w-full border-b-2 border-black pb-3">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..." 
              className="w-full bg-transparent border-none outline-none placeholder:text-black/50 text-lg italic font-serif"
            />
            <button type="submit" className="absolute right-0 bottom-3 hover:scale-125 transition-transform">
              <ArrowRight size={28} />
            </button>
          </form>
        </div>

        {/* Bottom Metadata */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-[11px] font-sans font-bold uppercase tracking-widest">
          
          {/* Socials Column */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <span className="mb-3 opacity-60 lowercase font-serif italic tracking-normal">(socials)</span>
            <div className="flex gap-5">
              <a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">
                <Instagram size={14} /> IG
              </a>
              <a href="https://vimeo.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">
                <Video size={14} /> VI
              </a>
              <a href="https://facebook.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">
                <Facebook size={14} /> FB
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 text-sm tracking-normal font-serif italic">
            2026© Real Always Wins
          </div>

          <div className="flex flex-col items-center md:items-end order-3">
            <span className="mb-3 opacity-60 lowercase font-serif italic tracking-normal">(contact)</span>
            <a href="mailto:INFO@FRESHMAN.TV" className="hover:underline underline-offset-4">
              INFO@FRESHMAN.TV
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;