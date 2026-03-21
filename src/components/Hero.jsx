import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-windy-amber/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-windy-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-windy-amber/10 border border-windy-amber/20 text-windy-amber text-sm font-medium mb-8">
            <span>🌍</span> Powered by 3,100+ specialist translation models
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            Travel the World.<br />
            <span className="gradient-text">Speak Every Language.</span><br />
            In Your Voice.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            AI-powered translation, tour guides, local deals, and trip planning — all in one app. 
            No internet required. Your phone becomes your interpreter, concierge, and local expert.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#pricing" className="px-8 py-4 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold rounded-xl text-lg hover:scale-105 transition-transform cta-glow">
            Start Your Journey →
          </a>
          <a href="#features" className="px-8 py-4 border-2 border-windy-amber/40 text-windy-amber font-bold rounded-xl text-lg hover:bg-windy-amber/10 transition-all">
            See Features
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          {[
            { emoji: '🗣️', text: '99+ Languages' },
            { emoji: '✈️', text: 'Works Offline' },
            { emoji: '🎤', text: 'Your Voice Clone' },
            { emoji: '🗺️', text: 'AI Tour Guides' },
            { emoji: '💰', text: 'Local Deals' },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span>{item.emoji}</span> {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
