import React from 'react';
import { motion } from 'framer-motion';

const experiments = [
  {
    id: 1,
    title: "PixelForge",
    subdomain: "pixelforge.redstoneengineer.site",
    description: "A lightweight procedural texture generator for technical 3D models.",
    tags: ["Rust", "Wasm"],
    icon: "auto_fix_high"
  },
  {
    id: 2,
    title: "FluxDashboard",
    subdomain: "flux.redstoneengineer.site",
    description: "Real-time metrics visualizer for stream processing pipelines.",
    tags: ["React", "D3.js"],
    icon: "query_stats"
  },
  {
    id: 3,
    title: "Redstone Tools",
    subdomain: "tools.redstoneengineer.site",
    description: "A collection of encoders, decoders, and logic gate simulators.",
    tags: ["Vue", "Terminal"],
    icon: "build"
  },
  {
    id: 4,
    title: "Voxel Playground",
    subdomain: "voxel.redstoneengineer.site",
    description: "Browser-based voxel editor for quick isometric engineering sketches.",
    tags: ["Three.js", "WebGPU"],
    icon: "view_in_ar"
  },
  {
    id: 5,
    title: "Command Studio",
    subdomain: "cmd.redstoneengineer.site",
    description: "Interactive command-line interface for remote project management.",
    tags: ["Go", "SSH"],
    icon: "terminal"
  },
  {
    id: 6,
    title: "Mini Game Hub",
    subdomain: "arcade.redstoneengineer.site",
    description: "Experimental physics-based mini-games built with modern engines.",
    tags: ["Phaser", "Socket.io"],
    icon: "sports_esports"
  }
];

const Experiments = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5 relative" id="experiments">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-h2 text-h2 text-white mb-2">🌀 Experiments · <span className="text-secondary-container">Subdomain Fleet</span></h2>
          <p className="text-on-surface-variant font-body-lg">Every small project gets its own subdomain under redstoneengineer.site</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp) => (
            <motion.div 
              key={exp.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 border border-white/10 bg-white/5 hover:border-[#FFBF00]/40 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#FFBF00] material-symbols-outlined">{exp.icon}</span>
                <div className="bg-[#FFBF00]/10 text-[#FFBF00] text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">.site</div>
              </div>
              <h4 className="font-h3 text-xl text-white mb-1">{exp.title}</h4>
              <p className="text-xs font-mono text-[#FFBF00] mb-3">{exp.subdomain}</p>
              <p className="text-on-surface-variant text-sm mb-4">{exp.description}</p>
              <div className="flex gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-[10px] border border-white/10 px-2 py-0.5 text-white/40 uppercase">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
