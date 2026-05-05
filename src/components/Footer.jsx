import React from 'react';
import { useLinks } from '../hooks/useLinks';

const Footer = () => {
  const { links } = useLinks();

  const defaultLinks = [
    { title: 'Documentation', url: '#' },
    { title: 'System Status', url: '#' },
    { title: 'Privacy Protocol', url: '#' },
    { title: 'Terminal', url: '#' }
  ];

  const displayLinks = links.length > 0 ? links : defaultLinks;

  return (
    <footer className="bg-[#0A0A0A] w-full border-t border-[#FF4500]/20 py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-black text-[#FF4500] font-h1 uppercase tracking-widest">
            redstoneengineer.site
          </div>
          <p className="text-white/40 text-xs font-h1 tracking-widest uppercase">
            All subdomains are live experiments — part of the Redstone universe.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-h1 text-sm uppercase tracking-widest">
          {displayLinks.map((link, index) => (
            <a 
              key={link.id || index} 
              className="text-white/40 hover:text-[#FFBF00] transition-colors" 
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="text-white/30 text-[10px] font-h1 uppercase tracking-[0.2em]">
          © 2024 Redstone Engineer Hub. All circuits operational.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
