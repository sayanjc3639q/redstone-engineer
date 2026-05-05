import React from 'react';
import { motion } from 'framer-motion';

const monoliths = [
  {
    id: 1,
    title: "Titan-Engine.io",
    description: "A massive high-throughput data processing engine designed for real-time analytics across distributed clusters.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbE9983juZB9eoJ_1uY-9kapNW5LWhCG6fJgz-nQCwiuDn1dV-n6kJzomDE2IlB6s9POeGKWguBwN-JBrwcsNv4uS8BMfzlCv4aMOSFj9DAYb8h_0dX8BWbIgLZ48wKgH2SidWKwgyKPnecaZ_VM7qryfHmNUIpwXLtOa0yKcSqiL7NS2TGwGHKRXgJee9t6wGPopdXpaT39lORjN3PCThTTB6gUX5yEiAXtxSQ-wdeNIyXQWodTU82oeMwkrBqnbzSr_HSBJeihY",
    icon: "domain",
  },
  {
    id: 2,
    title: "CoreSystems.tech",
    description: "A proprietary framework for building low-latency micro-frontends with integrated redstone-logic automation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9azYxnfr4UrVdHY1KW5Z_anktn9V8o0ulNizn9vAzySbLGG0Q-BDYBk0kVaSA68DaFX4-xq9sKcKPRoWDwOz0n5OYzoDezI12_E1rsGof6Ov-m-5ZuYTtaWkpc2SAYKLKug4mP5d8_bpw6AfLGZouRf6DFla1WNAxBxC_77hVOvsGfRdPSE_s-03P64QbDyH8gPXkBBkZuyXLkQ2XkGNfFXMOPRQWk9qED7PkFDYcg6FSXzlcXBDzIItkJjlJYwes9HMXtfW7Mqo",
    icon: "hub",
  },
  {
    id: 3,
    title: "GlobalLink.net",
    description: "A decentralized node network infrastructure connecting regional data centers through a secure encrypted tunnel.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYyFRSRFQd77beIxPp783lkagN_2bhCHdGL_p9o3q5GWWDXHqCbgoNGTCb7LdbVc4hdFOGVMdmORKYKgiirSI94TMdwMcduci9QmDzmooKdxmDy9aRrvMYkiVWJkJ72vrrsRtHZgdbpBApicRHMOt9cSvwOTzMLp1A77eKvwTaeTVR7ea7KZRRlBRPVZwDsxOl2dku8GeMI-CGq2peMUh-omhgI51ac06WzFDWp1s4eP-CiIdPjCpI5dmlpWUYbb-jhh26tO3aWcY",
    icon: "globe",
  }
];

const Monoliths = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="monoliths">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-h2 text-h2 text-white">⚡ Monoliths · <span className="text-white/40">Dedicated Domains</span></h2>
        <div className="flex-grow circuit-line"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {monoliths.map((monolith) => (
          <motion.div 
            key={monolith.id}
            whileHover={{ y: -10 }}
            className="glass-panel p-8 group relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-[#FF4500]">{monolith.icon}</span>
            </div>
            <div className="mb-6 relative h-48 overflow-hidden rounded-sm border border-white/10">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                src={monolith.image} 
                alt={monolith.title}
              />
            </div>
            <h3 className="font-h3 text-h3 text-white mb-3">{monolith.title}</h3>
            <p className="text-on-surface-variant mb-8 flex-grow">{monolith.description}</p>
            <a className="inline-flex items-center gap-2 text-[#FF4500] font-label-caps uppercase tracking-widest group-hover:translate-x-2 transition-transform" href="#">
              Visit Project <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Monoliths;
