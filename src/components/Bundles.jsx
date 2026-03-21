import { motion } from 'framer-motion';

const bundles = [
  {
    name: "Traveler's Pack",
    icon: '🧳',
    pairs: 25,
    price: '$49',
    color: 'from-green-500/20 to-green-900/10',
    border: 'border-green-500/30',
    description: 'Pick any 25 language pairs. Perfect for multi-country trips. Download once, use forever — no internet needed.',
    cta: 'Choose Your 25 Languages',
    popular: false,
  },
  {
    name: "Polyglot's Library",
    icon: '🗣️',
    pairs: 200,
    price: '$149',
    color: 'from-blue-500/20 to-blue-900/10',
    border: 'border-blue-500/30',
    description: 'For the serious linguist. 200 language pairs of your choice. Cover every continent, every major language family.',
    cta: 'Build Your Library',
    popular: true,
  },
  {
    name: "Marco Polo's Magic Box",
    icon: '🧭',
    pairs: '2,500+',
    price: '$999',
    color: 'from-amber-500/20 to-amber-900/10',
    border: 'border-amber-500/30',
    description: 'EVERY language pair. Every specialist model. Every dialect. Yours forever. The ultimate collection for the ultimate traveler.',
    cta: 'Own Everything',
    popular: false,
    legendary: true,
  },
];

export default function Bundles() {
  return (
    <section id="bundles" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-windy-amber/2 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Own Your <span className="gradient-text">Languages</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            One-time purchase. Download once. Use forever. No subscription required — these are yours for life, powered by 
            <a href="https://windytranslate.com" className="text-windy-teal hover:underline ml-1">WindyTranslate</a>'s specialist models.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className={`relative bg-gradient-to-br ${b.color} bg-windy-gray/60 p-8 rounded-2xl border-2 ${b.border} transition-all hover:scale-[1.02]`}
            >
              {b.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              {b.legendary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark text-xs font-bold rounded-full">
                  🧭 LEGENDARY
                </div>
              )}
              <div className="text-center mb-6">
                <span className="text-5xl block mb-3">{b.icon}</span>
                <h3 className="text-2xl font-bold text-white">{b.name}</h3>
                <div className="mt-3">
                  <span className="text-lg text-gray-400">{b.pairs} language pairs</span>
                </div>
                <div className="mt-2">
                  <span className="text-4xl font-black gradient-text">{b.price}</span>
                  <span className="text-gray-500 text-sm ml-2">one-time</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">{b.description}</p>
              <button className={`w-full py-3.5 font-bold rounded-xl text-sm transition-all ${
                b.legendary
                  ? 'bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark cta-glow hover:scale-[1.02]'
                  : 'border-2 border-current text-windy-amber hover:bg-windy-amber/10'
              }`}>
                {b.cta}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10 text-sm text-gray-500">
          All bundles include free updates as new models are released. Compatible with all Windy apps.
        </div>
      </div>
    </section>
  );
}
