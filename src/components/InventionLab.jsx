import React from 'react';

const InventionLab = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="lab">
      <div className="glass-panel p-12 relative overflow-hidden border-dashed border-2 border-[#FF4500]/20 flex flex-col items-center text-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FF4500 0, #FF4500 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
        <div className="mb-8">
          <span className="material-symbols-outlined text-7xl text-white/10 animate-pulse">science</span>
        </div>
        <h2 className="font-h2 text-h2 text-white mb-4">Invention Lab</h2>
        <p className="text-on-surface-variant max-w-lg mb-8">
          This is a technical experiment slot. Future innovations, quantum-logic prototypes, and neural network bridges are currently in incubation.
        </p>
        <div className="flex items-center gap-4 bg-black/40 px-6 py-3 rounded-sm border border-white/10">
          <span className="text-[#FF4500] font-mono text-sm tracking-widest uppercase">Status: </span>
          <span className="text-white/40 font-mono text-sm tracking-widest uppercase italic">Coming Soon</span>
          <div className="w-12 h-1 bg-white/5 overflow-hidden rounded-full relative">
            <div className="absolute inset-0 bg-[#FF4500] w-1/3 animate-ping opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventionLab;
