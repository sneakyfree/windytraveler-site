import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Windy Traveler has no standalone app — it runs as the /translate route
// inside Windy Word.
const APP_URL = 'https://app.windyword.ai/translate';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Bundles', href: '#bundles' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-windy-dark/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <span className="text-xl font-bold text-white">Windy<span className="text-windy-amber">Traveler</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.name} href={l.href} className="text-sm text-gray-400 hover:text-windy-amber transition-colors">{l.name}</a>
            ))}
            <a href={APP_URL} className="text-sm text-gray-400 hover:text-windy-amber transition-colors">
              Open in Windy Word
            </a>
            <a href="#pricing" className="px-5 py-2.5 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold rounded-lg text-sm hover:scale-105 transition-transform">
              Start Traveling
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden">
              <div className="py-4 flex flex-col gap-4">
                {links.map(l => (
                  <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-gray-400 hover:text-windy-amber">{l.name}</a>
                ))}
                <a href={APP_URL} onClick={() => setOpen(false)} className="text-gray-400 hover:text-windy-amber">Open in Windy Word</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
