import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#121212]/70 backdrop-blur-xl fixed top-0 w-full border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center px-8 h-16 z-50">
      <div className="text-2xl font-bold tracking-tighter text-[#FF4500] drop-shadow-[0_0_10px_rgba(255,69,0,0.4)] font-h1">
        Redstone Engineer
      </div>
      <div className="hidden md:flex gap-8 items-center font-label-caps tracking-tight">
        <a className="text-[#FF4500] border-b-2 border-[#FF4500] pb-1" href="#">Ecosystem</a>
        <a className="text-white/60 hover:text-white transition-colors" href="#monoliths">Monoliths</a>
        <a className="text-white/60 hover:text-white transition-colors" href="#experiments">Experiments</a>
        <a className="text-white/60 hover:text-white transition-colors" href="#lab">Lab</a>
      </div>
      <button className="border border-[#FF4500] text-[#FF4500] px-6 py-1.5 rounded-sm hover:bg-[#FF4500] hover:text-white transition-all duration-300 scale-95 active:scale-90 font-label-caps uppercase tracking-widest text-xs font-bold">
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
