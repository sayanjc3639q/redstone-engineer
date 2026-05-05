import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="relative pt-32 pb-24 px-8 min-h-[819px] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Technical Background Grid / Glow */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4500]/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,69,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,69,0,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-[#FF4500]/30 bg-[#FF4500]/5 text-[#FF4500] text-xs font-label-caps uppercase tracking-widest rounded-full">
          <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse"></span>
          System Online: v2.4.0
        </div>
        <h1 className="font-h1 text-h1 text-white mb-6 leading-none">
          Mastering large-scale builds & <br className="hidden md:block"/><span className="text-[#FF4500]">playful experiments</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Big projects live on their own domains. Small sparks live on subdomains — all curated here in the Redstone terminal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a className="border border-[#FF4500] text-white px-10 py-4 font-label-caps tracking-widest uppercase hover:bg-[#FF4500] transition-all duration-500 glow-red" href="#monoliths">
            Explore Ecosystem
          </a>
          <a className="border border-white/20 text-white/70 px-10 py-4 font-label-caps tracking-widest uppercase hover:bg-white/5 transition-all duration-300" href="#experiments">
            View Subdomains
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
