import { motion } from 'framer-motion';

const steps = [
  { num: '01', emoji: '📱', title: 'Download', description: 'Get WindyTraveler on any device. Pick your destination languages. Download offline packs in seconds.' },
  { num: '02', emoji: '🌏', title: 'Pick Your Destination', description: 'Tell WindyTraveler where you\'re going. It loads language packs, local guides, deals, and cultural tips automatically.' },
  { num: '03', emoji: '🚀', title: 'Go', description: 'Your phone is now your interpreter, concierge, and local expert. Speak naturally — WindyTraveler handles the rest.' },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-windy-teal/3 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Three Steps to <span className="gradient-text">Anywhere</span>
          </h2>
          <p className="text-xl text-gray-400">From download to departure in under 5 minutes.</p>
        </motion.div>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6 bg-windy-gray/40 p-8 rounded-2xl border border-gray-800/40 hover:border-windy-amber/20 transition-all"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-windy-amber/20 to-windy-teal/10 flex items-center justify-center">
                <span className="text-3xl">{s.emoji}</span>
              </div>
              <div>
                <div className="text-xs font-bold text-windy-amber/60 tracking-widest mb-1">STEP {s.num}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
